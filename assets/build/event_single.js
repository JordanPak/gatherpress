!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.React}()},,function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(13);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(14),a=n(10);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},function(e,t){!function(){e.exports=this.wp.i18n}()},,function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},,,function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.ReactDOM}()},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(15),o=n.n(a),c=n(4),s=n.n(c),i=n(5),u=n.n(i),l=n(6),f=n.n(l),p=n(7),b=n.n(p),d=n(1),h=n.n(d),g=n(0),m=n(8),v=n(10),y=n.n(v);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b()(this,n)}}function j(e){this.setState({attendanceList:e})}var _=function(e){f()(n,e);var t=O(n);function n(e){var r;s()(this,n),r=t.call(this,e),j=j.bind(y()(r)),r.state={attendanceList:GatherPress.attendees},r.pages=[{name:Object(m.__)("Attending","gatherpress"),slug:"attending"},{name:Object(m.__)("Waitlist","gatherpress"),slug:"waitlist"},{name:Object(m.__)("Not Attending","gatherpress"),slug:"not_attending"}];for(var a=0;a<r.pages.length;a++){var o=r.pages[a];if(GatherPress.current_user_status===o.slug){r.state.activeTab=a;break}}return r}return u()(n,[{key:"tabUpdate",value:function(e){e.preventDefault();for(var t=e.target.dataset.id,n=0;n<this.pages.length;n++){if(t===this.pages[n].slug){this.setState({activeTab:n});break}}}},{key:"displayNavigation",value:function(){for(var e=this,t=[],n=0;n<this.pages.length;n++){var r=this.pages[n],a=n===this.state.activeTab?"border-l border-t border-r rounded-t active":"";t.push(Object(g.createElement)("li",{className:"-mb-px mr-1 list-none"},Object(g.createElement)("a",{ref:function(t){return e.navItem=t},key:r.slug,className:"bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold "+a,id:"nav-"+r.slug+"-tab","data-id":r.slug,"data-toggle":"tab",href:"#nav-"+r.slug,role:"tab","aria-controls":"nav-"+r.slug,onClick:function(t){return e.tabUpdate(t)}},r.name)))}return t}},{key:"displayContent",value:function(){for(var e=[],t=0;t<this.pages.length;t++){var n=this.pages[t],r=t===this.state.activeTab?"block":"hidden";e.push(Object(g.createElement)("div",{key:n.slug,className:"tab-pane "+r,id:"nav-"+n.slug,role:"tabpanel","aria-labelledby":"nav-"+n.slug+"-tab"},Object(g.createElement)("div",{key:n.slug,className:"flex flex-row flex-wrap"},this.getAttendees(n.slug))))}return e}},{key:"getAttendees",value:function(e){if(void 0!==this.state.attendanceList[e]){for(var t=this.state.attendanceList[e].attendees,n=[],r=0;r<t.length;r++){var a=t[r];n.push(Object(g.createElement)("div",{key:a.id,className:"p-2"},Object(g.createElement)("a",{href:a.profile},Object(g.createElement)("img",{className:"p-1 border",alt:a.name,title:a.name,src:a.photo})),Object(g.createElement)("h5",{className:"mt-2 mb-0"},Object(g.createElement)("a",{className:"text-blue-500 hover:text-blue-800",href:a.profile},a.name)),Object(g.createElement)("h6",{className:"text-gray-600"},a.role)))}return n}}},{key:"render",value:function(){return Object(g.createElement)("div",{className:"mt-4"},Object(g.createElement)("nav",{className:""},Object(g.createElement)("ul",{className:"flex border-b ml-0",id:"attendance-nav",role:"tablist"},this.displayNavigation())),Object(g.createElement)("div",{className:"tab-content p-3",id:"attendance-content"},this.displayContent()))}}]),n}(r.Component);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h()(e);if(t){var a=h()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b()(this,n)}}var w=function(e){f()(n,e);var t=x(n);function n(e){var r;return s()(this,n),(r=t.call(this,e)).state={inputValue:r.attendanceStatus(GatherPress.current_user_status)},r}return u()(n,[{key:"attendanceStatus",value:function(e){switch(e){case"attending":return Object(m.__)("Attending","gatherpress");case"not_attending":return Object(m.__)("Not Attending","gatherpress");case"waitlist":return Object(m.__)("On Waitlist","gatherpress")}return Object(m.__)("Attend","gatherpress")}},{key:"changeSelection",value:function(e){e.preventDefault();var t=e.target.getAttribute("data-value");this.updateStatus(t)}},{key:"updateStatus",value:function(e){var t=this,n={method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":GatherPress.nonce},body:JSON.stringify({status:e,post_id:GatherPress.post_id,_wpnonce:GatherPress.nonce})};fetch(GatherPress.event_rest_api+"attendance",n).then((function(e){return e.json()})).then((function(e){var n;e.success&&(t.setState({inputValue:t.attendanceStatus(e.status)}),j(e.attendees),n=e.status,document.getElementById("nav-"+n+"-tab").click())}))}},{key:"render",value:function(){var e=this,t="1"===GatherPress.has_event_past?"opacity-50 cursor-not-allowed":"";return Object(g.createElement)("div",{className:"group inline-block relative float-right"},Object(g.createElement)("button",{type:"button",className:"bg-blue-500 hover:bg-blue-700 text-white text-2xl py-2 px-4 rounded inline-flex items-center "+t,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},Object(g.createElement)("span",{className:"mr-1"},this.state.inputValue),Object(g.createElement)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(g.createElement)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),Object(g.createElement)("ul",{className:"absolute right-0 z-10 hidden text-gray-700 pt-1 group-hover:block"},Object(g.createElement)("li",{className:"list-none"},Object(g.createElement)("a",{className:"rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",href:"#","data-value":"attending",onClick:function(t){return e.changeSelection(t)}},Object(m.__)("Yes, I would like to attend this event.","gatherpress"))),Object(g.createElement)("li",null,Object(g.createElement)("a",{className:"rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",href:"#","data-value":"not_attending",onClick:function(t){return e.changeSelection(t)}},Object(m.__)("No, I cannot attend this event.","gatherpress")))))}}]),n}(r.Component),E=document.querySelector("#attendance_button_container"),N=document.querySelector("#attendance_container");o.a.render(Object(r.createElement)(w),E),o.a.render(Object(r.createElement)(_),N)}]);