(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,n=window.wp.i18n,s=window.wp.data,r=window.wp.components,a=window.wp.plugins,o=window.wp.editPost,l=window.moment;var i=e.n(l);const c=window.wp.apiFetch;var u=e.n(c);const m=window.wp.element;function d(){(0,s.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function p(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function g(e,t){if("object"!=typeof GatherPress)return;const n=e.split("."),s=n.pop();n.reduce(((e,t)=>{var n;return null!==(n=e[t])&&void 0!==n?n:e[t]={}}),GatherPress)[s]=t}const _=window.wp.date,h="YYYY-MM-DDTHH:mm:ss",E="YYYY-MM-DD HH:mm:ss",v=i().tz(S()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(h),f=i().tz(v,S()).add(2,"hours").format(h);function b(){return C(p("settings.dateFormat"))+" "+C(p("settings.timeFormat"))}function S(e=p("eventDetails.dateTime.timezone")){return i().tz.zone(e)?e:(0,n.__)("GMT","gatherpress")}function T(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,n=e.replace(t,"$1");return n!==e?"UTC"+n+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function P(e,t=null){!function(e){const t=i().tz(p("eventDetails.dateTime.datetime_end"),S()).valueOf(),n=i().tz(e,S()).valueOf();n>=t&&D(i().tz(n,S()).add(2,"hours").format(h))}(e),g("eventDetails.dateTime.datetime_start",e),"function"==typeof t&&t(e),d()}function D(e,t=null){!function(e){const t=i().tz(p("eventDetails.dateTime.datetime_start"),S()).valueOf(),n=i().tz(e,S()).valueOf();n<=t&&P(i().tz(n,S()).subtract(2,"hours").format(h))}(e),g("eventDetails.dateTime.datetime_end",e),null!==t&&t(e),d()}function w(){const e=(0,s.select)("core/editor").isSavingPost(),t=(0,s.select)("core/editor").isAutosavingPost();y()&&e&&!t&&u()({path:p("urls.eventRestApi")+"/datetime",method:"POST",data:{post_id:p("eventDetails.postId"),datetime_start:i().tz(p("eventDetails.dateTime.datetime_start"),S()).format(E),datetime_end:i().tz(p("eventDetails.dateTime.datetime_end"),S()).format(E),timezone:p("eventDetails.dateTime.timezone"),_wpnonce:p("misc.nonce")}}).then((()=>{!function(){const e="gatherpress_event_communcation",t=(0,s.dispatch)("core/notices");t.removeNotice(e),"publish"!==(0,s.select)("core/editor").getEditedPostAttribute("status")||N()||t.createNotice("success",(0,n.__)("Send an event update to members via email?","gatherpress"),{id:e,isDismissible:!0,actions:[{onClick:()=>{k({setOpen:!0})},label:(0,n.__)("Compose Message","gatherpress")}]})}()}))}function C(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map(((e,n,s)=>{const r=s[n-1];return e in t&&"\\"!==r?t[e]:e})).join("")}const k=(e,t="")=>{for(const[n,s]of Object.entries(e)){let e=n;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:s});dispatchEvent(r)}},z=(e,t="")=>{for(const[n,s]of Object.entries(e)){let e=n;t&&(e+="_"+String(t)),addEventListener(e,(e=>{s(e.detail)}),!1)}};function y(){return"gatherpress_event"===(0,s.select)("core/editor")?.getCurrentPostType()}function N(){const e=i().tz(p("eventDetails.dateTime.datetime_end"),S());return"gatherpress_event"===(0,s.select)("core/editor")?.getCurrentPostType()&&i().tz(S()).valueOf()>e.valueOf()}function x(){const e="gatherpress_event_past",t=(0,s.dispatch)("core/notices");t.removeNotice(e),N()&&t.createNotice("warning",(0,n.__)("This event has already passed.","gatherpress"),{id:e,isDismissible:!1})}const O=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),o=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let l=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_anonymous_rsvp),[]);o&&(l=p("settings.enableAnonymousRsvp"));const[i,c]=(0,m.useState)(l),u=(0,m.useCallback)((t=>{const n={gatherpress_enable_anonymous_rsvp:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,m.useEffect)((()=>{o&&0!==l&&u(l)}),[o,l,u]),(0,t.createElement)(r.CheckboxControl,{label:(0,n.__)("Enable Anonymous RSVP","gatherpress"),checked:i,onChange:e=>{u(e)}})},A=()=>(0,t.createElement)("section",null,(0,t.createElement)(O,null)),M=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),o=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let l=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_initial_decline),[]);o&&(l=p("settings.enableInitialDecline"));const[i,c]=(0,m.useState)(l),u=(0,m.useCallback)((t=>{const n={gatherpress_enable_initial_decline:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,m.useEffect)((()=>{o&&0!==l&&u(l)}),[o,l,u]),(0,t.createElement)(r.CheckboxControl,{label:(0,n.__)('Enable Immediate "Not Attending" Option for Attendees',"gatherpress"),checked:i,onChange:e=>{u(e)}})},F=()=>(0,t.createElement)("section",null,(0,t.createElement)(M,null)),Y=e=>{const{dateTimeStart:t}=e;return i().tz(t,S()).format(b())},j=e=>{const{dateTimeEnd:t}=e;return i().tz(t,S()).format(b())},L=e=>{const{dateTimeStart:n,setDateTimeStart:s}=e,a=(0,_.getSettings)(),o=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>P(e,s),is12Hour:o})},I=e=>{const{dateTimeEnd:n,setDateTimeEnd:s}=e,a=(0,_.getSettings)(),o=/a(?!\\)/i.test(a.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,t.createElement)(r.DateTimePicker,{currentDate:n,onChange:e=>D(e,s),is12Hour:o})},R=e=>{const{dateTimeStart:s,setDateTimeStart:a}=e;return(0,m.useEffect)((()=>{a(i().tz(function(){let e=p("eventDetails.dateTime.datetime_start");return e=""!==e?i().tz(e,S()).format(h):v,g("eventDetails.dateTime.datetime_start",e),e}(),S()).format(h)),k({setDateTimeStart:s}),x()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gatherpress-datetime-start"},(0,n.__)("Start","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gatherpress-datetime-start",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(Y,{dateTimeStart:s})),renderContent:()=>(0,t.createElement)(L,{dateTimeStart:s,setDateTimeStart:a})}))))},H=e=>{const{dateTimeEnd:s,setDateTimeEnd:a}=e;return(0,m.useEffect)((()=>{a(i().tz(function(){let e=p("eventDetails.dateTime.datetime_end");return e=""!==e?i().tz(e,S()).format(h):f,g("eventDetails.dateTime.datetime_end",e),e}(),S()).format(h)),k({setDateTimeEnd:s}),x()})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Flex,{direction:"column",gap:"0"},(0,t.createElement)(r.FlexItem,null,(0,t.createElement)("label",{htmlFor:"gatherpress-datetime-end"},(0,n.__)("End","gatherpress"))),(0,t.createElement)(r.FlexItem,null,(0,t.createElement)(r.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:e,onToggle:n})=>(0,t.createElement)(r.Button,{id:"gatherpress-datetime-end",onClick:n,"aria-expanded":e,isLink:!0},(0,t.createElement)(j,{dateTimeEnd:s})),renderContent:()=>(0,t.createElement)(I,{dateTimeEnd:s,setDateTimeEnd:a})}))))},$=e=>{const{timezone:s,setTimezone:a}=e,o=p("misc.timezoneChoices");return(0,m.useEffect)((()=>{a(p("eventDetails.dateTime.timezone"))}),[a]),(0,m.useEffect)((()=>{k({setTimezone:p("eventDetails.dateTime.timezone")})})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Time Zone","gatherpress"),value:T(s),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,n=e.replace(t,"$1");if(n!==e){const s=e.replace(t,"$2").padStart(2,"0");let r=e.replace(t,"$3");return""===r&&(r=":00"),r=r.replace(".25",":15").replace(".5",":30").replace(".75",":45"),n+s+r}return e}(e),a(e),g("eventDetails.dateTime.timezone",e),d()}},Object.keys(o).map((e=>(0,t.createElement)("optgroup",{key:e,label:e},Object.keys(o[e]).map((n=>(0,t.createElement)("option",{key:n,value:n},o[e][n]))))))))},G=()=>{const[e,r]=(0,m.useState)(),[a,o]=(0,m.useState)(),[l,i]=(0,m.useState)();return(0,s.subscribe)(w),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h3",null,(0,n.__)("Date & time","gatherpress")),(0,t.createElement)(R,{dateTimeStart:e,setDateTimeStart:r}),(0,t.createElement)(H,{dateTimeEnd:a,setDateTimeEnd:o}),(0,t.createElement)($,{timezone:l,setTimezone:i}))},W=()=>(0,t.createElement)("section",null,(0,t.createElement)(G,null)),B=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),o=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let l=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_guest_limit),[]);o&&(l=p("settings.maxGuestLimit")),!1===l&&(l=0);const[i,c]=(0,m.useState)(l),u=(0,m.useCallback)((t=>{const n={gatherpress_max_guest_limit:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,m.useEffect)((()=>{o&&0!==l&&u(l)}),[o,l,u]),(0,t.createElement)(r.__experimentalNumberControl,{label:(0,n.__)("Maximum Number of Guests","gatherpress"),value:i,min:0,max:5,onChange:e=>{u(e)}})},V=()=>(0,t.createElement)("section",null,(0,t.createElement)(B,null)),J=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),o=(0,s.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let l=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_attendance_limit),[]);o&&(l=p("settings.maxAttendanceLimit")),!1===l&&(l=0);const[i,c]=(0,m.useState)(l),u=(0,m.useCallback)((t=>{const n={gatherpress_max_attendance_limit:Number(t)};c(t),e({meta:n}),a()}),[e,a]);return(0,m.useEffect)((()=>{o&&0!==l&&u(l)}),[o,l,u]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,n.__)("Maximum Attendance Limit","gatherpress"),value:i,min:0,onChange:e=>{u(e)}}),(0,t.createElement)("p",{className:"description"},(0,n.__)("A value of 0 indicates no limit.","gatherpress")))},U=()=>(0,t.createElement)("section",null,(0,t.createElement)(J,null)),Z=()=>"publish"===(0,s.select)("core/editor").getEditedPostAttribute("status")&&!N()&&(0,t.createElement)("section",null,(0,t.createElement)("h3",{style:{marginBottom:"0.5rem"}},(0,n.__)("Send an event update","gatherpress")),(0,t.createElement)(r.Button,{variant:"secondary",onClick:()=>k({setOpen:!0})},(0,n.__)("Compose Message","gatherpress"))),q=()=>{const{editPost:e,unlockPostSaving:a}=(0,s.useDispatch)("core/editor"),o=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_online_event_link)),[l,i]=(0,m.useState)(o);return z({setOnlineEventLink:i},p("eventDetails.postId")),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Online event link","gatherpress"),value:l,placeholder:(0,n.__)("Add link to online event","gatherpress"),onChange:t=>{(t=>{e({meta:{gatherpress_online_event_link:t}}),i(t),k({setOnlineEventLink:t},p("eventDetails.postId")),a()})(t)}})},X=()=>(0,t.createElement)("section",null,(0,t.createElement)(q,null)),K=()=>{const[e,a]=(0,m.useState)(""),[o,l]=(0,m.useState)(""),[i,c]=(0,m.useState)(""),[u,d]=(0,m.useState)(""),[p,g]=(0,m.useState)(!1),[_,h]=(0,m.useState)(""),[E,v]=(0,m.useState)(""),[f,b]=(0,m.useState)(""),S=(0,s.useDispatch)("core/editor").editPost,{unlockPostSaving:T}=(0,s.useDispatch)("core/editor"),P=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("_gatherpress_venue"))),D=(0,s.useSelect)((e=>e("core").getEntityRecord("taxonomy","_gatherpress_venue",P))),w=D?.slug.replace(/^_/,""),[C,z]=(0,m.useState)(""),y=P+":"+C,N=(0,s.useSelect)((e=>e("core").getEntityRecords("postType","gatherpress_venue",{per_page:1,slug:C})));(0,m.useEffect)((()=>{var e,t,s,r,o,i;let u={};if(C&&Array.isArray(N)){var m;const e=null!==(m=N[0]?.meta?.gatherpress_venue_information)&&void 0!==m?m:"{}";var p;e&&(u=JSON.parse(e),u.name=null!==(p=N[0]?.title.rendered)&&void 0!==p?p:"")}const g=null!==(e=u?.name)&&void 0!==e?e:(0,n.__)("No venue selected.","gatherpress"),_=null!==(t=u?.fullAddress)&&void 0!==t?t:"",E=null!==(s=u?.phoneNumber)&&void 0!==s?s:"",f=null!==(r=u?.website)&&void 0!==r?r:"",S=null!==(o=u?.latitude)&&void 0!==o?o:"0",T=null!==(i=u?.longitude)&&void 0!==i?i:"0";w&&z(w),b(y?String(y):""),a(g),l(_),c(E),d(f),h(S),v(T),k({setName:g,setFullAddress:_,setPhoneNumber:E,setWebsite:f,setLatitude:S,setLongitude:T,setIsOnlineEventTerm:"online-event"===C})}),[C,N,w,y]);let x=(0,s.useSelect)((e=>e("core").getEntityRecords("taxonomy","_gatherpress_venue",{per_page:-1,context:"view"})),[]);return x?(x=x.map((e=>({label:e.name,value:e.id+":"+e.slug.replace(/^_/,"")}))),x.unshift({value:":",label:(0,n.__)("Choose a venue","gatherpress")})):x=[],(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Venue Selector","gatherpress"),value:f,onChange:e=>{(e=>{b(e);const t=""!==(e=e.split(":"))[0]?[e[0]]:[];S({_gatherpress_venue:t}),z(e[1]),T()})(e)},options:x}))},Q=()=>(0,t.createElement)("section",null,(0,t.createElement)(K,null));(0,a.registerPlugin)("gatherpress-event-settings",{render:()=>y()&&(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"gatherpress-event-settings",title:(0,n.__)("Event settings","gatherpress"),initialOpen:!0,className:"gatherpress-event-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)(W,null),(0,t.createElement)(Q,null),(0,t.createElement)(X,null),(0,t.createElement)(V,null),(0,t.createElement)(U,null),(0,t.createElement)(A,null),(0,t.createElement)(F,null),(0,t.createElement)(Z,null)))}),(0,s.dispatch)("core/edit-post").toggleEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings");const ee=window.wp.compose,te=()=>{var e,a,o;const l=(0,s.useDispatch)("core/editor").editPost,i=e=>{const t=JSON.stringify({...c,...e});l({meta:{gatherpress_venue_information:t}})};let c=(0,s.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_venue_information));c=c?JSON.parse(c):{};const[u,d]=(0,m.useState)(null!==(e=c.fullAddress)&&void 0!==e?e:""),[p,g]=(0,m.useState)(null!==(a=c.phoneNumber)&&void 0!==a?a:""),[_,h]=(0,m.useState)(null!==(o=c.website)&&void 0!==o?o:"");z({setFullAddress:d,setPhoneNumber:g,setWebsite:h});const E=(0,m.useRef)(i),v=(0,m.useCallback)((()=>{let e=0,t=0;fetch(`https://nominatim.openstreetmap.org/search?q=${u}&format=geojson`).then((e=>{if(!e.ok)throw new Error((0,n.sprintf)(/* translators: %s: Error message */ /* translators: %s: Error message */
(0,n.__)("Network response was not ok %s","gatherpress"),e.statusText));return e.json()})).then((n=>{n.features.length>0&&(e=n.features[0].geometry.coordinates[1],t=n.features[0].geometry.coordinates[0]),E.current({latitude:e,longitude:t})}))}),[u]),f=(0,ee.useDebounce)(v,300);return(0,m.useEffect)((()=>{E.current=i}),[i]),(0,m.useEffect)((()=>{f()}),[u,f]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Full Address","gatherpress"),value:u,onChange:e=>{k({setFullAddress:e}),i({fullAddress:e})}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Phone Number","gatherpress"),value:p,onChange:e=>{k({setPhoneNumber:e}),i({phoneNumber:e})}}),(0,t.createElement)(r.TextControl,{label:(0,n.__)("Website","gatherpress"),value:_,type:"url",onChange:e=>{k({setWebsite:e}),i({website:e})}}))},ne=()=>(0,t.createElement)("section",null,(0,t.createElement)(te,null));(0,a.registerPlugin)("gatherpress-venue-settings",{render:()=>"gatherpress_venue"===(0,s.select)("core/editor")?.getCurrentPostType()&&(0,t.createElement)(o.PluginDocumentSettingPanel,{name:"gatherpress-venue-settings",title:(0,n.__)("Venue settings","gatherpress"),initialOpen:!0,className:"gatherpress-venue-settings"},(0,t.createElement)(r.__experimentalVStack,{spacing:6},(0,t.createElement)(ne,null)))}),(0,s.dispatch)("core/edit-post").toggleEditorPanelOpened("gatherpress-venue-settings/gatherpress-venue-settings")})();