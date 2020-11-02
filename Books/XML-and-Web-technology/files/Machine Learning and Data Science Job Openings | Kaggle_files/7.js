(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1785:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return i}));var r=t(1803),o=t(547);function i(n){var t=n.value,i=n.children,a=n.significantFigures,s=n.disableTip,l=n.separator,c={value:t,magnitude:n.magnitude||r.a.byte},p=Object(r.b)(c,a||2),u=i?i(p):e.createElement("span",null,p.value,void 0!==l?l:" ",p.magnitude.metricShort);return s?u:e.createElement(o.b,{tip:t.toLocaleString()+" bytes"},u)}}).call(this,t(0))},1787:function(e,n,t){"use strict";(function(e){t.d(n,"f",(function(){return a})),t.d(n,"e",(function(){return l})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return u})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return m}));var r=t(3),o=t(198),i=t(1809);function a(e){var n=e.loaded,t=void 0===n?0:n,r=e.total,o=void 0===r?0:r,i={addEventListener:function(){},removeEventListener:function(){},dispatchEvent:function(e){return!0}};return{loaded:t,total:o,lengthComputable:o>0,timeStamp:Date.now(),type:"SyntheticProgressEvent",preventDefault:function(){},stopPropagation:function(){},stopImmediatePropagation:function(){},bubbles:!1,cancelable:!1,cancelBubble:!1,defaultPrevented:!1,eventPhase:0,isTrusted:!0,returnValue:!0,srcElement:{},deepPath:function(){return[]},initEvent:{},currentTarget:i,target:i,composed:!1,NONE:1,AT_TARGET:1,BUBBLING_PHASE:1,CAPTURING_PHASE:1}}var s,l={id:"00000000-0000-0000-0000-000000000000",name:"Pending",source:"UNKNOWN",context:{entityId:-1,entityName:null,type:"generic"},progressProps:{description:"Pending",initiatedTimeStamp:Date.now(),progressEvent:a({loaded:0,total:0})},bypassed:!1,errorType:null,errors:null},c={solution:null,solutionMapping:null,submission:null,submissionMapping:null},p=function(n){return Object(r.__awaiter)(void 0,void 0,Promise,(function(){var t;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return t=e.Admin.getBackgroundTask,s&&(t=t.with(s)),[4,t({id:n})];case 1:return[2,r.sent()]}}))}))};function u(e,n,t,a){var s,l=this;void 0===n&&(n=null),void 0===t&&(t=p);var c=null,u=null,f=null,m=null;var g=function(e){o(e,"taskProgress must exist to report notifications on");var t=function(e){return!function(e){if(!e)return!0;if(e.bypassed)return!0;if(function(e){if(!e||!e.progressProps)return!1;var n=e.progressProps.progressEvent;return n&&!1===n.isLengthComputable||0===n.loaded&&0===n.total}(e))return!1;return function(e){return!!(e&&e.errors&&e.errors.length)}(e)||d(e)}(e)}(e);if(e.errorType&&e.errors&&e.errors.length)!function(e){var t=e.errors.map((function(e){return new i.a(e)}));m&&m(n?n(e.errorType,t):t)}(e);else if(t)u&&u(e);else{if(!d(e))throw new Error("unknown state of taskProgress: "+JSON.stringify(e));f&&f(e)}return t},h=function(e,n,i){void 0===i&&(i=2e3),window.clearTimeout(s),s=window.setTimeout((function(){(function(e){return Object(r.__awaiter)(l,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return o(e,"taskProgress must exist to poll progress"),[4,t(e.id)];case 1:return(n=r.sent())||!e.context?[3,3]:[4,a(e.context)];case 2:n=r.sent(),r.label=3;case 3:return[2,n]}}))}))})(e).then((function(e){g(e)?h(e,n):n(e)})).catch((function(e){if(!m)throw e;m([e])}))}),i)};return Object.defineProperty((function(n,t){return new Promise((function(i,a){(function(n,t,i){return Object(r.__awaiter)(l,void 0,void 0,(function(){var a,s,l;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:i||"function"!=typeof t||(i=t,t=void 0),i||(i=function(e){}),r.label=1;case 1:return r.trys.push([1,3,,4]),c&&c(),[4,e(n,t)];case 2:return a=r.sent(),o((s=a).id,"taskProgress should have an id"),g(s)?h(s,i):i(s),[2,s];case 3:throw l=r.sent(),m&&m([l]),l;case 4:return[2]}}))}))})(n,t,i).catch(a)}))}),"subscribe",{value:function(e,n,t,r,o){return c=e,u=n,f=t,m=r,function(e){return function(){c=null,u=null,f=null,m=null,e()}}(o)},enumerable:!0,configurable:!0})}function d(e){if(e.bypassed)return!0;var n=e&&e.progressProps?e.progressProps.progressEvent:null;return n&&0!==n.total&&n.total===n.loaded}function f(e){if(!e.progressEvent)return 0;var n=e.progressEvent,t=(n.lengthComputable,n.loaded),r=n.total,o=n.timeStamp-e.initiatedTimeStamp,i=(r-t)/(r?t/o:0),a=Math.round(i/1e3);return a===1/0||NaN===a?null:a}function m(e){var n=f(e);if(null==n)return"";if(1==n)return"1 sec left";if(n<60)return n+" secs left";var t=Math.floor(n/60);if(1==t)return"1 min left";if(t<60)return t+" mins left";var r=Math.floor(n/3600);return 1==r?"1 hour left":r+" hours left"}}).call(this,t(264))},1788:function(e,n,t){"use strict";(function(e){t.d(n,"c",(function(){return f})),t.d(n,"e",(function(){return m})),t.d(n,"b",(function(){return g})),t.d(n,"d",(function(){return v})),t.d(n,"a",(function(){return _}));var r=t(3),o=t(1),i=t.n(o),a=t(198),s=t(1551),l=t(10),c=t(547),p=i.a.div.withConfig({displayName:"FlexTable_FlexTableView",componentId:"sc-11kfhsf"})(j||(j=Object(r.__makeTemplateObject)(['\n  align-items: center;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n  font-size: 14px;\n  font-variant-numeric: tabular-nums;\n  justify-content: space-between;\n  line-height: 22px;\n  margin-bottom: 12px;\n\n  & > div:first-child {\n    background: #f8f9f9;\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  & > div {\n    align-items: center;\n    border: 1px solid #dedfe0;\n    border-width: 1px 0 0 1px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    width: 100%;\n    &:last-child {\n      border-bottom-width: 1px;\n    }\n  }\n  & button {\n    align-self: flex-end;\n  }\n\n  & input,\n  & select {\n    padding: 4px 6px;\n    display: inline-flex;\n    flex: 1 1 auto;\n    border: 1px solid rgb(169, 169, 169);\n    width: 95%;\n    border: 0;\n  }\n\n  & select {\n    border: 0;\n    color: #008abc;\n    cursor: pointer;\n    font-family: "Inter", sans-serif, sans;\n    font-size: 14px;\n\n    > option {\n      color: rgba(0, 0, 0, 0.7);\n      line-height: 20px;\n      font-size: 14px;\n    }\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  & input {\n    font-size: 1em;\n    line-height: 1em;\n    border-top: 0;\n  }\n'],['\n  align-items: center;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n  font-size: 14px;\n  font-variant-numeric: tabular-nums;\n  justify-content: space-between;\n  line-height: 22px;\n  margin-bottom: 12px;\n\n  & > div:first-child {\n    background: #f8f9f9;\n    color: rgba(0, 0, 0, 0.5);\n  }\n\n  & > div {\n    align-items: center;\n    border: 1px solid #dedfe0;\n    border-width: 1px 0 0 1px;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    width: 100%;\n    &:last-child {\n      border-bottom-width: 1px;\n    }\n  }\n  & button {\n    align-self: flex-end;\n  }\n\n  & input,\n  & select {\n    padding: 4px 6px;\n    display: inline-flex;\n    flex: 1 1 auto;\n    border: 1px solid rgb(169, 169, 169);\n    width: 95%;\n    border: 0;\n  }\n\n  & select {\n    border: 0;\n    color: #008abc;\n    cursor: pointer;\n    font-family: "Inter", sans-serif, sans;\n    font-size: 14px;\n\n    > option {\n      color: rgba(0, 0, 0, 0.7);\n      line-height: 20px;\n      font-size: 14px;\n    }\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  & input {\n    font-size: 1em;\n    line-height: 1em;\n    border-top: 0;\n  }\n']))),u=i.a.div.withConfig({displayName:"FlexTable_FlexRowView",componentId:"sc-18wdrox"})(E||(E=Object(r.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n"],["\n  display: flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n"])));function d(e,n){return e.view||n}function f(n){var t=n.children,o=Object(r.__rest)(n,["children"]);return e.createElement(m,Object(r.__assign)({},o),t&&t.map((function(n,t){return e.createElement(g,{key:t,children:n})})))}function m(n){var t=n.children,o=n.widthRatios,i=Object(r.__rest)(n,["children","widthRatios"]),a=d(n,p);return e.createElement(a,Object(r.__assign)({},i),t&&e.Children.map(n.children,(function(n,t){return null===n?null:o?e.cloneElement(n,{widthRatios:o}):n})))}function g(n){var t=n.children,o=n.showContentHover,i=Object(r.__rest)(n,["children","showContentHover"]),a=t?e.Children.map(t,(function(n,t){return e.createElement(_,{showContentHover:o,key:t},n)})):[];return e.createElement(v,Object(r.__assign)({},i,{children:a}))}var h=i.a.span.withConfig({displayName:"FlexTable_FlexCellOverlayView",componentId:"sc-1anj4ho"})(k||(k=Object(r.__makeTemplateObject)(["\n  position: absolute;\n  right: 0;\n  z-index: 10;\n  height: 33px;\n  display: inline-flex;\n  align-items: center;\n"],["\n  position: absolute;\n  right: 0;\n  z-index: 10;\n  height: 33px;\n  display: inline-flex;\n  align-items: center;\n"]))),b=i()(h).withConfig({displayName:"FlexTable_FlexCellTipView",componentId:"sc-14l4t8b"})(O||(O=Object(r.__makeTemplateObject)(["\n  pointer-events: none;\n  right: 10px;\n  font-size: 0.7rem;\n  opacity: 0.8;\n  color: ",";\n"],["\n  pointer-events: none;\n  right: 10px;\n  font-size: 0.7rem;\n  opacity: 0.8;\n  color: ",";\n"])),l.b.TextLink),x=i()(b).withConfig({displayName:"FlexTable_FlexCellWarnView",componentId:"sc-1ixm38f"})(C||(C=Object(r.__makeTemplateObject)(["\n  color: ",";\n"],["\n  color: ",";\n"])),l.b.KaggleRedDark),w=i.a.div.withConfig({displayName:"FlexTable_FlexCellContainerView",componentId:"sc-1hp6a7l"})(P||(P=Object(r.__makeTemplateObject)(["\n  position: relative;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  align-items: center;\n  box-sizing: border-box;\n  border-right: 1px solid #dedfe0;\n  min-height: 33px;\n  min-width: 0px;\n  padding: 0;\n  margin: 0;\n\n  &:hover "," {\n    opacity: 0.2;\n  }\n\n  &:hover "," {\n    opacity: 0.9;\n  }\n"],["\n  position: relative;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  align-items: center;\n  box-sizing: border-box;\n  border-right: 1px solid #dedfe0;\n  min-height: 33px;\n  min-width: 0px;\n  padding: 0;\n  margin: 0;\n\n  &:hover "," {\n    opacity: 0.2;\n  }\n\n  &:hover "," {\n    opacity: 0.9;\n  }\n"])),b,h),y=i.a.div.withConfig({displayName:"FlexTable_FlexCellView",componentId:"sc-2mn4ye"})(S||(S=Object(r.__makeTemplateObject)(["\n  position: relative;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 33px;\n  min-width: 0px;\n  padding: 0;\n  width: 100%;\n\n  & > * {\n    overflow: hidden;\n    padding: 6px 10px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  & > select {\n    min-height: 33px;\n  }\n\n  & > input {\n    min-height: 23px;\n  }\n"],["\n  position: relative;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 33px;\n  min-width: 0px;\n  padding: 0;\n  width: 100%;\n\n  & > * {\n    overflow: hidden;\n    padding: 6px 10px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  & > select {\n    min-height: 33px;\n  }\n\n  & > input {\n    min-height: 23px;\n  }\n"])));function v(n){var t=n.children,o=n.widthRatios,i=Object(r.__rest)(n,["children","widthRatios"]),s=t?e.Children.count(t):0;o&&a(o.length===s,"FlexRow has "+s+" cells but only specifies "+o.length+" widthRatios");var l=d(n,u),c=100/(o?o.reduce((function(e,n){return e+n}),0):s);return e.createElement(l,Object(r.__assign)({},i),t&&e.Children.map(t,(function(n,t){var r=o?o[t]:1,i={style:{width:Math.floor(c*r*10)/10+"%"}};return e.cloneElement(n,i)})))}function _(n){var t=n.children,o=n.cursor,i=n.hideTip,a=n.overlay,l=n.tip,p=n.warn,u=n.justifyContent,f=n.showContentHover,m=Object(r.__rest)(n,["children","cursor","hideTip","overlay","tip","warn","justifyContent","showContentHover"]),g={justifyContent:u||"flex-start"},v=s({inner:e.createElement(y,{style:g},e.isValidElement(t)?t:e.createElement("div",null,t)),overlay:a?e.createElement(h,null,a):null}),_=p||l||f?e.createElement(c.b,{tip:p||l||v,style:{width:"100%",cursor:o||"default"}},v):v,j=i?null:p?x:l?b:null,E=d(n,w);return e.createElement(E,Object(r.__assign)({},m),_,!a&&j&&e.createElement(j,{children:e.createElement("i",{className:"fa fa-"+(p?"exclamation":"info")+"-circle"})}))}var j,E,k,O,C,P,S;!function(n){function t(e){var t=n.call(this,e)||this;return t.handleKeyPress=function(e){t.props.rejectedCharacterRegExp&&(String.fromCharCode(e.which).match(t.props.rejectedCharacterRegExp)&&e.preventDefault&&(e.preventDefault(),e.stopPropagation()))},t.handleKeyDown=function(e){"Enter"!=e.key?"Escape"!=e.key||t.handleCancel():t.handleSave()},t.handleSave=function(){var e=t.props.onUpdate;t.setState({isEditing:!1},(function(){e&&e(!1)})),t.props.onSave&&t.props.onSave(t.state.content)},t.handleCancel=function(){var e=t.props.onUpdate;t.setState({isEditing:!1},(function(){e&&e(!1)}))},t.handleEdit=function(){var e=t.props.onUpdate;t.setState({isEditing:!0},(function(){t.inputBox.focus(),e&&e(!0)}))},t.state={content:t.props.value||"",isEditing:!1},t}Object(r.__extends)(t,n),t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.setState({content:e.value||""})},t.prototype.handleChange=function(e){var n=this;this.setState({content:e.target.value},(function(){n.props.onChange&&n.props.onChange(n.state.content)}))},t.prototype.renderInput=function(){var n=this;return e.createElement("input",{ref:function(e){return n.inputBox=e},className:"inline-text-editor__input",style:this.props.inputStyle,value:this.state.content,placeholder:this.props.placeholder,onChange:function(e){return n.handleChange(e)},onKeyPress:this.handleKeyPress,onKeyDown:this.handleKeyDown,onClick:function(e){e.stopPropagation()}})},t.prototype.renderReadOnly=function(){return e.createElement("div",{className:(this.state.content?"":"inline-text-editor__placeholder")+" inline-text-editor__readonly",onClick:this.handleEdit},this.state.content||this.props.placeholder)},t.prototype.render=function(){var n=this.props,t=(n.style,n.value,n.placeholder,n.rejectedCharacterRegExp,n.onSave,n.onChange,n.hideButton,n.inputStyle,n.onUpdate,Object(r.__rest)(n,["style","value","placeholder","rejectedCharacterRegExp","onSave","onChange","hideButton","inputStyle","onUpdate"])),o=this.state.isEditing;return e.createElement(_,Object(r.__assign)({},t),o?this.renderInput():this.renderReadOnly())}}(e.Component)}).call(this,t(0))},1793:function(e,n,t){"use strict";var r,o,i,a,s,l,c,p,u,d=t(3),f=t(0),m=t(1787),g=t(1785),h=t(1803),b=t(1546),x=t(198),w=t(1),y=t.n(w),v=(y.a.div.withConfig({displayName:"Material_List",componentId:"sc-1o3lk38"})(r||(r=Object(d.__makeTemplateObject)(["\n  list-style: none;\n  margin: 0 0.5em;\n  padding: 0;\n"],["\n  list-style: none;\n  margin: 0 0.5em;\n  padding: 0;\n"]))),y.a.div.withConfig({displayName:"Material_Grow",componentId:"sc-6vcldd"})(o||(o=Object(d.__makeTemplateObject)(["\n  font-size: 1.2em;\n"],["\n  font-size: 1.2em;\n"]))),y.a.div.withConfig({displayName:"Material_Shrink",componentId:"sc-1kg7g36"})(i||(i=Object(d.__makeTemplateObject)(["\n  font-size: 0.8em;\n"],["\n  font-size: 0.8em;\n"]))),y.a.div.withConfig({displayName:"Material_Margin",componentId:"sc-e1v02p"})(a||(a=Object(d.__makeTemplateObject)(["\n  margin: 0.5em;\n"],["\n  margin: 0.5em;\n"]))),"\n    padding: 0.5em;\n    margin: 0;\n    display: flex;\n    flex-flow: column nowrap;\n    color: #9CA4B4;\n    background-color: #4F5A66;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\n    > h5 {\n        font-weight: 700;\n        font-family: Roboto,Arial,sans-serif;\n    }\n"),_=(y.a.div.withConfig({displayName:"Material_Rectangle",componentId:"sc-1q3wcv3"})(s||(s=Object(d.__makeTemplateObject)(["","\n    font-size: ",";\n"],["","\n    font-size: ",";\n"])),v,(function(e){return e.size||"1em"})),y.a.div.withConfig({displayName:"Material_Square",componentId:"sc-11gutu9"})(l||(l=Object(d.__makeTemplateObject)(["\n  ","\n  justify-content: center;\n  align-items: center;\n  font-size: ",";\n"],["\n  ","\n  justify-content: center;\n  align-items: center;\n  font-size: ",";\n"])),v,(function(e){return e.size||"1em"})),y.a.button.withConfig({displayName:"Material_Button",componentId:"sc-txfug2"})(c||(c=Object(d.__makeTemplateObject)(["\n  display: inline-flex;\n  margin: 0 0 0.4rem;\n  padding: 0.4rem;\n  border-radius: 1px;\n  font-weight: 700;\n  color: #9ca4b4;\n  background-color: #005d8c;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n"],["\n  display: inline-flex;\n  margin: 0 0 0.4rem;\n  padding: 0.4rem;\n  border-radius: 1px;\n  font-weight: 700;\n  color: #9ca4b4;\n  background-color: #005d8c;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n"]))),y.a.button.withConfig({displayName:"Material_SquareButton",componentId:"sc-wpw71a"})(p||(p=Object(d.__makeTemplateObject)(["\n  display: inline-flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0;\n  border-radius: 1px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background-color: #005d8c;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  width: 8em;\n  height: 8em;\n  color: #c7c8c9;\n  > * {\n    color: #20beff;\n    color: #9ca4b4;\n    font-weight: 400;\n  }\n"],["\n  display: inline-flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0;\n  border-radius: 1px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background-color: #005d8c;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\n    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  width: 8em;\n  height: 8em;\n  color: #c7c8c9;\n  > * {\n    color: #20beff;\n    color: #9ca4b4;\n    font-weight: 400;\n  }\n"]))),t(1809),t(1788)),j=t(10),E=t(1905);t.d(n,"d",(function(){return C})),t.d(n,"a",(function(){return z})),t.d(n,"c",(function(){return F})),t.d(n,"b",(function(){return I})),function(e){e[e.None=0]="None",e[e.Pending=1]="Pending",e[e.Processing=2]="Processing",e[e.Complete=4]="Complete",e[e.Success=8]="Success",e[e.Error=16]="Error"}(u||(u={}));var k,O=y.a.div.withConfig({displayName:"Progress_ColumnView",componentId:"sc-1j36w92"})(R||(R=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n"],["\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n"])));!function(e){e.Progress="progress",e.Children="children",e.Error="error"}(k||(k={}));var C=function(e){function n(n){var t=e.call(this,n)||this;return t.handlePending=function(){var e=u.Pending,n=m.e;t.setState({taskStatusFlags:e,taskProgress:n})},t.handleProgress=function(e){var n=u.Processing;t.setState({taskStatusFlags:n,taskProgress:e})},t.handleCompletion=function(e){var n=u.Complete|(e.error?u.Error:u.Success);t.setState({taskProgress:e}),window.setTimeout((function(){return t.setState({taskStatusFlags:n})}),1e3)},t.handleErrors=function(e){if(e.length){var n=t.state.taskStatusFlags&~u.Success|u.Error;t.setState({taskStatusFlags:n,errors:e})}else{n=u.None;t.setState({taskStatusFlags:n,errors:null})}},t.hasStatus=function(e){return!!(t.state.taskStatusFlags&e)},t.getProgressProps=function(e){var n=t.state.taskProgress;if(!n)return null;var r=n.progressProps,o=e?e.combineProgressEvent(r.progressEvent):m.f(r.progressEvent);return Object(d.__assign)(Object(d.__assign)({},r),{progressEvent:o})},t.displayKeyFilter=function(e){var n=(0,t.props.isProgressEnabledForTaskStatusFlags)(t.state.taskStatusFlags);switch(e){case k.Progress:return n;case k.Children:return!n;case k.Error:return t.hasStatus(u.Error);default:throw new Error("Unexpected TaskProgressKey: "+e)}},t.getFlag=function(e,n){var r=t.props[e];return"boolean"==typeof r?r:n},t.state={taskProgress:null,errors:null,taskStatusFlags:u.None},t}return Object(d.__extends)(n,e),n.prototype.componentDidMount=function(){this.unsubscribe=this.props.taskTrigger.subscribe(this.handlePending,this.handleProgress,this.handleCompletion,this.handleErrors,(function(){}))},n.prototype.componentWillUnmount=function(){this.unsubscribe()},n.prototype.render=function(){var e=this,n=this.props.children,t=this.state,r=(t.taskProgress,t.taskStatusFlags,t.errors);var o=this.getFlag("showRate",!0),i=this.getFlag("showRemaining",!0),a=this.getFlag("showDescription",!1),s=this.getProgressProps(),l=this.hasStatus(u.Processing);return f.createElement(O,null,this.displayKeyFilter(k.Children)?f.createElement(O,{key:k.Children},n||null):this.displayKeyFilter(k.Progress)?f.createElement(O,{key:k.Progress},s&&f.createElement(z,Object(d.__assign)({key:k.Progress},s),a&&l&&f.createElement(N,null,s.description&&f.createElement(F,null,s.description),s.stepDescription&&f.createElement(F,null,s.stepDescription)),o&&l&&f.createElement(I,Object(d.__assign)({},s)),i&&l&&f.createElement(Q,Object(d.__assign)({},s)))):this.displayKeyFilter(k.Error)&&f.createElement(O,{key:k.Error},r&&r.map((function(n,t){return f.createElement(ae,{key:k.Error+"-"+t,error:n,onDismiss:function(){e.handleErrors(Object(d.__spread)(r.slice(0,t),r.slice(t+1)))}})}))))},n.defaultProps={isProgressEnabledForTaskStatusFlags:function(e){return!!(e&u.Pending||e&u.Processing||e&u.Error)}},n}(f.Component),P=(y.a.div.withConfig({displayName:"Progress_ProgressContainer",componentId:"sc-1j6wiok"})(B||(B=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n"],["\n  display: flex;\n  flex-flow: column nowrap;\n  flex: 1 1 auto;\n"]))),y.a.div.withConfig({displayName:"Progress_ProgressBarView",componentId:"sc-10nhyxb"})(M||(M=Object(d.__makeTemplateObject)(["\n  position: relative;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  border-color: ",";\n  & svg {\n    width: 100%;\n    min-height: 26px;\n  }\n"],["\n  position: relative;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1 1 auto;\n  border-color: ",";\n  & svg {\n    width: 100%;\n    min-height: 26px;\n  }\n"])),j.b.KaggleBlueLight));var S=function(e){return function(n){var t=n/e.divisor;return{percent:-1*Math.pow(e.base,t)+1,total:t}}},T=(function(e){function n(n){var t=e.call(this,n)||this;return t.tick=function(e){t.forceUpdate(),t.request=window.requestAnimationFrame(t.tick)},t.seek=function(e){return void 0===e&&(e=Date.now()),t.timestamp=e},t.start=function(){return t.request=window.requestAnimationFrame(t.tick)},t.stop=function(){return window.cancelAnimationFrame(t.request)},function(e){x(e.base>=0,"<Trickle /> base must be greater than or equal to 0."),x(e.base<=1,"<Trickle /> base must be less than or equal to 1.")}(n),t.calculate=S(n),t}Object(d.__extends)(n,e),n.prototype.componentDidMount=function(){this.props.autostart&&(this.seek(),this.start())},n.prototype.componentWillUnmount=function(){this.stop()},n.prototype.render=function(){var e=this.props.children,n=this.calculate(Date.now()-this.timestamp),t=function(e){return function(n){return m.f({loaded:n.loaded+e.total*e.percent,total:n.total+e.total})}}(n);return e(Object(d.__assign)(Object(d.__assign)({},n),{seek:this.seek,start:this.start,stop:this.stop,combineProgressEvent:t}))}}(f.Component),y.a.div.withConfig({displayName:"Progress_ProgressBarChildrenView",componentId:"sc-1b9luu7"})(D||(D=Object(d.__makeTemplateObject)(["\n  position: absolute;\n  z-index: 100;\n  display: flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  align-items: center;\n  left: 0;\n  right: 0;\n"],["\n  position: absolute;\n  z-index: 100;\n  display: flex;\n  flex-flow: row nowrap;\n  flex: 1 1 auto;\n  justify-content: space-between;\n  align-items: center;\n  left: 0;\n  right: 0;\n"])))),N=y.a.div.withConfig({displayName:"Progress_ProgressStack",componentId:"sc-1dys6tw"})(A||(A=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n"],["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n"]))),z=function(e){var n=e.children,t=e.progressEvent,r=(t.lengthComputable,t.loaded),o=t.total,i=e.initialOffsetAmount?e.initialOffsetAmount:0,a=o?Math.floor((r+i)/(o+i)*100):0;return f.createElement(P,null,f.createElement(b.a,{strokeLinecap:"butt",percent:a,strokeWidth:4,trailWidth:0,strokeColor:"#20BEFF"}),n&&f.createElement(T,null,n))},F=y.a.span.withConfig({displayName:"Progress_ProgressTextView",componentId:"sc-zj45vh"})(L||(L=Object(d.__makeTemplateObject)(["\n  font-size: 10px;\n  font-weight: bold;\n  color: ",";\n  margin-left: 1em;\n  margin-right: 1em;\n  line-height: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"],["\n  font-size: 10px;\n  font-weight: bold;\n  color: ",";\n  margin-left: 1em;\n  margin-right: 1em;\n  line-height: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),j.b.CodeWhite);function I(e){var n=e.progressEvent,t=(n.lengthComputable,n.loaded),r=n.total,o=n.timeStamp-e.initiatedTimeStamp,i=r&&o?t/o:0;return o>0?f.createElement(g.a,{value:i,magnitude:h.a.kilobyte,significantFigures:1},(function(e){return f.createElement(F,null,e.value," ",e.magnitude.metricShort,"/s")})):f.createElement("span",null)}var R,B,M,D,A,L,V,U,K,q,W,H,G,J,Y,Z,Q=function(e){var n=m.c(e);return n?f.createElement(F,null,n,"s remaining"):null},X=y.a.div.withConfig({displayName:"Progress_ErrorContainer",componentId:"sc-11p33cv"})(V||(V=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n"],["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n"]))),$=(y.a.header.withConfig({displayName:"Progress_ErrorHeader",componentId:"sc-l2l75y"})(U||(U=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: row wrap;\n"],["\n  display: flex;\n  flex-flow: row wrap;\n"]))),y.a.div.withConfig({displayName:"Progress_ErrorBody",componentId:"sc-1ofnke9"})(K||(K=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: column wrap;\n"],["\n  display: flex;\n  flex-flow: column wrap;\n"])))),ee=y.a.footer.withConfig({displayName:"Progress_ErrorFooter",componentId:"sc-124ya5a"})(q||(q=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"],["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n"]))),ne=y.a.h3.withConfig({displayName:"Progress_ErrorName",componentId:"sc-1r0e3t4"})(W||(W=Object(d.__makeTemplateObject)(["\n  color: red;\n  font-size: 0.9em;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 700;\n"],["\n  color: red;\n  font-size: 0.9em;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 700;\n"]))),te=y.a.span.withConfig({displayName:"Progress_ErrorMessage",componentId:"sc-1ldbif1"})(H||(H=Object(d.__makeTemplateObject)(["\n  font-size: 0.7em;\n  font-family: ",";\n  font-weight: 700;\n"],["\n  font-size: 0.7em;\n  font-family: ",";\n  font-weight: 700;\n"])),j.c.Monospace),re=(y.a.pre.withConfig({displayName:"Progress_ErrorStack",componentId:"sc-1ec7f5o"})(G||(G=Object(d.__makeTemplateObject)(["\n  font-size: 0.6em;\n  font-family: ",";\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background-color: #eee;\n  overflow: auto;\n  max-height: 10em;\n  max-width: 65em;\n"],["\n  font-size: 0.6em;\n  font-family: ",";\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  background-color: #eee;\n  overflow: auto;\n  max-height: 10em;\n  max-width: 65em;\n"])),j.c.Monospace),y.a.span.withConfig({displayName:"Progress_ErrorSource",componentId:"sc-vej8de"})(J||(J=Object(d.__makeTemplateObject)(["\n  font-size: 0.7em;\n  font-weight: 700px;\n"],["\n  font-size: 0.7em;\n  font-weight: 700px;\n"]))),y.a.button.withConfig({displayName:"Progress_ErrorButton",componentId:"sc-1naeymm"})(Y||(Y=Object(d.__makeTemplateObject)(['\n  background: #fbeeee;\n  color: #da5957;\n  font-weight: 700;\n  border: 0;\n  border-radius: 4px;\n  flex: 0 0 auto;\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 8px 16px;\n  cursor: pointer;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  margin-left: auto;\n  max-width: 200px;\n  min-width: 100px;\n'],['\n  background: #fbeeee;\n  color: #da5957;\n  font-weight: 700;\n  border: 0;\n  border-radius: 4px;\n  flex: 0 0 auto;\n  font-family: "Inter", sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 8px 16px;\n  cursor: pointer;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  margin-left: auto;\n  max-width: 200px;\n  min-width: 100px;\n'])))),oe=y.a.div.withConfig({displayName:"Progress_MessagingView",componentId:"sc-1a4hj3t"})(Z||(Z=Object(d.__makeTemplateObject)(["\n  display: flex;\n  flex: 1 1 auto;\n"],["\n  display: flex;\n  flex: 1 1 auto;\n"]))),ie=function(e){switch(e.mimeType){case"text/plain":return f.createElement(oe,null,e.body);case"application/json":var n=JSON.parse(e.body),t=Object.keys(n).reduce((function(e,t){var r;return Object(d.__assign)(Object(d.__assign)({},e),((r={})[""+t.charAt(0).toLowerCase()+t.substring(1)]=n[t],r))}),{});switch(e.serializedType){case"Kaggle.Dto.DataFrameSchemaParserMessage":var r=t;return f.createElement(oe,null,f.createElement(_.e,null,f.createElement(_.b,null,[r.parseErrors.length+" Parse Errors Occurred:"]),r.parseErrors.map((function(e,n){return f.createElement(_.b,{key:n},[e])}))));default:throw new Error("Unmapped ClientErrorMessaging serializedType: "+JSON.stringify(e))}default:throw new Error("Unknown mime type: "+e.mimeType)}},ae=function(e){var n=e.error,t=e.onDismiss;return f.createElement(X,null,n.messaging?f.createElement(ie,Object(d.__assign)({},n.messaging)):f.createElement($,null,f.createElement(E.a,null,f.createElement(ne,null,n.name)),f.createElement(te,null,n.message)),f.createElement(ee,null,f.createElement("div",null,!1),f.createElement("div",null,t&&f.createElement(re,{onClick:t},"Dismiss"))))}},1803:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var r={byte:{metricShort:"B",metricLong:"byte"},kilobyte:{metricShort:"kB",metricLong:"kilobyte"},megabyte:{metricShort:"MB",metricLong:"megabyte"},gigabyte:{metricShort:"GB",metricLong:"gigabyte"},terabyte:{metricShort:"TB",metricLong:"terabyte"},petabyte:{metricShort:"PB",metricLong:"petabyte"},exabyte:{metricShort:"EB",metricLong:"exabyte"},zettabyte:{metricShort:"ZB",metricLong:"zettabyte"},yottabyte:{metricShort:"YB",metricLong:"yottabyte"}},o=[r.byte,r.kilobyte,r.megabyte,r.gigabyte,r.terabyte,r.petabyte,r.exabyte,r.zettabyte,r.yottabyte];function i(e,n){for(var t=o.indexOf(e.magnitude),r=o.length-1,i=e.value;i<1&&t>0;)i*=1e3,t--;for(;i>=1e3&&t<r;)i/=1e3,t++;var a=o[t];if("number"==typeof n){var s=Math.pow(10,n);i=Math.round(i*s)/s}return{value:i,magnitude:a}}},1809:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(3),o=t(198),i=function(e){function n(n){var t=e.call(this,n.message)||this;return o(n,"error object required in SourceError ctor"),o(n.message,"error message required in SourceError ctor"),t.name=n.name||"ServerError",t.stack=n.stack,t.source=n.source,t.messaging=n.messaging,t}return Object(r.__extends)(n,e),n}(Error)},1829:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r,o,i,a,s=t(3),l=t(0),c=t(1),p=t.n(c),u=t(10),d=(p.a.div.withConfig({displayName:"Conditional_RelativeView",componentId:"sc-1xxeylx"})(r||(r=Object(s.__makeTemplateObject)(["\n  position: relative;\n  margin: 0 auto;\n"],["\n  position: relative;\n  margin: 0 auto;\n"]))),p.a.div.withConfig({displayName:"Conditional_AbsoluteView",componentId:"sc-1ecghle"})(o||(o=Object(s.__makeTemplateObject)(["\n  position: absolute;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  right: 0;\n  height: ","px;\n"],["\n  position: absolute;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  right: 0;\n  height: ","px;\n"])),(function(e){return e.height})),p.a.span.withConfig({displayName:"Conditional_ConditionalBannerView",componentId:"sc-1lgy7fw"})(i||(i=Object(s.__makeTemplateObject)(["\n  opacity: 0.5;\n  margin-right: 5px;\n  font-size: 0.75em;\n"],["\n  opacity: 0.5;\n  margin-right: 5px;\n  font-size: 0.75em;\n"]))),function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={bypassRender:!0,height:null},n.updateState=function(e){if(void 0===e&&(e=n.props.shouldRender),n.mounted)if("boolean"==typeof e)n.setState({bypassRender:!e});else if("function"==typeof e)n.updateState(e());else{if(!e.then)throw new Error('shouldRender was not of the correct type: received type "'+typeof e+'" | value: '+e);e.then(n.updateState)}},n}return Object(s.__extends)(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.updateState()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.shouldRender!==e.shouldRender&&this.updateState(e.shouldRender)},n.prototype.render=function(){var e=this.props,n=e.children;e.banner,e.tip;if(this.state.bypassRender)return null;var t="function"==typeof n?n():n;return l.createElement(f,null,t)},n}(l.Component)),f=p.a.div.withConfig({displayName:"Conditional_ConditionalView",componentId:"sc-1ynuar2"})(a||(a=Object(s.__makeTemplateObject)(["\n  > * {\n    border: 1px dashed "," !important;\n    &:empty {\n      display: none;\n    }\n  }\n"],["\n  > * {\n    border: 1px dashed "," !important;\n    &:empty {\n      display: none;\n    }\n  }\n"])),u.b.AdminOnlyBorder)},1905:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(3),o=t(0),i=t(1829);function a(e){return o.createElement(i.a,Object(r.__assign)({banner:o.createElement("span",{className:"fa-stack"},o.createElement("i",{className:"fa fa-circle fa-stack-2x fa-inverse"}),o.createElement("i",{className:"fa fa-user-secret fa-stack-1x"})),tip:"Only visible in development."},e,{shouldRender:!1}))}}}]);