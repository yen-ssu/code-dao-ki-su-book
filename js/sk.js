(function(){var e="prototype",t=window.sk={base:{},utils:{},widgets:{},events:{}};t.extend=function(t,n){var r=function(){};r[e]=n[e],t[e]=new r,t._super=n[e],t[e].constructor=t}})(jQuery),function(e){var t="window",n="click",r="langs",i="thickbox",s=!1,o="pages",u="elem",a="close",f="trigger",l="langcode",c="handleOnLoad",h=".active",p="data",d="next",v="content",m="keyup",g="search",y="overlay",b="html",w="prev",E="image",S="removeClass",x="function",T="unbind",N="bind",C="hide",k="show",L=null,A="$body",O="$doc",M="addClass",_="overlayI",D="isOpen",P="width",H="title",B="Thickbox",j="loading",F="href",I="handleKeyPage",q="widgets",R="previo",U="onClose",z="height",W="handleKeyClose",X="split",V="a",$="focus",J="preloadHash",K=":visible",Q="appendTo";sk[q][B]=function(){this[y]=L,this[_]=L,this[t]={},this[O]=e(document),this[A]=e("body"),this.$html=e(b),this[l]=this.$html.attr("lang")||"cs",this[r]={cs:{close:"Zavřít",prev:"předchozí",next:"následující"},en:{close:"Close",prev:"previous",next:d},de:{close:"Zumachen",prev:"vorige",next:"folgend"},es:{close:"Vaer",prev:R,next:"siguiente"},fr:{close:"Fermer",prev:"précédant",next:"suivant"},it:{close:"Chiudere",prev:R,next:" veniente"},ru:{close:"закрыть",prev:"предшествующий",next:"последующий"}},this[r]["cs-CZ"]=this[r].cs,this[r]["en-GB"]=this[r]["en-US"]=this[r]["en-CA"]=this[r].en,this[r]["de-DE"]=this[r].de,this[r]["ru-RU"]=this[r].ru,this[r]["fr-FR"]=this[r].fr,this[b]="		<div id='sk-box-top'> 			<div id='sk-box-bottom'> 				<div id='sk-box-left'> 					<div id='sk-box-right'> 						<div id='sk-content'> 							<h2 id='sk-box-title'></h2> 							<div id='sk-box-desc'></div> 							<a href='#' id='sk-box-image' title='"+this[r][this[l]][a]+"'></a> 							<p id='sk-box-pager'> 								<a href='#' id='sk-box-prev' rel=''>"+this[r][this[l]][w]+"<span></span></a> 								<span id='sk-box-pages'></span> 								<a href='#' id='sk-box-next' rel=''>"+this[r][this[l]][d]+"<span></span></a> 							</p> 						</div> 					</div> 				</div> 			</div> 		</div> 		<a href='#' id='sk-box-close' title='"+this[r][this[l]][a]+"'> "+this[r][this[l]][a]+"</a> 		<div id='sk-box-top-left'>&nbsp;</div> 		<div id='sk-box-top-right'>&nbsp;</div> 		<div id='sk-box-bottom-left'>&nbsp;</div> 		<div id='sk-box-bottom-right'>&nbsp;</div>",this[P]=600,this.autoWidth=s,this.onOpen=L,this.onLoad=L,this[U]=L,this[D]=s},sk[q][B].prototype={constructor:sk[q][B],control:function(t){this[O].delegate(t,n,e.proxy(function(n){this.open(e(n.currentTarget),e(t)),n.preventDefault()},this))},open:function(n,r){this[D]||(this[D]=!0,this.handleOnOpen(),this.overlayShow(),this.boxShow()),this[t][u][M](j).focusin(function(){e(this)[M]($)}).focusout(function(){e(this)[S]($)}),this[t][o][C](),this[t][d][C](),this[t][w][C](),this[t][E][C](),this[t][H][C](),typeof n!="undefined"&&this.group(n,r)},group:function(r,i){var u,a=r.attr("data-rel"),l=this,c=i.filter('[data-rel="'+a+'"]');a&&c.length>1?(u="",c.each(function(e){u+=" <a href='"+this[F]+"'>"+(e+1)+"</a> "}),this[t][o].empty().append(u),numbers=e(V,this[t][o]),numbers[N](n,{that:this,numbers:numbers,all:c},this.handleNumbers).eq(c.index(r))[f](n),this[t][w][N](n,function(){var r=e(h,l[t][o])[w]().length?e(h,l[t][o])[w]():e(V,l[t][o]).last();return r[f](n),s}),this[t][d][N](n,function(){var r=e(h,l[t][o])[d]().length?e(h,l[t][o])[d]():e(V,l[t][o]).first();return r[f](n),s}),this[O][N](m,{that:this},this[I]),this[t][o][k](),this[t][d][k](),this[t][w][k]()):this.preload(r.get(0)[F],r)},openUrl:function(e){this.open(),this.preloadUrl(e)},openHtml:function(e){this.open(),this[t][v][k]()[b](e),this[c](e)},openHash:function(e){this.open(),this[J](e)},preload:function(n,r){var s,o,u,a,f=/\.jpg|\.png|\.gif$/i,l=/#/,c=r.attr(F);n[g](f)!==-1?(s=e("img",r),o=r[p](i)&&r[p](i)[H]||"",u=r[p](i)&&r[p](i).longdesc||"",a=r[p](i)&&r[p](i).desc||"",a=a+(a&&u?", ":"")+(u?'<a href="'+u+'">'+u+"</a>":""),o?this[t][H][k]().text(o):this[t][H][C](),a?this[t][v][k]()[b]("<p>"+a+"</p>"):this[t][v][C](),this[t][E][k](),this.preloadImage(n)):c[g](l)==0||c[g](l)!=-1&&window.location[F][X]("#")[0]==n[X]("#")[0]?this[J](n):this.preloadUrl(n)},preloadImage:function(n){imgPreloader=document.createElement("img"),e(imgPreloader)[N]("load",{that:this},function(e){var n=e[p].that,r=this[P];n[t][E].empty().append(this),n.autoWidth&&(n[P]=r+68,n.boxPosition()),n[c](this)}),e(imgPreloader).attr("src",n)},preloadUrl:function(n){var r=this,i="?",s=/\?/;n[g](s)!=-1&&(i="&"),e.get(n+i+"ajax=true",function(i){var s,o,u=n[g](/#/)!=-1?n[X]("#")[1]:"";u!=""?(s=e("<div>"+i+"</div>"),o=e("#"+unescape(u),s).clone()):o=i,r[t][v][k]()[b](o),r[t][E][C](),e("#sk-box-bottom-left, #sk-box-bottom-right").css("position","absolute"),r[c](o)})},preloadHash:function(n){var r,i;n[g](/#/)!=-1?r=n[X]("#")[1]:r=n,e("#"+r).size()>0?i=e("#"+r)[b]():i="Hash nenalezen",this[t][v][k]()[b](i),this[t][E][C](),this[c](i)},close:function(){this[D]=s,this.handleOnClose(),this.boxHide(),this.overlayHide()},boxShow:function(){this[t][u]=e('<div id="sk-box-window"></div>'),this[t][u][b](this[b])[Q](this[A]),this[t][a]=e("#sk-box-close",this[t][u]),this[t][H]=e("#sk-box-title",this[t][u]),this[t][v]=e("#sk-box-desc",this[t][u]),this[t].pager=e("#sk-box-pager",this[t][u]),this[t][o]=e("#sk-box-pages",this[t][u]),this[t][w]=e("#sk-box-prev",this[t][u]),this[t][d]=e("#sk-box-next",this[t][u]),this[t][E]=e("#sk-box-image",this[t][u]),this[t][a][N](n,{that:this},this.handleClose),this[O][N](m,{that:this},this[W]),this[t][E][N](n,{that:this},function(e){var r=e[p].that;return r[t][d][f](n),s}),this.boxPosition()},boxHide:function(){this[t][a][T](),this[t][d][T](),this[t][w][T](),this[t][o].find(V)[T](),this[O][T](m,this[W])[T](m,this[I]),this[t][u].remove()},boxPosition:function(){var e=this.$html.scrollTop()||this[A].scrollTop();this[t][u].css({marginLeft:"-"+this[P]/2+"px",width:this[P]+"px",top:e+40+"px"})},overlayShow:function(){var t=this[O][z]();this[_]=e('<iframe id="sk-box-HideSelect"></iframe>')[z](t)[Q](this[A]),this[y]=e('<div id="sk-box-overlay"></div>')[z](t)[Q](this[A]),this[y][N](n,{that:this},this.handleClose)},overlayHide:function(){this[y][T]().remove(),this[_].remove()},getKey:function(e){var e,t,n;return e||(e=window.event),e.keyCode?t=e.keyCode:e.which&&(t=e.which),n=String.fromCharCode(t).toLowerCase(),[t,n]},handleClose:function(e){return e[p].that[a](),s},handleKeyClose:function(e){var r=e[p].that,i=r.getKey(e);return i[0]==27&&r[t][a][f](n),s},handleKeyPage:function(e){var r=e[p].that,i=r.getKey(e);return i[0]==37?r[t][w].filter(K)[f](n):i[0]==39&&r[t][d].filter(K)[f](n),s},handleNumbers:function(t){var n=t[p].numbers,r=t[p].that,i=e(this),o=n.index(this);return n[S]("active"),i[M]("active"),r.preload(this[F],t[p].all.eq(o)),s},handleOnOpen:function(){typeof this.onOpen==x&&this.onOpen.call(this,this[t][u])},handleOnLoad:function(e){this[y][z](this[O][z]()),typeof this.onLoad==x&&this.onLoad.call(this,this[t][u],e),this[t][u][S](j)},handleOnClose:function(){typeof this[U]==x&&this[U].call(this,this[t][u])}}}(jQuery);