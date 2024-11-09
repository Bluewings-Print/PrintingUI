"use strict";(self.webpackChunkprintingUI=self.webpackChunkprintingUI||[]).push([[626],{2626:(H,_,a)=>{a.r(_),a.d(_,{ProductModule:()=>Y});var p=a(6895),h=a(2045),t=a(8256),f=a(529),g=a(8505),u=a(262),C=a(4004),P=a(2843),b=a(2340);let x=(()=>{const n=class{constructor(e){this.httpClient=e,this.apiDomain=b.N.apiDomain}addProduct(e){return this.httpClient.post(`${this.apiDomain}/Product/AddProduct`,e).pipe((0,g.b)(r=>{}),(0,u.K)(r=>this.handleError(r)))}updateProductDetails(e){return this.httpClient.put(`${this.apiDomain}/Product/UpdateProduct`,e).pipe((0,g.b)(r=>r),(0,u.K)(r=>this.handleError(r)))}getProductsByCategory(e){return this.httpClient.get(`${this.apiDomain}/Product/GetProductByCategoryId/${e}`).pipe((0,C.U)(r=>r),(0,u.K)(r=>this.handleError(r)))}getAllProductDetails(){return this.httpClient.get(`${this.apiDomain}/Product/GetAllProduct`).pipe((0,g.b)(c=>c),(0,u.K)(c=>this.handleError(c)))}GetProductById(e){return this.httpClient.get(`${this.apiDomain}/Product/GetProductById/${e}`).pipe((0,g.b)(r=>r),(0,u.K)(r=>this.handleError(r)))}deleteProduct(e){if(e)return this.httpClient.delete(`${this.apiDomain}/Product/DeleteProduct/${e.id}`).pipe((0,g.b)(r=>r),(0,u.K)(r=>this.handleError(r)))}handleError(e){return 401===e.status?(console.log("An error occured:",e.error),console.error("An error occured:",e.error)):(console.log("An error occured:",e.error),console.error(`BackEnd returned code ${e.status}, body was: `,e.error)),(0,P._)(()=>e.error.message)}getHeaders(){let e=null;return e={headers:new f.WM({"Content-Type":"application/json"})},e}};let o=n;return n.\u0275fac=function(c){return new(c||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),o})();var m=a(433);let M=(()=>{class o{transform(i,e){return e&&i?o.filter(i,e):i}static filter(i,e){const c=e.toLowerCase();function r(s,d){for(let l in s)if(null!==s[l]&&null!=s[l]&&("object"==typeof s[l]&&r(s[l],d)||s[l].toString().toLowerCase().includes(c)))return!0;return!1}return i.filter(function(s){return r(s,e)})}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275pipe=t.Yjl({name:"filter",type:o,pure:!1}),o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})(),T=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();function Z(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw(2);return t.KtG(s.filterByCategory(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit;t.xp6(1),t.hij(" ",i," ")}}function O(o,n){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,Z,2,1,"li",8),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.categories)}}function v(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw(2);return t.KtG(s.filterBySize(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit;t.xp6(1),t.hij(" ",i," ")}}function y(o,n){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,v,2,1,"li",8),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.sizes)}}function w(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw(2);return t.KtG(s.filterByColor(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit;t.xp6(1),t.hij(" ",i," ")}}function k(o,n){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,w,2,1,"li",8),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.colors)}}function A(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw(2);return t.KtG(s.filterByBrand(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit;t.xp6(1),t.hij(" ",i," ")}}function S(o,n){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,A,2,1,"li",8),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.brands)}}function z(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"li",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw(2);return t.KtG(s.filterByPrice(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit;t.xp6(1),t.hij(" ",i," ")}}function N(o,n){if(1&o&&(t.TgZ(0,"ul"),t.YNc(1,z,2,1,"li",8),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.prices)}}function U(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._uU(2," Product Image "),t.qZA(),t.TgZ(3,"div",11)(4,"h4"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.TgZ(8,"button",4),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.customizeProduct(r))}),t._uU(9,"view detail"),t.qZA()()()}if(2&o){const i=n.$implicit;t.xp6(1),t.Udp("background-color",i.color),t.xp6(4),t.Oqu(i.name),t.xp6(2),t.hij("$",i.price,"")}}const F=["imageContainer"],J=["productImage"];function $(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.changeImage(r))}),t._UZ(1,"img",8),t.qZA()}if(2&o){const i=n.$implicit,e=t.oxw();t.ekj("active",i===e.product.imageUrl),t.xp6(1),t.Q6J("src",i,t.LSH)("alt",e.product.name)}}function B(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.selectColor(r.code))}),t.TgZ(1,"span",25),t._uU(2),t.qZA()()}if(2&o){const i=n.$implicit,e=t.oxw();t.Udp("background-color",i.code),t.ekj("selected",i.code===e.selectedColor),t.uIk("aria-label","Select "+i.name),t.xp6(2),t.Oqu(i.name)}}function D(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"button",24),t.NdJ("click",function(){const r=t.CHM(i).$implicit,s=t.oxw();return t.KtG(s.selectSize(r))}),t._uU(1),t.qZA()}if(2&o){const i=n.$implicit,e=t.oxw();t.ekj("selected",i===e.selectedSize),t.xp6(1),t.hij(" ",i," ")}}const I=[{path:"mainProduct",component:(()=>{const n=class{constructor(e,c){this.productService=e,this.router=c,this.searchText="",this.showCategory=!0,this.showSize=!0,this.showColor=!0,this.showBrand=!0,this.showPrice=!0,this.categories=["T-Shirts","Hoodies","Polos","Caps"],this.sizes=["S","M","L","XL"],this.colors=["Red","Blue","Green","Yellow"],this.brands=["Nike","Adidas","Puma","Reebok"],this.prices=["Under $20","$20-$50","$50-$100","Above $100"],this.products=[{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"},{id:123,name:"White Printed T-Shirt",price:24.99,color:"green",category:"T-Shirts",size:"M",brand:"Nike"}],this.filteredProducts=[]}ngOnInit(){this.filteredProducts=this.products}updateSearchText(e){this.searchText=e.target.value}toggleFilter(e){switch(e){case"category":this.showCategory=!this.showCategory;break;case"size":this.showSize=!this.showSize;break;case"color":this.showColor=!this.showColor;break;case"brand":this.showBrand=!this.showBrand;break;case"price":this.showPrice=!this.showPrice}}filterByCategory(e){this.filteredProducts=this.products.filter(c=>c.category===e)}filterBySize(e){this.filteredProducts=this.products.filter(c=>c.size===e)}filterByColor(e){this.filteredProducts=this.products.filter(c=>c.color===e)}filterByBrand(e){this.filteredProducts=this.products.filter(c=>c.brand===e)}filterByPrice(e){}customizeProduct(e){this.router.navigate(["/products/detailProduct"])}};let o=n;return n.\u0275fac=function(c){return new(c||n)(t.Y36(x),t.Y36(h.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main-product"]],decls:38,vars:15,consts:[[1,"container"],[1,"sidebar"],["type","text","placeholder","Type something",3,"ngModel","ngModelChange"],[1,"filter-group"],[3,"click"],[4,"ngIf"],[1,"product-grid"],["class","product-card",4,"ngFor","ngForOf"],[3,"click",4,"ngFor","ngForOf"],[1,"product-card"],[1,"product-image"],[1,"product-details"]],template:function(c,r){1&c&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2"),t._uU(3,"Search here"),t.qZA(),t.TgZ(4,"input",2),t.NdJ("ngModelChange",function(d){return r.searchText=d}),t.qZA(),t.TgZ(5,"div",3)(6,"h3",4),t.NdJ("click",function(){return r.toggleFilter("category")}),t._uU(7," Filter by Category "),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.YNc(10,O,2,1,"ul",5),t.qZA(),t.TgZ(11,"div",3)(12,"h3",4),t.NdJ("click",function(){return r.toggleFilter("size")}),t._uU(13," Size "),t.TgZ(14,"span"),t._uU(15),t.qZA()(),t.YNc(16,y,2,1,"ul",5),t.qZA(),t.TgZ(17,"div",3)(18,"h3",4),t.NdJ("click",function(){return r.toggleFilter("color")}),t._uU(19," Color "),t.TgZ(20,"span"),t._uU(21),t.qZA()(),t.YNc(22,k,2,1,"ul",5),t.qZA(),t.TgZ(23,"div",3)(24,"h3",4),t.NdJ("click",function(){return r.toggleFilter("brand")}),t._uU(25," Brand "),t.TgZ(26,"span"),t._uU(27),t.qZA()(),t.YNc(28,S,2,1,"ul",5),t.qZA(),t.TgZ(29,"div",3)(30,"h3",4),t.NdJ("click",function(){return r.toggleFilter("price")}),t._uU(31," Price "),t.TgZ(32,"span"),t._uU(33),t.qZA()(),t.YNc(34,N,2,1,"ul",5),t.qZA()(),t.TgZ(35,"div",6),t.YNc(36,U,10,4,"div",7),t.ALo(37,"filter"),t.qZA()()),2&c&&(t.xp6(4),t.Q6J("ngModel",r.searchText),t.xp6(5),t.Oqu(r.showCategory?"-":"+"),t.xp6(1),t.Q6J("ngIf",r.showCategory),t.xp6(5),t.Oqu(r.showSize?"-":"+"),t.xp6(1),t.Q6J("ngIf",r.showSize),t.xp6(5),t.Oqu(r.showColor?"-":"+"),t.xp6(1),t.Q6J("ngIf",r.showColor),t.xp6(5),t.Oqu(r.showBrand?"-":"+"),t.xp6(1),t.Q6J("ngIf",r.showBrand),t.xp6(5),t.Oqu(r.showPrice?"-":"+"),t.xp6(1),t.Q6J("ngIf",r.showPrice),t.xp6(2),t.Q6J("ngForOf",t.xi3(37,12,r.filteredProducts,r.searchText)))},dependencies:[p.sg,p.O5,m.Fj,m.JJ,m.On,M],styles:[".container[_ngcontent-%COMP%]{display:flex;gap:1rem;padding:1rem}.sidebar[_ngcontent-%COMP%]{flex:1;max-width:300px;background-color:#f9f9f9;padding:1rem;border-radius:8px}.sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}.sidebar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:.5rem;margin-bottom:1rem;border-radius:8px;border:1px solid #ccc}.sidebar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]{margin-bottom:1rem}.sidebar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{cursor:pointer;display:flex;justify-content:space-between;font-size:1.2rem;margin-bottom:.5rem}.sidebar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding-left:0}.sidebar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;padding:.5rem 0}.sidebar[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{text-decoration:underline}.product-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:1.5rem;flex:3}.product-card[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 4px 8px #0000001a;padding:1rem;display:flex;flex-direction:column;align-items:center;transition:transform .3s ease,box-shadow .3s ease;overflow:hidden}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 8px 16px #00000026}.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{width:100%;padding-top:100%;background-color:#ddd;border-radius:8px;display:flex;justify-content:center;align-items:center;color:#fff;font-weight:700;font-size:1.2rem;transition:transform .3s ease}.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%]{transform:scale(1.05)}.product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:8px}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.1rem;margin-bottom:.5rem;color:#333}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;color:#666;margin-bottom:1rem}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700;color:#111}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:.5rem;background-color:#6a1b9a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:500;transition:background-color .3s ease}.product-card[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#4a148c}"]}),o})(),title:"Main Product Page"},{path:"detailProduct",component:(()=>{const n=class{constructor(){this.product={id:"1",name:"Mens Staple T-Shirt",price:29.99,imageUrl:"assets/public/redHoodie.png",images:["assets/public/redHoodie.png","assets/tshirt-olive-back.jpg","assets/tshirt-olive-detail.jpg"],fit:"Regular fit",material:"100% combed cotton (marles 15% viscose)",weight:"Mid weight, 180 GSM",colors:[{name:"Olive",code:"#556B2F"},{name:"Black",code:"#000000"},{name:"Navy",code:"#000080"},{name:"Gray",code:"#808080"}],sizes:["XS","S","M","L","XL","2XL"]},this.selectedColor=this.product.colors[0].code,this.selectedSize=""}ngOnInit(){}handleZoom(e){const c=this.productImage.nativeElement,s=this.imageContainer.nativeElement.getBoundingClientRect();c.style.transformOrigin=`${(e.clientX-s.left)/s.width*100}% ${(e.clientY-s.top)/s.height*100}%`,c.style.transform="scale(2)"}resetZoom(){this.productImage.nativeElement.style.transform="scale(1)"}changeImage(e){this.product.imageUrl=e}selectColor(e){this.selectedColor=e}selectSize(e){this.selectedSize=e}addToCart(){this.selectedSize?console.log("Added to cart:",{product:this.product.name,color:this.selectedColor,size:this.selectedSize}):alert("Please select a size")}};let o=n;return n.\u0275fac=function(c){return new(c||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-details"]],viewQuery:function(c,r){if(1&c&&(t.Gf(F,5),t.Gf(J,5)),2&c){let s;t.iGM(s=t.CRH())&&(r.imageContainer=s.first),t.iGM(s=t.CRH())&&(r.productImage=s.first)}},decls:52,vars:12,consts:[[1,"product-container"],[1,"breadcrumb"],["href","/"],["href","/clothing"],[1,"product-content"],[1,"image-section"],[1,"image-container",3,"mousemove","mouseleave"],["imageContainer",""],[3,"src","alt"],["productImage",""],[1,"thumbnail-list"],[3,"active","click",4,"ngFor","ngForOf"],[1,"product-info"],[1,"price"],[1,"details"],[1,"detail-item"],[1,"label"],[1,"color-selection"],[1,"color-grid"],[3,"backgroundColor","selected","click",4,"ngFor","ngForOf"],[1,"size-selection"],[1,"size-grid"],[3,"selected","click",4,"ngFor","ngForOf"],[1,"add-to-cart",3,"click"],[3,"click"],[1,"sr-only"]],template:function(c,r){1&c&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"a",2),t._uU(3,"Home"),t.qZA(),t._uU(4," / "),t.TgZ(5,"a",3),t._uU(6,"Clothing"),t.qZA(),t._uU(7," / "),t.TgZ(8,"span"),t._uU(9,"T-Shirts"),t.qZA()(),t.TgZ(10,"div",4)(11,"div",5)(12,"div",6,7),t.NdJ("mousemove",function(d){return r.handleZoom(d)})("mouseleave",function(){return r.resetZoom()}),t._UZ(14,"img",8,9),t.qZA(),t.TgZ(16,"div",10),t.YNc(17,$,2,4,"button",11),t.qZA()(),t.TgZ(18,"div",12)(19,"h1"),t._uU(20),t.qZA(),t.TgZ(21,"div",13),t._uU(22),t.ALo(23,"currency"),t.qZA(),t.TgZ(24,"div",14)(25,"div",15)(26,"span",16),t._uU(27,"Fit:"),t.qZA(),t.TgZ(28,"span"),t._uU(29),t.qZA()(),t.TgZ(30,"div",15)(31,"span",16),t._uU(32,"Material:"),t.qZA(),t.TgZ(33,"span"),t._uU(34),t.qZA()(),t.TgZ(35,"div",15)(36,"span",16),t._uU(37,"Weight:"),t.qZA(),t.TgZ(38,"span"),t._uU(39),t.qZA()()(),t.TgZ(40,"div",17)(41,"h3"),t._uU(42,"Available Colors"),t.qZA(),t.TgZ(43,"div",18),t.YNc(44,B,3,6,"button",19),t.qZA()(),t.TgZ(45,"div",20)(46,"h3"),t._uU(47,"Select Size"),t.qZA(),t.TgZ(48,"div",21),t.YNc(49,D,2,3,"button",22),t.qZA()(),t.TgZ(50,"button",23),t.NdJ("click",function(){return r.addToCart()}),t._uU(51,"Order now"),t.qZA()()()()),2&c&&(t.xp6(14),t.Q6J("src",r.product.imageUrl,t.LSH)("alt",r.product.name),t.xp6(3),t.Q6J("ngForOf",r.product.images),t.xp6(3),t.Oqu(r.product.name),t.xp6(2),t.Oqu(t.lcZ(23,10,r.product.price)),t.xp6(7),t.Oqu(r.product.fit),t.xp6(5),t.Oqu(r.product.material),t.xp6(5),t.Oqu(r.product.weight),t.xp6(5),t.Q6J("ngForOf",r.product.colors),t.xp6(5),t.Q6J("ngForOf",r.product.sizes))},dependencies:[p.sg,p.H9],styles:["[_nghost-%COMP%]{display:block;background-color:#fff5ff;min-height:100vh;padding:2rem}.product-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.breadcrumb[_ngcontent-%COMP%]{margin-bottom:2rem;color:#3a2a46;a {color: #7e22ce; text-decoration: none; transition: color .2s; &:hover {color: #a088b1;}}}.product-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:4rem;@media (max-width: 768px){grid-template-columns:1fr;gap:2rem}}.image-section[_ngcontent-%COMP%]{.image-container {position: relative; overflow: hidden; border-radius: 8px; background-color: white; img {width: 100%; height: auto; transition: transform .1s ease-out;}} .thumbnail-list {display: flex; gap: 1rem; margin-top: 1rem; button {width: 60px; height: 60px; padding: 0; border: 2px solid transparent; border-radius: 4px; cursor: pointer; overflow: hidden; transition: border-color .2s; &.active {border-color: #7e22ce;} img {width: 100%; height: 100%; object-fit: cover;}}}}.product-info[_ngcontent-%COMP%]{h1 {color: #3a2a46; font-size: 2rem; margin-bottom: 1rem;} .price {font-size: 1.5rem; color: #7e22ce; margin-bottom: 2rem;} .details {margin-bottom: 2rem; .detail-item {display: flex; margin-bottom: .5rem; .label {width: 100px; color: #a088b1;}}}}.color-selection[_ngcontent-%COMP%], .size-selection[_ngcontent-%COMP%]{margin-bottom:2rem;h3 {color: #3a2a46; margin-bottom: 1rem;}}.color-grid[_ngcontent-%COMP%], .size-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(50px,1fr));gap:.5rem;button {width: 50px; height: 50px; border: 2px solid transparent; border-radius: 4px; cursor: pointer; transition: transform .2s,border-color .2s; &:hover {transform: scale(1.05);} &.selected {border-color: #7e22ce;}}}.add-to-cart[_ngcontent-%COMP%]{width:100%;padding:1rem;background-color:#7e22ce;color:#fff;border:none;border-radius:4px;font-size:1.1rem;cursor:pointer;transition:background-color .2s;&:hover{background-color:#a088b1}}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}"]}),o})(),title:"Product Details Page"}];let j=(()=>{const n=class{};let o=n;return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[h.Bz.forChild(I),h.Bz]}),o})(),Y=(()=>{const n=class{};let o=n;return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,j,T,m.u5]}),o})()}}]);