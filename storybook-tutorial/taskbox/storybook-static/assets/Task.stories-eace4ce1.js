import{j as p,a}from"./jsx-runtime-03b4ddbf.js";import"./index-76fb7be0.js";import{P as t}from"./index-8d47fad6.js";function n({task:{id:e,title:l,state:o},onArchiveTask:_,onPinTask:v}){return p("div",{className:`list-item ${o}`,children:[p("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[a("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:o==="TASK_ARCHIVED"}),a("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),a("label",{htmlFor:"title","aria-label":l,className:"title",children:a("input",{type:"text",value:l,readOnly:!0,name:"title",placeholder:"Input title"})}),o!=="TASK_ARCHIVED"&&a("button",{className:"pin-button",onClick:()=>v(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a("span",{className:"icon-star"})},`pinTask-${e}`)]})}n.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};n.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{description:"Composition of the task",type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1}}};const A={component:n,title:"Task"},c=e=>a(n,{...e}),s=c.bind({});s.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const r=c.bind({});r.args={task:{...s.args.task,state:"TASK_PINNED"}};const i=c.bind({});i.args={task:{...s.args.task,state:"TASK_ARCHIVED"}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Task {...args} />",...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var k,h,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:"args => <Task {...args} />",...(T=(h=r.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var g,f,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Task {...args} />",...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const y=["Default","Pinned","Archived"],x=Object.freeze(Object.defineProperty({__proto__:null,Archived:i,Default:s,Pinned:r,__namedExportsOrder:y,default:A},Symbol.toStringTag,{value:"Module"}));export{s as D,n as T,x as a};
