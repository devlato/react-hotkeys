(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ReactHotKeyStory_withKeyCombination",(function(){return ReactHotKeyStory_withKeyCombination})),__webpack_require__.d(__webpack_exports__,"ReactHotKeyStory_withKeySequence",(function(){return ReactHotKeyStory_withKeySequence})),__webpack_require__.d(__webpack_exports__,"ReactHotKeyStory_withMixedShortcuts",(function(){return ReactHotKeyStory_withMixedShortcuts})),__webpack_require__.d(__webpack_exports__,"ReactHotKeyStory_withInputField",(function(){return ReactHotKeyStory_withInputField}));__webpack_require__(160),__webpack_require__(26),__webpack_require__(16),__webpack_require__(625),__webpack_require__(55),__webpack_require__(15),__webpack_require__(34),__webpack_require__(163),__webpack_require__(174),__webpack_require__(180),__webpack_require__(21);var dist=__webpack_require__(93),addon_actions_dist=__webpack_require__(284),react=__webpack_require__(2),normalizeShortcuts=(__webpack_require__(19),__webpack_require__(23),__webpack_require__(24),__webpack_require__(20),__webpack_require__(161),__webpack_require__(172),__webpack_require__(47),__webpack_require__(102),__webpack_require__(173),__webpack_require__(638),__webpack_require__(41),__webpack_require__(27),__webpack_require__(639),__webpack_require__(18),__webpack_require__(111),__webpack_require__(88),__webpack_require__(640),function(keys){return Array.isArray(keys)?keys.map(normalizeShortcuts).reduce((function(acc,v){return acc.concat(v)}),[]):keys.split(",").map((function(str){return str.trim().toLowerCase()})).filter((function(str){return""!==str}))});function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var src_ReactHotKey=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(ReactHotKey,_React$Component);var _super=function _createSuper(Derived){return function(){var result,Super=_getPrototypeOf(Derived);if(_isNativeReflectConstruct()){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}(ReactHotKey);function ReactHotKey(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ReactHotKey),(_this=_super.call(this,props)).onKeysPressed=_this.onKeysPressed.bind(_assertThisInitialized(_this)),_this.state={keys:normalizeShortcuts(props.keys)},_this}return _createClass(ReactHotKey,null,[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props){return{keys:normalizeShortcuts(props.keys)}}}]),_createClass(ReactHotKey,[{key:"componentDidMount",value:function componentDidMount(){Mousetrap.bind(this.state.keys,this.onKeysPressed)}},{key:"componentWillUnmount",value:function componentWillUnmount(){Mousetrap.unbind(this.state.keys)}},{key:"render",value:function render(){return null}},{key:"onKeysPressed",value:function onKeysPressed(){this.props.onKeysPressed()}}]),ReactHotKey}(react.Component);src_ReactHotKey.displayName="ReactHotKey",src_ReactHotKey.__docgenInfo={description:"",methods:[],displayName:"ReactHotKey",props:{keys:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onKeysPressed:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx"]={name:"ReactHotKey",docgenInfo:src_ReactHotKey.__docgenInfo,path:"src/index.tsx"});__webpack_exports__.default={title:"react-shortcut",component:src_ReactHotKey};var ReactHotKeyStory_withKeyCombination=function(){return _ref};ReactHotKeyStory_withKeyCombination.displayName="ReactHotKeyStory_withKeyCombination",ReactHotKeyStory_withKeyCombination.displayName="ReactHotKeyStory_withKeyCombination";var ReactHotKeyStory_withKeySequence=function(){return _ref2};ReactHotKeyStory_withKeySequence.displayName="ReactHotKeyStory_withKeySequence",ReactHotKeyStory_withKeySequence.displayName="ReactHotKeyStory_withKeySequence";var ReactHotKeyStory_withMixedShortcuts=function(){return _ref3};ReactHotKeyStory_withMixedShortcuts.displayName="ReactHotKeyStory_withMixedShortcuts",ReactHotKeyStory_withMixedShortcuts.displayName="ReactHotKeyStory_withMixedShortcuts";var ReactHotKeyStory_withInputField=function(){return react.createElement(WrappedComponent,{keys:"command+shift+s,k o n a m i"},react.createElement("input",{type:"text",placeholder:"Type something in",style:{marginTop:"max(3vw, 3vh)",boxSizing:"border-box",width:"100%",border:"1px solid #666",borderRadius:"max(0.5vw, 0.5vh)",padding:"max(1vw, 1vh)",fontSize:"1.8vw"}}))};ReactHotKeyStory_withInputField.displayName="ReactHotKeyStory_withInputField",ReactHotKeyStory_withMixedShortcuts.displayName="ReactHotKeyStory_withMixedShortcuts";var WrappedComponent=function(_ref4){var children=_ref4.children,keys=_ref4.keys,keysKnobs=Object(dist.text)("keys",Array.isArray(keys)?keys.join(","):keys),onKeysPressedAction=Object(addon_actions_dist.action)("onKeysPressed"),onKeysPressed=react.useCallback((function(){alert("onKeysPressed"),onKeysPressedAction()}),[]);return react.createElement("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,bottom:0,left:0,right:0,fontFamily:"sans-serif",fontSize:"max(2vw, 2vh)",boxSizing:"border-box",color:"#666",padding:"max(4vw, 4vh)",margin:0}},react.createElement("div",{style:{display:"inline-flex",width:"auto",height:"auto",flexDirection:"column",boxSizing:"border-box",padding:0,margin:0}},react.createElement("p",{style:{userSelect:"none",cursor:"default",pointerEvents:"none",padding:0,margin:0}},Array.isArray(keys)?react.createElement(react.Fragment,null,"Type or press ",keys.map((function(k,i){return react.createElement(react.Fragment,{key:k},react.createElement("span",{style:{fontFamily:"system, monospace",fontWeight:600,color:"#222",fontSize:"max(1.8vw, 1.8vh)"}},k.includes(" ")?k.replace(/\s+?/gim,""):k),i<keys.length-1?" or ":null)}))," to trigger the callback"):keys.includes(",")?react.createElement(react.Fragment,null,"Type or press ",keys.split(",").map((function(k,i){return react.createElement(react.Fragment,{key:k},react.createElement("span",{style:{fontFamily:"system, monospace",fontWeight:600,color:"#222",fontSize:"max(1.8vw, 1.8vh)"}},k.includes(" ")?k.replace(/\s+?/gim,""):k),i<keys.split(",").length-1?" or ":null)}))," to trigger the callback"):keys.includes("+")?react.createElement(react.Fragment,null,"Press ",react.createElement("span",{style:{fontFamily:"system, monospace",fontWeight:600,color:"#222",fontSize:"max(1.8vw, 1.8vh)"}},keys.includes(" ")?keys.replace(/\s+?/gim,""):keys)," to trigger the callback"):react.createElement(react.Fragment,null,"Type ",react.createElement("span",{style:{fontFamily:"system, monospace",fontWeight:600,color:"#222",fontSize:"max(1.8vw, 1.8vh)"}},keys.includes(" ")?keys.replace(/\s+?/gim,""):keys)," to trigger the callback")),children),react.createElement(src_ReactHotKey,{keys:keysKnobs,onKeysPressed:onKeysPressed}))},_ref3=react.createElement(WrappedComponent,{keys:"command+shift+s,k o n a m i"}),_ref2=react.createElement(WrappedComponent,{keys:"k o n a m i"}),_ref=react.createElement(WrappedComponent,{keys:"command+shift+s"});WrappedComponent.displayName="WrappedComponent",ReactHotKeyStory_withKeyCombination.__docgenInfo={description:"",methods:[],displayName:"ReactHotKeyStory_withKeyCombination"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.tsx"]={name:"ReactHotKeyStory_withKeyCombination",docgenInfo:ReactHotKeyStory_withKeyCombination.__docgenInfo,path:"src/stories/index.stories.tsx"}),ReactHotKeyStory_withKeySequence.__docgenInfo={description:"",methods:[],displayName:"ReactHotKeyStory_withKeySequence"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.tsx"]={name:"ReactHotKeyStory_withKeySequence",docgenInfo:ReactHotKeyStory_withKeySequence.__docgenInfo,path:"src/stories/index.stories.tsx"}),ReactHotKeyStory_withMixedShortcuts.__docgenInfo={description:"",methods:[],displayName:"ReactHotKeyStory_withMixedShortcuts"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.tsx"]={name:"ReactHotKeyStory_withMixedShortcuts",docgenInfo:ReactHotKeyStory_withMixedShortcuts.__docgenInfo,path:"src/stories/index.stories.tsx"}),ReactHotKeyStory_withInputField.__docgenInfo={description:"",methods:[],displayName:"ReactHotKeyStory_withInputField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.tsx"]={name:"ReactHotKeyStory_withInputField",docgenInfo:ReactHotKeyStory_withInputField.__docgenInfo,path:"src/stories/index.stories.tsx"})},285:function(module,exports,__webpack_require__){__webpack_require__(286),__webpack_require__(432),__webpack_require__(433),__webpack_require__(642),module.exports=__webpack_require__(643)},350:function(module,exports){},433:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(93);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{isFullscreen:!0,enableShortcuts:!1,isToolshown:!1,name:"<ReactHotKey />",theme:{brandName:"<ReactHotKey />"},panelPosition:"right",hierarchyRootSeparator:null,hierarchySeparator:/\./,storySort:function storySort(a,b){return a[1].kind===b[1].kind?0:a[1].id.localeCompare(b[1].id,void 0,{numeric:!0})}},knobs:{escapeHTML:!1}});var context=__webpack_require__(624);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(context,module)}.call(this,__webpack_require__(226)(module))},624:function(module,exports,__webpack_require__){var map={"./stories/index.stories.tsx":283};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(71);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(644)],module)}.call(this,__webpack_require__(226)(module))},644:function(module,exports,__webpack_require__){var map={"./stories/index.stories.tsx":283};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=644}},[[285,1,2]]]);
//# sourceMappingURL=main.28687eb2783d7e9eb2fd.bundle.js.map