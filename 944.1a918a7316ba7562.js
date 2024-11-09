"use strict";(self.webpackChunkprintingUI=self.webpackChunkprintingUI||[]).push([[944],{1944:(C,m,l)=>{l.r(m),l.d(m,{ProductManagementModule:()=>k});var p=l(6895),g=l(2045),a=l(7340),d=l(433),e=l(8256);function h(i,o){if(1&i&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&i){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.name)}}function x(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",17)(1,"div",18),e._UZ(2,"img",19),e.qZA(),e.TgZ(3,"div",20)(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"p",21),e._uU(7),e.qZA(),e.TgZ(8,"p",22),e._uU(9),e.qZA(),e.TgZ(10,"p",23),e._uU(11),e.qZA()(),e.TgZ(12,"div",24)(13,"button",25),e.NdJ("click",function(){const c=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.openEditModal(c))}),e._UZ(14,"i",26),e.qZA(),e.TgZ(15,"button",27),e.NdJ("click",function(){const c=e.CHM(n).$implicit,s=e.oxw();return e.KtG(s.openDeleteModal(c))}),e._UZ(16,"i",28),e.qZA()()()}if(2&i){const n=o.$implicit;e.xp6(2),e.Q6J("src",n.imageUrl,e.LSH)("alt",n.name),e.xp6(3),e.Oqu(n.name),e.xp6(2),e.hij("$",n.price,""),e.xp6(2),e.Oqu(n.category),e.xp6(1),e.ekj("low-stock",n.stock<10),e.xp6(1),e.hij("Stock: ",n.stock,"")}}function _(i,o){1&i&&(e.TgZ(0,"div",47),e._uU(1," Name is required "),e.qZA())}function b(i,o){if(1&i&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&i){const n=o.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.name)}}function v(i,o){if(1&i&&(e.TgZ(0,"div"),e._UZ(1,"img",48),e.qZA()),2&i){const n=e.oxw(2);e.xp6(1),e.Q6J("src",n.imagePreview,e.LSH)}}function w(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",29)(1,"div",30)(2,"div",31)(3,"h2"),e._uU(4),e.qZA(),e.TgZ(5,"button",32),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.closeModal())}),e._UZ(6,"i",33),e.qZA()(),e.TgZ(7,"form",34),e.NdJ("ngSubmit",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.submitForm())}),e.TgZ(8,"div",35)(9,"label"),e._uU(10,"Product Name"),e.qZA(),e._UZ(11,"input",36),e.YNc(12,_,2,0,"div",37),e.qZA(),e.TgZ(13,"div",35)(14,"label"),e._uU(15,"Category"),e.qZA(),e.TgZ(16,"select",38),e.YNc(17,b,2,2,"option",11),e.qZA()(),e.TgZ(18,"div",35)(19,"label"),e._uU(20,"Price"),e.qZA(),e._UZ(21,"input",39),e.qZA(),e.TgZ(22,"div",35)(23,"label"),e._uU(24,"Stock"),e.qZA(),e._UZ(25,"input",40),e.qZA(),e.TgZ(26,"div",35)(27,"label"),e._uU(28,"Description"),e.qZA(),e._UZ(29,"textarea",41),e.qZA(),e.TgZ(30,"div",35)(31,"label"),e._uU(32,"Image"),e.qZA(),e.TgZ(33,"input",42),e.NdJ("change",function(t){e.CHM(n);const c=e.oxw();return e.KtG(c.onFileSelected(t))}),e.qZA(),e.YNc(34,v,2,1,"div",43),e.qZA(),e.TgZ(35,"div",44)(36,"button",45),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.closeModal())}),e._uU(37,"Cancel"),e.qZA(),e.TgZ(38,"button",46),e._uU(39),e.qZA()()()()()}if(2&i){const n=e.oxw();let r;e.Q6J("@modalAnimation",void 0),e.xp6(4),e.Oqu(n.isEditing?"Edit Product":"Add New Product"),e.xp6(3),e.Q6J("formGroup",n.productForm),e.xp6(5),e.Q6J("ngIf",(null==(r=n.productForm.get("name"))||null==r.errors?null:r.errors.required)&&(null==(r=n.productForm.get("name"))?null:r.touched)),e.xp6(5),e.Q6J("ngForOf",n.categories),e.xp6(17),e.Q6J("ngIf",n.imagePreview),e.xp6(4),e.Q6J("disabled",!n.productForm.valid),e.xp6(1),e.hij(" ",n.isEditing?"Update":"Add"," Product ")}}function Z(i,o){if(1&i){const n=e.EpF();e.TgZ(0,"div",49)(1,"div",30)(2,"div",31)(3,"h2"),e._uU(4,"Delete Product"),e.qZA(),e.TgZ(5,"button",32),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.closeDeleteModal())}),e._UZ(6,"i",33),e.qZA()(),e.TgZ(7,"div",50)(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p",51),e._uU(11,"This action cannot be undone."),e.qZA()(),e.TgZ(12,"div",52)(13,"button",53),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.closeDeleteModal())}),e._uU(14,"Cancel"),e.qZA(),e.TgZ(15,"button",27),e.NdJ("click",function(){e.CHM(n);const t=e.oxw();return e.KtG(t.confirmDelete())}),e._uU(16,"Delete"),e.qZA()()()()}if(2&i){const n=e.oxw();e.Q6J("@modalAnimation",void 0),e.xp6(9),e.hij('Are you sure you want to delete "',null==n.selectedProduct?null:n.selectedProduct.name,'"?')}}let f=(()=>{const o=class{constructor(r){this.fb=r,this.products=[],this.filteredProducts=[],this.categories=[],this.searchTerm="",this.selectedCategory="",this.showModal=!1,this.showDeleteModal=!1,this.isEditing=!1,this.selectedProduct=null,this.imagePreview=null,this.productForm=this.fb.group({name:["",d.kI.required],category:[""],price:["",d.kI.required],stock:[""],description:[""],image:[null]})}ngOnInit(){this.categories=[{id:"1",name:"Electronics"},{id:"2",name:"Clothing"},{id:"3",name:"Books"},{id:"4",name:"Home & Garden"}],this.products=[{id:1,name:"Wireless Headphones",category:"Electronics",price:99.99,stock:15,description:"High-quality wireless headphones with noise cancellation",imageUrl:"/api/placeholder/400/320"}],this.filterProducts()}createProductForm(){return this.fb.group({id:[null],name:["",[d.kI.required,d.kI.minLength(3)]],category:["",d.kI.required],price:[0,[d.kI.required,d.kI.min(0)]],stock:[0,[d.kI.required,d.kI.min(0)]],description:["",d.kI.required],imageUrl:["",d.kI.required]})}filterProducts(){this.filteredProducts=this.products.filter(r=>(r.name.toLowerCase().includes(this.searchTerm.toLowerCase())||r.description.toLowerCase().includes(this.searchTerm.toLowerCase()))&&(!this.selectedCategory||r.category===this.selectedCategory))}openAddModal(){this.isEditing=!1,this.productForm.reset(),this.showModal=!0}openEditModal(r){this.isEditing=!0,this.selectedProduct=r,this.productForm.patchValue(r),this.showModal=!0}openDeleteModal(r){this.selectedProduct=r,this.showDeleteModal=!0}closeModal(){this.showModal=!1,this.productForm.reset(),this.selectedProduct=null}closeDeleteModal(){this.showDeleteModal=!1,this.selectedProduct=null}onFileSelected(r){const t=r.target;if(t.files&&t.files.length){const c=t.files[0];this.productForm.patchValue({image:c});const s=new FileReader;s.onload=()=>{this.imagePreview=s.result},s.readAsDataURL(c)}}submitForm(){if(this.productForm.valid){const r=this.productForm.value;if(this.isEditing&&this.selectedProduct){const t=this.products.findIndex(c=>c.id===this.selectedProduct.id);-1!==t&&(this.products[t]={...this.selectedProduct,...r},this.showToast("Product updated successfully"))}else{const t={...r,id:this.generateUniqueId()};this.products.push(t),this.showToast("Product added successfully")}this.filterProducts(),this.closeModal()}}confirmDelete(){if(this.selectedProduct){const r=this.products.findIndex(t=>t.id===this.selectedProduct.id);-1!==r&&(this.products.splice(r,1),this.filterProducts(),this.showToast("Product deleted successfully")),this.closeDeleteModal()}}generateUniqueId(){return Math.max(0,...this.products.map(r=>r.id))+1}showToast(r){console.log(r)}isFieldInvalid(r){const t=this.productForm.get(r);return!!t&&t.invalid&&(t.dirty||t.touched)}getErrorMessage(r){const t=this.productForm.get(r);if(!t)return"";if(t.errors){if(t.errors.required)return"This field is required";if(t.errors.minlength)return"Input is too short";if(t.errors.min)return"Value must be greater than 0"}return""}};let i=o;return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-product"]],decls:20,vars:6,consts:[[1,"products-container"],[1,"header-section"],[1,"add-button",3,"click"],[1,"fas","fa-plus"],[1,"controls-section"],[1,"search-box"],[1,"fas","fa-search"],["type","text","placeholder","Search products...",3,"ngModel","ngModelChange","input"],[1,"filter-box"],[3,"ngModel","ngModelChange","change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"products-grid"],["class","product-card",4,"ngFor","ngForOf"],["class","modal",4,"ngIf"],["class","modal delete-modal",4,"ngIf"],[3,"value"],[1,"product-card"],[1,"product-image"],[3,"src","alt"],[1,"product-info"],[1,"price"],[1,"category"],[1,"stock"],[1,"product-actions"],[1,"edit-btn",3,"click"],[1,"fas","fa-edit"],[1,"delete-btn",3,"click"],[1,"fas","fa-trash"],[1,"modal"],[1,"modal-content"],[1,"modal-header"],[1,"close-btn",3,"click"],[1,"fas","fa-times"],[3,"formGroup","ngSubmit"],[1,"form-group"],["type","text","formControlName","name"],["class","error",4,"ngIf"],["formControlName","category"],["type","number","formControlName","price"],["type","number","formControlName","stock"],["formControlName","description","rows","3"],["type","file","accept","image/*",3,"change"],[4,"ngIf"],[1,"form-actions"],["type","button",1,"cancel-btn",3,"click"],["type","submit",1,"submit-btn",3,"disabled"],[1,"error"],["alt","Image Preview",1,"image-preview",3,"src"],[1,"modal","delete-modal"],[1,"modal-body"],[1,"warning"],[1,"modal-footer"],[1,"cancel-btn",3,"click"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Product Management"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return c.openAddModal()}),e._UZ(5,"i",3),e._uU(6," Add Product "),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5),e._UZ(9,"i",6),e.TgZ(10,"input",7),e.NdJ("ngModelChange",function(u){return c.searchTerm=u})("input",function(){return c.filterProducts()}),e.qZA()(),e.TgZ(11,"div",8)(12,"select",9),e.NdJ("ngModelChange",function(u){return c.selectedCategory=u})("change",function(){return c.filterProducts()}),e.TgZ(13,"option",10),e._uU(14,"All Categories"),e.qZA(),e.YNc(15,h,2,2,"option",11),e.qZA()()(),e.TgZ(16,"div",12),e.YNc(17,x,17,8,"div",13),e.qZA(),e.YNc(18,w,40,8,"div",14),e.YNc(19,Z,17,2,"div",15),e.qZA()),2&t&&(e.xp6(10),e.Q6J("ngModel",c.searchTerm),e.xp6(2),e.Q6J("ngModel",c.selectedCategory),e.xp6(3),e.Q6J("ngForOf",c.categories),e.xp6(2),e.Q6J("ngForOf",c.filteredProducts),e.xp6(1),e.Q6J("ngIf",c.showModal),e.xp6(1),e.Q6J("ngIf",c.showDeleteModal))},dependencies:[p.sg,p.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u],styles:[":root{--primary: #7E22CE;--secondary: #A088B1;--background: #3A2A46;--text: #FFF5FF}.products-container{padding:24px;max-width:1400px;margin:0 auto}.header-section{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;h1 {color: var(--background); font-size: 28px; font-weight: 600;}}.add-button{background-color:var(--primary);color:#fff;border:none;padding:12px 24px;border-radius:8px;display:flex;align-items:center;gap:8px;cursor:pointer;transition:all .2s ease;&:hover{background-color:darken(#7E22CE,10%);transform:translateY(-2px)}}.controls-section{display:flex;gap:16px;margin-bottom:24px}.search-box{flex:1;position:relative;i {position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--secondary);} input {width: 90%; padding: 12px 12px 12px 40px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; &:focus {outline: none; border-color: var(--primary);}}}.filter-box select{padding:12px;border:1px solid #e2e8f0;border-radius:8px;background-color:#fff;min-width:150px}.products-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px}.product-card{background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px #0000000d;transition:transform .2s ease;&:hover{transform:translateY(-4px)}}.product-image{height:200px;overflow:hidden;img {width: 100%; height: 100%; object-fit: cover;}}.image-preview{max-width:100%;max-height:200px;margin-top:10px}.product-info{padding:16px;h3 {margin: 0 0 8px; font-size: 18px; color: var(--background);} .price {font-size: 20px; font-weight: 600; color: var(--primary); margin: 8px 0;} .category {color: var(--secondary); font-size: 14px;} .stock {font-size: 14px; &.low-stock {color: #dc2626;}}}.product-actions{display:flex;gap:8px;padding:16px;border-top:1px solid #e2e8f0;button {flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; transition: all .2s ease; &.edit-btn {background-color: #f3e8ff; color: var(--primary); &:hover {background-color: darken(#f3e8ff,5%);}} &.delete-btn {background-color: #fee2e2; color: #dc2626; &:hover {background-color: darken(#fee2e2,5%);}}}}.modal{position:fixed;inset:0;background-color:#00000080;display:flex;justify-content:center;align-items:center;z-index:1000}.modal-content{background:white;border-radius:12px;width:90%;max-width:600px;max-height:90vh;overflow-y:auto}.modal-header{padding:16px 24px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;h2 {margin: 0; color: var(--background);} .close-btn {background: none; border: none; cursor: pointer; color: var(--secondary); font-size: 20px; &:hover {color: var(--background);}}}form{padding:24px}.form-group{margin-bottom:20px;label {display: block; margin-bottom: 8px; color: var(--background); font-weight: 500;} input,select,textarea {width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 14px; &:focus {outline: none; border-color: var(--primary);}} .error {color: #dc2626; font-size: 12px; margin-top: 4px;}}.form-actions{display:flex;justify-content:flex-end;gap:12px;margin-top:24px;button {padding: 12px 24px; border-radius: 6px; cursor: pointer; font-weight: 500; transition: all .2s ease; &.cancel-btn {background: none; border: 1px solid #e2e8f0; color: var(--secondary); &:hover {background-color: #f8fafc;}} &.submit-btn {background-color: var(--primary); color: white; border: none; &:hover {background-color: darken(#7E22CE,10%);} &:disabled {opacity: .5; cursor: not-allowed;}}}}.delete-modal{.modal-content {max-width: 400px;} .modal-body {padding: 24px; text-align: center; .warning {color: #dc2626; margin-top: 8px; font-size: 14px;}} .modal-footer {padding: 16px 24px; border-top: 1px solid #e2e8f0; display: flex; justify-content: flex-end; gap: 12px;}}@media (max-width: 768px){.header-section{flex-direction:column;gap:16px;align-items:stretch}.controls-section{flex-direction:column}.products-grid{grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}}\n"],encapsulation:2,data:{animation:[(0,a.X$)("modalAnimation",[(0,a.eR)(":enter",[(0,a.oB)({opacity:0}),(0,a.jt)("200ms ease-out",(0,a.oB)({opacity:1}))]),(0,a.eR)(":leave",[(0,a.jt)("200ms ease-in",(0,a.oB)({opacity:0}))])])]}}),i})();const y=[{path:"",component:f,children:[{path:"AddProduct",component:(()=>{const o=class{};let i=o;return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-product"]],decls:2,vars:0,template:function(t,c){1&t&&(e.TgZ(0,"p"),e._uU(1,"add-product works!"),e.qZA())}}),i})(),title:"Add Product"},{path:"ViewProduct",component:f,title:"View Products"},{path:"UpdateProduct",component:(()=>{const o=class{};let i=o;return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-product"]],decls:2,vars:0,template:function(t,c){1&t&&(e.TgZ(0,"p"),e._uU(1,"edit-product works!"),e.qZA())}}),i})(),title:"Update Product"},{path:"DeleteProduct",component:(()=>{const o=class{};let i=o;return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-delete-product"]],decls:2,vars:0,template:function(t,c){1&t&&(e.TgZ(0,"p"),e._uU(1,"delete-product works!"),e.qZA())}}),i})(),title:"Delete Product"}]}];let T=(()=>{const o=class{};let i=o;return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(y),g.Bz]}),i})(),k=(()=>{const o=class{};let i=o;return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,T,d.u5,d.UX]}),i})()}}]);