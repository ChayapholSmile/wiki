"use strict";const e=require("vue"),h=require("./constants.js"),$=require("./useModelWrapper.cjs"),A=require("./CdxCheckbox.cjs"),p=require("./Icon.js"),y=require("./useI18n.cjs"),T=require("./_plugin-vue_export-helper.js"),I=h.makeStringTypeValidator(h.TableTextAlignments),q={none:p.T7,asc:p.x8,desc:p.l4},D={none:"none",asc:"ascending",desc:"descending"},F=e.defineComponent({name:"CdxTable",components:{CdxCheckbox:A,CdxIcon:p.CdxIcon},props:{caption:{type:String,required:!0},hideCaption:{type:Boolean,default:!1},columns:{type:Array,default:()=>[],validator:t=>{const r=t.map(c=>c.id);return new Set(r).size===r.length?!0:(console.warn('Each column in the "columns" prop of CdxTable must have a unique "id".'),!1)}},data:{type:Array,default:()=>[],validator:(t,r)=>{if(!Array.isArray(r.columns)||r.columns.length===0||t.length===0)return!0;const i=r.columns.some(d=>"allowSort"in d),c=t.every(d=>h.TableRowIdentifier in d);return i&&r.useRowSelection&&!c?(console.warn('For CdxTables with sorting and row selection, each row in the "data" prop must have a "TableRowIdentifier".'),!1):!0}},useRowHeaders:{type:Boolean,default:!1},showVerticalBorders:{type:Boolean,default:!1},useRowSelection:{type:Boolean,default:!1},selectedRows:{type:Array,default:()=>[]},sort:{type:Object,default:()=>({})}},emits:["update:selectedRows","update:sort"],setup(t,{emit:r}){const i=$(e.toRef(t,"selectedRows"),r,"update:selectedRows"),c=e.ref(t.data.length===i.value.length),d=e.ref(!1),k=e.computed(()=>Object.keys(t.sort)[0]),f=e.computed(()=>t.columns.some(l=>l.allowSort)),b=e.computed(()=>{var o;return{"cdx-table__table--layout-fixed":(o=t.columns)==null?void 0:o.some(a=>"width"in a||"minWidth"in a),"cdx-table__table--borders-vertical":t.showVerticalBorders}}),n=y("cdx-table-sort-caption",l=>"".concat(l,", column headers with buttons are sortable."),[e.toRef(t,"caption")]),u=(l,o)=>y("cdx-table-select-row-label",(a,m)=>"Select row ".concat(a," of ").concat(m),[l,o]).value,s=y("cdx-table-select-all-label","Select all rows");function g(l,o){return h.TableRowIdentifier in l?l[h.TableRowIdentifier]:o}function S(l,o){const a=g(l,o);return{"cdx-table__row--selected":i.value.indexOf(a)!==-1}}function C(l){const o=t.columns[0].id;if(t.useRowHeaders===!0&&l===o)return"row"}function w(l){const o=t.columns[0].id;return t.useRowHeaders&&l===o?"th":"td"}function v(l,o=!1){if("textAlign"in l&&!I(l.textAlign)){console.warn("Invalid value for TableColumn textAlign property.");return}return{["cdx-table__table__cell--align-".concat(l.textAlign)]:"textAlign"in l&&l.textAlign!=="start","cdx-table__table__cell--has-sort":o}}function B(l){const o={};return"width"in l&&(o.width=l.width),"minWidth"in l&&(o.minWidth=l.minWidth),o}function _(l){if(t.data.length===l.length){c.value=!0,d.value=!1;return}c.value=!1,t.data.length>l.length&&(d.value=!0),l.length===0&&(d.value=!1)}function V(l){d.value=!1,l?i.value=t.data.map((o,a)=>g(o,a)):i.value=[]}function E(l){var m;const o=(m=t.sort[l])!=null?m:"none";let a="asc";o==="asc"&&(a="desc"),o==="desc"&&(a="none"),r("update:sort",{[l]:a})}function R(l){var a;const o=(a=t.sort[l])!=null?a:"none";return q[o]}function N(l,o=!1){var a;if(o){const m=(a=t.sort[l])!=null?a:"none";return m==="none"?void 0:D[m]}}return{wrappedSelectedRows:i,selectAll:c,selectAllIndeterminate:d,activeSortColumn:k,hasSortableColumns:f,tableClasses:b,getRowKey:g,getRowClass:S,getRowHeaderScope:C,getCellElement:w,getCellClass:v,getCellStyle:B,handleRowSelection:_,handleSelectAll:V,handleSort:E,getSortIcon:R,getSortOrder:N,translatedSortCaption:n,translatedSelectRowLabel:u,translatedSelectAllLabel:s}}}),x={class:"cdx-table",tabindex:"0"},L={key:0,class:"cdx-table__header"},O=["aria-hidden"],z={class:"cdx-table__header__content"},H={class:"cdx-table__table-wrapper"},U={key:0},W={key:0,class:"cdx-table__table__select-rows"},K=["aria-sort"],M=["aria-selected","onClick"],j={key:0},G={key:0},J={key:1},P={class:"cdx-table__table__empty-state"},Q={class:"cdx-table__table__empty-state-content"},X={key:1,class:"cdx-table__footer"};function Y(t,r,i,c,d,k){const f=e.resolveComponent("cdx-checkbox"),b=e.resolveComponent("cdx-icon");return e.openBlock(),e.createElementBlock("div",x,[!t.hideCaption||t.$slots.header&&t.$slots.header().length>0?(e.openBlock(),e.createElementBlock("div",L,[e.createElementVNode("div",{class:"cdx-table__header__caption","aria-hidden":t.$slots.header&&t.$slots.header().length>0?void 0:!0},[t.hideCaption?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(t.caption),1)],64))],8,O),e.createElementVNode("div",z,[e.renderSlot(t.$slots,"header")])])):e.createCommentVNode("v-if",!0),e.createElementVNode("div",H,[e.createElementVNode("table",{class:e.normalizeClass(["cdx-table__table",t.tableClasses])},[e.createElementVNode("caption",null,[t.hasSortableColumns?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(t.translatedSortCaption),1)],64)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(t.caption),1)],64))]),e.renderSlot(t.$slots,"thead",{},()=>[t.columns.length>0?(e.openBlock(),e.createElementBlock("thead",U,[e.createElementVNode("tr",null,[t.useRowSelection?(e.openBlock(),e.createElementBlock("th",W,[e.createVNode(f,{modelValue:t.selectAll,"onUpdate:modelValue":[r[0]||(r[0]=n=>t.selectAll=n),t.handleSelectAll],"hide-label":!0,indeterminate:t.selectAllIndeterminate},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.translatedSelectAllLabel),1)]),_:1},8,["modelValue","indeterminate","onUpdate:modelValue"])])):e.createCommentVNode("v-if",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.columns,n=>(e.openBlock(),e.createElementBlock("th",{key:n.id,scope:"col",class:e.normalizeClass(t.getCellClass(n,n.allowSort)),"aria-sort":t.getSortOrder(n.id,n.allowSort),style:e.normalizeStyle(t.getCellStyle(n))},[n.allowSort?(e.openBlock(),e.createElementBlock("button",{key:0,"aria-selected":n.id===t.activeSortColumn,class:"cdx-table__table__sort-button",onClick:u=>t.handleSort(n.id)},[e.createTextVNode(e.toDisplayString(n.label)+" ",1),e.createVNode(b,{icon:t.getSortIcon(n.id),size:"small",class:"cdx-table__table__sort-icon","aria-hidden":"true"},null,8,["icon"])],8,M)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createTextVNode(e.toDisplayString(n.label),1)],64))],14,K))),128))])])):e.createCommentVNode("v-if",!0)]),e.renderSlot(t.$slots,"tbody",{},()=>[t.data.length>0?(e.openBlock(),e.createElementBlock("tbody",j,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.data,(n,u)=>(e.openBlock(),e.createElementBlock("tr",{key:t.getRowKey(n,u),class:e.normalizeClass(t.getRowClass(n,u))},[t.useRowSelection?(e.openBlock(),e.createElementBlock("td",G,[e.createVNode(f,{modelValue:t.wrappedSelectedRows,"onUpdate:modelValue":[r[1]||(r[1]=s=>t.wrappedSelectedRows=s),t.handleRowSelection],"input-value":t.getRowKey(n,u),"hide-label":!0},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.translatedSelectRowLabel(u+1,t.data.length)),1)]),_:2},1032,["modelValue","input-value","onUpdate:modelValue"])])):e.createCommentVNode("v-if",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.columns,s=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.getCellElement(s.id)),{key:s.id,scope:t.getRowHeaderScope(s.id),class:e.normalizeClass(t.getCellClass(s))},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"item-"+s.id,{item:n[s.id],row:n},()=>[e.createTextVNode(e.toDisplayString(n[s.id]),1)])]),_:2},1032,["scope","class"]))),128))],2))),128))])):t.$slots["empty-state"]&&t.$slots["empty-state"]().length>0?(e.openBlock(),e.createElementBlock("tbody",J,[e.createElementVNode("tr",P,[e.createElementVNode("td",Q,[e.renderSlot(t.$slots,"empty-state")])])])):e.createCommentVNode("v-if",!0)]),e.renderSlot(t.$slots,"tfoot")],2)]),t.$slots.footer&&t.$slots.footer().length>0?(e.openBlock(),e.createElementBlock("div",X,[e.renderSlot(t.$slots,"footer")])):e.createCommentVNode("v-if",!0)])}const Z=T._export_sfc(F,[["render",Y]]);module.exports=Z;
