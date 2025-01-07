"use strict";(self.webpackChunksatoshi_favorite_projects=self.webpackChunksatoshi_favorite_projects||[]).push([[144],{4144:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(2445),n=a(6540),l=a(6527),r=a(460),s=a(6990),o=a(1468),d=a(6299),c=a(4899),u=a(7437);const h=u.AH`
max-width: 600px;
margin: 0 auto;
padding: 2rem;
`,v=u.AH`
margin-bottom: 0.5rem;
font-size: 12px;
color: rgba(0, 0, 0, 0.6)
`,p=u.AH`
margin-bottom: 1.5rem;
width: 100%;
`,m=u.AH`
margin-top: 1rem;
`,g=()=>{const{id:e}=(0,l.g)(),t=(0,o.wA)(),a=(0,o.d4)((e=>e.projectList.projects)),u=(0,o.d4)((e=>e.project.selectedProject)),g=(0,l.Zp)(),f=e=>{u&&t((0,c.yN)(Object.assign(Object.assign({},u),{[e.target.name]:e.target.value})))};return(0,n.useEffect)((()=>{u||g("/favorite-projects/list")}),[]),(0,i.Y)("div",{className:"ml-60",children:(0,i.FD)("form",{css:h,children:[(0,i.FD)("div",{css:p,children:[(0,i.Y)("label",{css:v,children:"Project ID"}),(0,i.Y)("p",{children:null==u?void 0:u.id})]}),(0,i.Y)("div",{css:p,children:(0,i.Y)(r.A,{label:"Project Name",name:"title",variant:"outlined",value:(null==u?void 0:u.title)||"",onChange:f,fullWidth:!0})}),(0,i.Y)("div",{css:p,children:(0,i.Y)(r.A,{label:"Description",name:"description",variant:"outlined",value:(null==u?void 0:u.description)||"",onChange:f,fullWidth:!0,multiline:!0,rows:4})}),(0,i.Y)("div",{css:p,children:(0,i.Y)(r.A,{label:"Start Date",name:"startDate",type:"date",value:(null==u?void 0:u.startDate)||"",onChange:f,InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})}),(0,i.Y)("div",{css:p,children:(0,i.Y)(r.A,{label:"End Date",name:"endDate",type:"date",value:(null==u?void 0:u.endDate)||"",onChange:f,InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})}),(0,i.Y)("div",{css:p,children:(0,i.Y)(r.A,{label:"Project Manager",name:"projectManager",variant:"outlined",value:(null==u?void 0:u.projectManager)||"",onChange:f,fullWidth:!0})}),(0,i.Y)(s.A,{variant:"contained",color:"primary",css:m,onClick:()=>{if(u){const e=[...a].map((e=>(e.id==u.id&&(e=Object.assign({},u)),e)));t((0,d.r$)(e)),g("/favorite-projects/list")}},children:"Save Changes"})]})})}}}]);