(window["webpackJsonpconservative-resource-planning-v2"]=window["webpackJsonpconservative-resource-planning-v2"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/IDOS_bottom_black.3c65a55b.svg"},35:function(e,t,a){e.exports=a.p+"static/media/IDOS_top_black.548c35a6.svg"},36:function(e,t,a){e.exports=a.p+"static/media/IDOS_bottom_white.51f1045c.svg"},37:function(e,t,a){e.exports=a.p+"static/media/IDOS_top_white.df309f29.svg"},38:function(e,t,a){e.exports=a.p+"static/media/IDOS_entire_black.b31c9008.svg"},39:function(e,t,a){e.exports=a.p+"static/media/IDOS_entire_white.3aa37f45.svg"},40:function(e,t,a){e.exports=a.p+"static/media/2.13df68b6.svg"},45:function(e,t,a){e.exports=a(88)},50:function(e,t,a){},51:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(41),c=a.n(l),r=(a(50),a(2)),s=a(3),o=a(16),d=a.n(o),m=(a(51),a(5)),u=a.n(m),h=a(13),p=a(9),f=a(10),b=a(14),v=a(19),g=a.n(v);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _=new(function(){function e(){Object(f.a)(this,e),this.api_url="http://idos.ch/Idos/wp-json/wp/v2"}return Object(b.a)(e,[{key:"generateHeaders",value:function(e){return{headers:y({},e)}}},{key:"request",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a,n,i){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=a,e.next="GET"===e.t0?3:"POST"===e.t0?6:"PUT"===e.t0?9:"DELETE"===e.t0?12:15;break;case 3:return e.next=5,g.a.get(this.api_url+t,this.generateHeaders(i));case 5:return e.abrupt("return",e.sent);case 6:return e.next=8,g.a.post(this.api_url+t,n,this.generateHeaders(i));case 8:return e.abrupt("return",e.sent);case 9:return e.next=11,g.a.put(this.api_url+t,n,this.generateHeaders(i));case 11:return e.abrupt("return",e.sent);case 12:return e.next=14,g.a.delete(this.api_url+t,this.generateHeaders(i));case 14:return e.abrupt("return",e.sent);case 15:case"end":return e.stop()}},e,this)}));return function(t,a,n,i){return e.apply(this,arguments)}}()},{key:"downloadRequest",value:function(){var e=Object(h.a)(u.a.mark(function e(t,a){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(this.api_url+t,this.generateHeaders(a)));case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}());var x=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];function l(){return(l=Object(h.a)(u.a.mark(function e(t,a,n,l,c,r){var s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!1),e.next=4,_.request(t,a,n,r);case 4:s=e.sent,l(s),i(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),c(e.t0),i(!0);case 13:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}function c(){return(c=Object(h.a)(u.a.mark(function e(t,a,n,l){var c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!1),e.next=4,_.downloadRequest(t,l);case 4:return c=e.sent,e.next=7,c.blob();case 7:r=e.sent,a(r),i(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),n(e.t0),i(!0);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return{initiateRequest:function(e,t,a,n,i,c){return l.apply(this,arguments)},error:a,downloadRequest:function(e,t,a,n){return c.apply(this,arguments)}}};var w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)([]),c=Object(r.a)(l,2),s=c[0],o=c[1],d=x();return Object(n.useEffect)(function(){d.initiateRequest("/about_data?_fields[]=about_name&_fields[]=about_content&_fields[]=title&_fields[]=id&order=asc","GET",{},function(e){i(e.data),o(e.data[0])},function(e){})},[]),{aboutPageData:a,activeMenu:s,setActiveMenu:o,setAboutPageData:i}};var N=function(e){var t=e.visible,a=e.children;return t?a:i.a.createElement(n.Fragment,null)};var O=function(){var e=w(),t=e.activeMenu,a=e.setActiveMenu,n=e.aboutPageData,l=function(e){a(e)};return i.a.createElement("div",{className:"content_main "},i.a.createElement("div",{className:"d-none d-md-block animated fadeInUp delay-42s"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4 pr-5"},i.a.createElement("ul",{className:"nav nav-tab list-group list-group-flush about_list px-0 px-lg-5",id:"myTab",role:"tablist"},n.map(function(e,n){e.title;var l=e.id;return e.name,i.a.createElement("li",{className:"list-group-item text-uppercase"},i.a.createElement("a",{key:n,className:t.id==l?"nav-link active fz18":"nav-link fz18",onClick:function(){a(e)},id:t.id,"data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"},e.title.rendered))}))),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("div",{className:"tab-content",id:t.id},i.a.createElement("div",{className:"tab-pane fade show active",id:t.id,role:"tabpanel","aria-labelledby":t.id},i.a.createElement("div",{className:"about_content fz35"},i.a.createElement(N,{visible:t.about_name},i.a.createElement("h3",{className:"fz18 about_heading font-weight-bold"},t.about_name)),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.about_content}})))))))),i.a.createElement("div",{className:"d-md-none animated fadeInUp delay-42s"},i.a.createElement("div",{id:"accordion",className:"about-mob-accordion"},n.map(function(e,a){e.title;var n=e.id;return e.name,i.a.createElement("div",{className:"card border-0 custom_card_new",key:a},i.a.createElement("div",{className:"card-header bg-transparent border-0",id:t.id},i.a.createElement("a",{className:t.id==n?"card-link text-uppercase font-weight-bold":"card-link text-uppercase font-weight-bold collapsed","data-toggle":"collapse",onClick:function(){return l(e)},href:"#collapse"+t.id},e.title.rendered)),i.a.createElement(N,{visible:t.id===n},i.a.createElement("div",{id:"collapse"+t.id,className:"collapse show","data-parent":"#accordion"},i.a.createElement("div",{className:"card-body about-mob-body font-weight-bold pl-0"},i.a.createElement("div",{className:"about_content fz19 "},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.about_content}}))))))}))))};a(69);var j=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],l=x();return Object(n.useEffect)(function(){l.initiateRequest("/contact_data?_fields[]=contact_content&_fields[]=title&_fields[]=id","GET",{},function(e){Object(r.a)(e.data,1)[0],i(e.data)},function(e){})},[]),{contactPageData:a}};var k=function(){var e=j().contactPageData;return i.a.createElement("div",{className:"content_main"},i.a.createElement("div",{className:"d-none d-md-block"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},e.map(function(e){return i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:"col-sm-4 pr-5"},i.a.createElement("ul",{className:"nav nav-tab list-group list-group-flush contact_list px-5",id:e.id,role:"tablist"},i.a.createElement("li",{className:"list-group-item text-uppercase"},i.a.createElement("a",{className:"nav-link fz18",id:e.id,"data-toggle":"tab",href:"#"+e.id,role:"tab","aria-controls":"home","aria-selected":"true"},e.title.rendered)))),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("div",{className:"tab-content",id:"myTabContent"},i.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":e.id},i.a.createElement("div",{className:"contact_content fz35"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.contact_content}}))))))})))),i.a.createElement("div",{className:"d-md-none"},i.a.createElement("div",{id:"accordion"},e.map(function(e){return i.a.createElement("div",{className:"card border-0"},i.a.createElement("div",{className:"card-header bg-transparent border-0 text-uppercase",style:{fontWeight:"bold"}},i.a.createElement("a",{className:"card-link","data-toggle":"collapse",href:"#collapseOne"},e.title.rendered)),i.a.createElement("div",{id:"collapseOne",className:"collapse show","data-parent":"#accordion"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"contact_content fz22"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.contact_content}})))))}))))},S=a(44),C=(a(70),a(15)),I=a(11);a(71);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)([]),c=Object(r.a)(l,2),s=c[0],o=c[1],d=Object(I.useHistory)(),m=x(_.LANDING_DOCS_API),f=x(_.ABOUT_DOCS_API),b=function(){var e=Object(h.a)(u.a.mark(function e(t,a,n){var i,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=function(){var e=Object(h.a)(u.a.mark(function e(i){var l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:l=i.data.guid.rendered,o(function(e){var i=Object(C.a)(e);return i[a]=P(Object(p.a)({item:t.item},n,l),i[a]),i});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),l=function(e){},f.initiateRequest("/media/".concat("webImage"===n?t.image_1:"mobileImage"===n?t.mobile_image:t.thumbnail,"/?_fields[]=guid"),"GET",{},i,l);case 3:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){v()},[a]);var v=function(){a.map(function(e,t){b(e,t,"webImage"),b(e,t,"mobileImage"),b(e,t,"thumbnailImage")})};return Object(n.useEffect)(function(){m.initiateRequest("/landing_data?_fields[]=content&_fields[]=title&_fields[]=id&_fields[]=mobile_image&_fields[]=thumbnail&_fields[]=image_1&_fields[]=title_1&_fields[]=content_1&_fields[]=title_2&_fields[]=content_2&_fields[]=title_3&_fields[]=content_3&_fields[]=title_4&_fields[]=content_4&_fields[]=title_5&_fields[]=content_5&_fields[]=title_6&_fields[]=content_6&_fields[]=title_7&_fields[]=content_7&_fields[]=title_8&_fields[]=content_8&_fields[]=title_9&_fields[]=content_9&_fields[]=title_10&_fields[]=content_10&_fields[]=content_11&order=asc","GET",{},function(e){console.log("landing Data------\x3e>>>>>>",e.data),i(e.data);var t={guid:{rendered:""},guidImage:{rendered:""},_links:{self:[{href:""}],replies:[{embeddable:!0,href:""}]}},a=e.data.map(function(e){return P({item:e},t)});o(a)},function(e){})},[]),{landingPageData:a,navigateTo:function(e,t){d.push(e,{data:t})},getImage:b,imageData:s}},z=function(e,t){return e.slice(t,t+1).map(function(e,t){return[{id:"1",title:e.item.title_1,content:e.item.content_1},{id:"2",title:e.item.title_2,content:e.item.content_2},{id:"3",title:e.item.title_3,content:e.item.content_3},{id:"4",title:e.item.title_4,content:e.item.content_4},{id:"5",title:e.item.title_5,content:e.item.content_5},{id:"6",title:e.item.title_6,content:e.item.content_6},{id:"7",title:e.item.title_7,content:e.item.content_7},{id:"8",title:e.item.title_8,content:e.item.content_8},{id:"9",title:e.item.title_9,content:e.item.content_9},{id:"10",title:e.item.title_10,content:e.item.content_10}]})};function R(e){return e.reduce(function(e,t){return e.concat(Array.isArray(t)?R(t):t)},[])}i.a.createContext();var A=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=(t[0],t[1]),l=T(),c=(l.landingPageData,l.navigateTo,l.imageData);x(_.ABOUT_DOCS_API);var o=Object(S.a)(function(){return{xy:[0,0],config:{mass:1,tension:4e3,friction:40}}}),d=Object(r.a)(o,2);return d[0],d[1],i.a.createElement("div",{className:"content_main"},i.a.createElement("div",{className:"d-none d-md-block"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4 pr-5"},i.a.createElement("ul",{className:"nav nav-tab list-group list-group-flush project_list px-5",id:"myTab",role:"tablist"},i.a.createElement("li",{className:"list-group-item"},i.a.createElement("a",{className:"nav-link active fz18",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",style:{padding:"0px"}},"SURVOLEZ LES PROJETS")))),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("div",{className:"tab-content",id:"myTabContent"},i.a.createElement("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},i.a.createElement("div",{className:"project_content fz35"},i.a.createElement("ul",{className:"list-unstyled fade-out-siblings"},c.map(function(e,t){return i.a.createElement("li",{key:t,className:"project",id:e.item.id,onMouseMove:function(t){return function(e,t,a){for(var n,i,l=document.getElementById(t),c=0,r=0;l.offsetParent;)c+=l.offsetLeft,r+=l.offsetTop,l=l.offsetParent;e?(n=e.pageX,i=e.pageY):(n=window.event.x+document.body.scrollLeft-10,i=window.event.y+document.body.scrollTop-10),n-=c-10,i-=r-10,document.getElementById(a).style.transform="translate("+n+"px, "+i+"px)"}(t,e.item.id,e.item.id+"a")}},i.a.createElement(s.b,{to:{pathname:"/projectsDetails",state:{data:R(z(c,t)),index:t}},className:"d-block fz88"},e.item.title.rendered),i.a.createElement("div",{className:"projectImg",id:e.item.id+"a"},i.a.createElement("img",{src:e.thumbnailImage,width:"200"})))}))))))))),i.a.createElement("div",{className:"d-md-none"},i.a.createElement("div",{id:"accordion",className:"mobileScroll"},c.map(function(e,t){return i.a.createElement("div",{className:"mobileProject py-2",key:t},i.a.createElement("a",{style:{color:"black",textDecoration:"none"},className:"projectMobLink fz35","data-toggle":"collapse",href:"#collapseOne"+e.item.id,onClick:function(){return a(e.guid.rendered)}},i.a.createElement("span",null,e.item.title.rendered)),i.a.createElement("div",{id:"collapseOne"+e.item.id,className:"collapse","data-parent":"#accordion"},i.a.createElement("div",{className:"projectImgMob text-right"},i.a.createElement("img",{src:e.thumbnailImage,width:"200"})),i.a.createElement("div",{className:"d-block mobName mob_detail_link text-left"},i.a.createElement(s.b,{to:{pathname:"/projectsDetails",state:{data:R(z(c,t)),index:t}},className:"card-link text-uppercase font-weight-bold",style:{color:"black"}},"Ouvrir"))))}))))};a(78);var M=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(r.a)(c,2),o=s[0],d=s[1],m=Object(n.useState)(!1),u=Object(r.a)(m,2),h=u[0],p=u[1];return Object(n.useEffect)(function(){var e=0,t=1,a=2,n=3,i=4,c=[3],r=["#000000"],s={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:e,moveY:e,speed:t||11}}},o={new:function(t){return{width:20,height:100,x:"left"===t?10:this.canvas.width-30,y:this.canvas.height/2-50,score:0,move:e,speed:15}}},m={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth-100,this.canvas.height=window.innerHeight-100,this.canvas.style.width="".concat(this.canvas.width,"px"),this.canvas.style.height="".concat(this.canvas.height,"px"),this.player=o.new.call(this,"left"),this.paddle=o.new.call(this,"right"),this.ball=s.new.call(this),this.paddle.speed=9.1,this.running=this.over=!1,this.turn=this.paddle,this.timer=this.round=0,this.color="#000000",u.menu(),u.listen()},endGameMenu:function(e){u.context.font="50px Courier New",u.context.fillStyle=this.color,u.context.fillRect(u.canvas.width/2-350,u.canvas.height/2-48,700,100),u.context.fillStyle="#ffffff",u.context.fillText(e,u.canvas.width/2,u.canvas.height/2+15),setTimeout(function(){(u=Object.assign({},m)).initialize()},3e3)},menu:function(){u.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#ffffff",this.context.fillText("",this.canvas.width/2,this.canvas.height/2+15)},update:function(){this.over||(this.ball.x<=0&&u._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&u._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=a),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=t),this.player.move===t?this.player.y-=this.player.speed:this.player.move===a&&(this.player.y+=this.player.speed),u._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?n:i,this.ball.moveY=[t,a][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),this.ball.moveY===t?this.ball.y-=this.ball.speed/1.5:this.ball.moveY===a&&(this.ball.y+=this.ball.speed/1.5),this.ball.moveX===n?this.ball.x-=this.ball.speed:this.ball.moveX===i&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(this.ball.moveX===i?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(this.ball.moveX===i?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=i),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=n)),this.player.score===c[this.round]?c[this.round+1]?(this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1):(this.over=!0,setTimeout(function(){d(!0)},1e3)):this.paddle.score===c[this.round]&&(this.over=!0,p(!0),setTimeout(function(){(u=Object.assign({},m)).initialize()},500))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#ffffff",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),u._turnDelayIsOver.call(this)&&(this.context.fillStyle="#ffffff",this.context.beginPath(),this.context.arc(this.ball.x,this.ball.y,9,0,2*Math.PI),this.context.fill()),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,0),this.context.lineTo(this.canvas.width/2,this.canvas.height),this.context.lineWidth=1,this.context.strokeStyle=u.running?"#ffffff":"transparent",this.context.stroke(),this.context.font="40px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),170,50),this.context.fillText(this.paddle.score.toString(),this.canvas.width-200,50),this.context.font="20px Courier New",this.context.font="20px Courier"},loop:function(){u.update(),u.draw(),u.over||requestAnimationFrame(u.loop)},listen:function(){document.addEventListener("keydown",function(e){var n=e.keyCode;!1===u.running&&(u.running=!0,l(!1),p(!1),window.requestAnimationFrame(u.loop)),38!==n&&87!==n||(u.player.move=t),40!==n&&83!==n||(u.player.move=a)}),document.addEventListener("keyup",function(t){u.player.move=e})},_resetTurn:function(e,t){this.ball=s.new.call(this,this.ball.speed),this.turn=t,this.timer=(new Date).getTime(),e.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var e=r[Math.floor(Math.random()*r.length)];return e===this.color?u._generateRoundColor():e}},u=Object.assign({},m);u.initialize()},[]),i.a.createElement("div",{className:"content_main d-flex justify-content-center align-items-center blackBg"},i.a.createElement("canvas",{className:"d-none d-sm-block"}),i.a.createElement(N,{visible:a},i.a.createElement("div",{style:{backgroundColor:"black",color:"white",height:"300px",width:"700px",textAlign:"center",position:"absolute"},className:"d-none d-sm-block"},i.a.createElement("div",{style:{textAlign:"center",alignItems:"center",marginTop:"40px"}},i.a.createElement("p",{style:{fontSize:"35px",color:"white"}},"Gagnez le droit de postuler! 3 points minimum!"),i.a.createElement("button",{style:{width:"220px",height:"60px",fontWeight:"bold",fontSize:"35px",borderRadius:"35px",border:"1px groove white",backgroundColor:"black",color:"white",paddingBottom:"10px"},onClick:function(){l(!1)}},"D\xc9MARRER"),i.a.createElement("p",{style:{fontSize:"35px",color:"white"}},"Utilisez les fl\xe8ches haut et bas du clavier")))),i.a.createElement(N,{visible:o},i.a.createElement("div",{style:{backgroundColor:"black",color:"white",height:"250px",width:"600px",textAlign:"center",position:"absolute"}},i.a.createElement("div",{style:{textAlign:"center",alignItems:"center",marginTop:"40px"}},i.a.createElement("p",{style:{fontSize:"46px",color:"white",textAlign:"left"}},"BRAVO!\xa0:)"),i.a.createElement("p",{style:{fontSize:"24px",color:"white",textAlign:"left"}},"Nous cherchons un(e) stagiaire dou\xe9(e) en pong & en architecture pour une dur\xe9e de 6 \xe0 12 mois. Imm\xe9diatement ou \xe0 convenir,",i.a.createElement("p",{style:{textAlign:"left",fontSize:"24px"},className:"mb-0"},"adresse de contact:",i.a.createElement("a",{href:"mailto:info@idos.ch",style:{color:"white",textDecoration:"underline",paddingLeft:"5px",fontSize:"24px"}},"archi@idos.ch")))))),i.a.createElement(N,{visible:h},i.a.createElement("div",{style:{backgroundColor:"black",color:"white",height:"150px",width:"300px",textAlign:"center",position:"absolute"}},i.a.createElement("p",{style:{fontSize:"35px"}},"Vous avez perdu!\xa0:("),i.a.createElement("button",{style:{width:"220px",height:"60px",fontWeight:"bold",borderRadius:"35px",border:"1px groove white",backgroundColor:"black",color:"white",fontSize:"35px"},onClick:function(){p(!1)}},"RESSAYER"))),i.a.createElement("div",{className:"d-block d-sm-none fz23"},"pour gagner le droit de postuler,",i.a.createElement("br",null),"veuillez utiliser un ordinateur"))};a(79);var L=function(){var e=Object(I.useLocation)(),t=Object(I.useHistory)(),a=(e.state||{data:[]}).data;console.log("data",a);var l=Object(n.useState)(a[0]||{id:0,title:""}),c=Object(r.a)(l,2),o=c[0],d=c[1];return Object(n.useEffect)(function(){0===a.length&&t.push("/")},[]),i.a.createElement("div",{className:"content_main"},i.a.createElement("div",{className:"d-none d-md-block"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-4 pr-5"},i.a.createElement("ul",{className:"nav nav-tab list-group list-group-flush project_detials px-5",id:"myTab",role:"tablist"},(a||[]).map(function(e,t){return i.a.createElement(n.Fragment,{key:t},i.a.createElement(N,{visible:""!=e.title},i.a.createElement("li",{className:"list-group-item"},i.a.createElement("a",{className:o.id===e.id?"nav-link active fz18":"nav-link fz18",id:t,"data-toggle":"tab",href:"#"+t,role:"tab","aria-selected":"true",onClick:function(){return function(e){d(e)}(e)}},e.title))))}))),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{className:"tab-pane fade show active",id:o.id,role:"tabpanel"},i.a.createElement("div",{className:"project_details_content fz35"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:o.content},className:"pr5"})))))))),i.a.createElement("div",{className:"d-md-none "},i.a.createElement("div",{className:"project_details_mobile"},a.map(function(e){return function(e){return i.a.createElement(n.Fragment,null,i.a.createElement(N,{visible:e.title},i.a.createElement("div",{className:"border border-left-0 border-right-0 border-dark p-2 mb-4  projectSticky"},i.a.createElement("div",{className:"row align-items-center"},i.a.createElement("div",{className:"col-9"}," ",i.a.createElement("h3",{className:"mb-0 fz26"},(e||{}).title)),i.a.createElement("div",{className:"col-3"},i.a.createElement(s.b,{to:"/projets"},i.a.createElement("p",{className:"mb-0 text-right fz18",style:{color:"black",marginTop:14}},"FERMER")))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"project_mob_details fz19"},i.a.createElement("p",{dangerouslySetInnerHTML:{__html:(e||{}).content},className:"pr5 font-weight-bold"})))))}(e)}))))},H=(a(80),a(34)),q=a.n(H),B=a(35),F=a.n(B),X=a(36),G=a.n(X),Y=a(37),U=a.n(Y),W=(a(38),a(39),a(40)),J=a.n(W);var V=function(){var e=T().imageData;return i.a.createElement("div",{id:"demo",className:"carousel slide","data-ride":"carousel"},i.a.createElement("ul",{className:"carousel-indicators"},i.a.createElement("li",{"data-target":"#demo","data-slide-to":"0",className:"active"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"1"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"2"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"3"}),i.a.createElement("li",{"data-target":"#demo","data-slide-to":"4"})),i.a.createElement("div",{className:"carousel-inner",style:{height:"100%"}},e.slice(0,5).map(function(t,a){return i.a.createElement("div",{key:a,className:0===a?"carousel-item text-center active":"carousel-item text-center",style:{height:"100%"}},i.a.createElement(s.b,{to:{pathname:"/projectsDetails",state:{data:R(z(e,a)),index:a}}},i.a.createElement("div",null,t.webImage||t.mobileImage?i.a.createElement("div",null,i.a.createElement("img",{src:t.mobileImage,alt:"mobile",className:"img-fluid-custome d-block d-lg-none mobile",style:{width:"100%"}}),i.a.createElement("img",{src:t.webImage,alt:"desktop",className:"img-fluid-custome img-fluid d-none d-lg-block desktop"})):i.a.createElement("div",{style:{flex:1,justifyContent:"center",alignItems:"center"}},i.a.createElement("img",{src:J.a,style:{height:"50px",width:"50px",resize:"block"}})))))})))};a(81);var Z=function(e){var t=e.removeClass,a=e.propos,l=e.setPropos,c=e.contact,o=e.setContact,d=e.opportunite,m=e.setOpportunite,u=e.projects,h=e.setProjects,f=Object(n.useContext)(K),b=Object(n.useState)(!1),v=Object(r.a)(b,2),g=v[0],E=v[1],y=function(){document.getElementById("mobileMenuLinks").style.right="-100%",E(!1),f(!g)};return i.a.createElement(n.Fragment,null,i.a.createElement("div",null,g?i.a.createElement("div",{className:!g},i.a.createElement("div",{className:"logo top"},i.a.createElement(s.b,{to:"/"},i.a.createElement("img",{src:U.a,onClick:t,width:"100"}))),i.a.createElement("div",{className:"logo bottom"},i.a.createElement(s.b,{to:"/"},i.a.createElement("img",{src:G.a,onClick:t,width:"100"})))):i.a.createElement("div",null,i.a.createElement("div",{className:"logo top"},i.a.createElement(s.b,{to:"/"},i.a.createElement("img",{src:F.a,onClick:t,width:"100"}))),i.a.createElement("div",{className:"logo bottom"},i.a.createElement(s.b,{to:"/"},i.a.createElement("img",{src:q.a,onClick:t,width:"100"}))))),i.a.createElement("div",Object(p.a)({className:""},"className",!a&&(a||c||u||d)?"menu one propos setPropos":"menu one propos"),i.a.createElement(s.b,{to:"/apropos",onClick:function(){l(!0),o(!1),m(!1),h(!1)}},"\xc0 PROPOS")),i.a.createElement("div",{className:!c&&(c||a||u||d)?"menu two contact setContact":"menu two contact"},i.a.createElement(s.b,{to:"/contact",onClick:function(){l(!1),o(!0),m(!1),h(!1)}},"Contact")),i.a.createElement("div",{className:!u&&(a||c||u||d)?"menu four projects setProjects":"menu four projects"},i.a.createElement(s.b,{to:"/projets",onClick:function(){l(!1),o(!1),m(!1),h(!0)}},"Projets")),i.a.createElement("div",{className:!d&&(a||c||u||d)?"menu four opportunite setOportunite":"menu four opportunite"},i.a.createElement(s.b,{to:"/oportunite",onClick:function(){l(!1),o(!1),m(!0),h(!1)}},"Opportunit\xe9")),i.a.createElement("div",{className:g?"mobile_menu four mobile_Icon":"mobile_menu four"},i.a.createElement("i",{className:"material-icons",onClick:function(e){return function(e){E(!g),f(!g);var t=document.getElementById("mobileMenuLinks");if(null!=t)return 0!=t.style.right?t.style.right="-100%":t.style.right=0,console.log("return")}()}},"add")),i.a.createElement("div",{className:g?"mobile_menu_links_light active_menu":"mobile_menu_links_light",id:"mobileMenuLinks"},i.a.createElement("div",{className:"menu_links"},i.a.createElement(s.b,{to:"/apropos",className:"d-block",onClick:y,style:{color:"black",textDecoration:"none"}},"\xc0 PROPOS"),i.a.createElement(s.b,{to:"/contact",className:"d-block",onClick:y,style:{color:"black",textDecoration:"none"}},"Contact"),i.a.createElement(s.b,{to:"/projets",className:"d-block",onClick:y,style:{color:"black",textDecoration:"none"}},"Projets"),i.a.createElement(s.b,{to:"/oportunite",className:"d-block",onClick:y,style:{color:"black",textDecoration:"none"}},"Opportunit\xe9")),i.a.createElement("div",{className:"menu_address"},i.a.createElement("ul",{className:"list-unstyled fz18"},i.a.createElement("li",null,"IDOS architecture SA"),i.a.createElement("li",null,"Route des Falaises 14",i.a.createElement("br",null)," 2000 Neuchatel ",i.a.createElement("br",null),"Suisse"),i.a.createElement("li",null,"info@idos.ch"),i.a.createElement("li",null,"+41 32 665 22 22")))))};var $=function(){var e=Object(n.useState)("#/"===window.location.hash),t=Object(r.a)(e,1)[0],a=Object(n.useState)(!1),l=Object(r.a)(a,2),c=l[0],o=l[1],m=Object(n.useState)(!1),u=Object(r.a)(m,2),h=u[0],p=u[1],f=Object(n.useState)(!1),b=Object(r.a)(f,2),v=b[0],g=b[1],E=Object(n.useState)(!1),y=Object(r.a)(E,2),_=y[0],x=y[1],w=Object(n.useState)(!0),N=Object(r.a)(w,2),j=N[0],S=N[1];return i.a.createElement(s.a,null,i.a.createElement("div",{className:t?"warpper warpperHome":"warpper "},i.a.createElement(Z,{removeClass:function(){o(!1),p(!1),x(!1),g(!1)},propos:c,setPropos:o,contact:h,setContact:p,projects:v,setProjects:g,opportunite:_,setOpportunite:x,showHide:S,hide:j}),i.a.createElement(d.a,{path:"/",exact:!0,strict:!0,render:function(){return i.a.createElement(V,null)}}),i.a.createElement(d.a,{path:"/apropos",exact:!0,strict:!0,render:function(){return i.a.createElement(O,null)}}),i.a.createElement(d.a,{path:"/contact",exact:!0,strict:!0,render:function(){return i.a.createElement(k,null)}}),i.a.createElement(d.a,{path:"/projets",exact:!0,strict:!0,render:function(){return i.a.createElement(A,null)}}),i.a.createElement(d.a,{path:"/oportunite",exact:!0,strict:!0,render:function(){return i.a.createElement(M,null)}}),i.a.createElement(d.a,{path:"/projectsDetails",exact:!0,render:function(){return i.a.createElement(L,null)}})))},K=i.a.createContext();var Q=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1];return i.a.createElement("div",{className:a?"App changeBorder":"App"},i.a.createElement(K.Provider,{value:function(e){l(e)}},i.a.createElement($,{setChangeBorder:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85),a(86),a(87);c.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.3254593d.chunk.js.map