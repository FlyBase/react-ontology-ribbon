var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,i=(e,i)=>{for(var s in i||(i={}))t.call(i,s)&&n(e,s,i[s]);if(r)for(var s of r(i))a.call(i,s)&&n(e,s,i[s]);return e},s=(e,n)=>{var i={};for(var s in e)t.call(e,s)&&n.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&r)for(var s of r(e))n.indexOf(s)<0&&a.call(e,s)&&(i[s]=e[s]);return i};import o from"react";var l={exports:{}};function c(){}function u(){}u.resetWarningCache=c;l.exports=function(){function e(e,r,t,a,n,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:u,resetWarningCache:c};return t.PropTypes=t,t}();var d=l.exports;var p="_ribbonBlock_lfxw8_1",m="_bold_lfxw8_6",f="_ribbonBlockTitleTerm_lfxw8_13",y="_ribbonTile_lfxw8_19";function b({numTerms:e=0,baseRGB:r=[],heatLevels:t=0}={}){return 0===e?"#fff":r.map((r=>{if(e<t){const t=3*(256-r)/Math.pow(2,e+1);return Math.round(r+t)}return r}))}const _=({data:e,baseRGB:r=[0,0,0],heatLevels:t,onTermClick:a,calcHeatColor:n=b,itemTitle:i})=>{const s=e.name,l=e.descendant_terms.length,c=1===l?"":"s",u=l>0?`${f} ${m}`:f,d=function(e=[]){if(3===e.length)return`rgb(${e.join(",")})`}(n({numTerms:l,baseRGB:r,heatLevels:t,itemData:e})),_=`${s}:\n${l} term${c}`;return o.createElement("div",{className:p,onClick:function(r){a&&a(e,r)}},o.createElement("div",{className:u},s),o.createElement("div",{className:y,title:i?i(e):_,style:{backgroundColor:d}}))};_.propTypes={data:d.shape({id:d.string.isRequired,name:d.string.isRequired,descendant_terms:d.arrayOf(d.shape({id:d.string.isRequired,name:d.string.isRequired})),url:d.string}).isRequired,baseRGB:d.arrayOf(((e,r,t,a,n)=>{if(3!==e.length)return new Error(`Invalid prop ${n} supplied to ${t}.  An array of 3 integers is required.`)})).isRequired,heatLevels:d.number.isRequired,onTermClick:d.func,calcHeatColor:d.func,itemTitle:d.any};var v="_ribbonStrip_1pj5a_1",R="_stripTitle_1pj5a_6";const h=e=>{var r=e,{data:t,title:a}=r,n=s(r,["data","title"]);const l=t.map(((e,r)=>o.createElement(_,i({data:e,key:e.id+"_"+r},n))));return o.createElement("div",{className:v},o.createElement("div",null,l),a&&o.createElement("div",{className:R},a))};function g(e){var r=e,{noResults:t,data:a=[]}=r,n=s(r,["noResults","data"]);return a&&a.length>0?o.createElement(h,i({data:a},n)):o.createElement("div",null,t)}h.propTypes={data:d.arrayOf(d.shape({id:d.string.isRequired,name:d.string.isRequired,descendant_terms:d.arrayOf(d.shape({id:d.string.isRequired,name:d.string.isRequired})),url:d.string})).isRequired},g.propTypes={heatLevels:d.number,baseRGB:d.arrayOf(d.number),data:d.arrayOf(d.shape({id:d.string.isRequired,name:d.string.isRequired,descendant_terms:d.arrayOf(d.shape({id:d.string.isRequired,name:d.string.isRequired}))})),noResults:d.any,title:d.any,itemTitle:d.any,onTermClick:d.func,calcHeatColor:d.func},g.defaultProps={heatLevels:8,baseRGB:[0,96,96],data:[],noResults:"No ribbon data found"};export{g as default};