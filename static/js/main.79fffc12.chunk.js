(this.webpackJsonpcvr_flyt_app=this.webpackJsonpcvr_flyt_app||[]).push([[0],{308:function(e,t){},356:function(e,t,a){e.exports=a(585)},361:function(e,t,a){},474:function(e,t,a){},502:function(e,t){},504:function(e,t){},537:function(e,t){},538:function(e,t){},582:function(e,t){},583:function(e,t){},585:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),s=a.n(l),i=a(19),o=a.n(i),c=(a(361),a(114)),u=a(312),d=a.n(u),m=a(149),h=a(161),p=a(78),f=a(79),v=a(84),k=a(80),b=a(35),g=a(85),E=a(94),y=a(165),O=a(651),j=a(644),w=a(663),F=a(8),D=a(657),S=a(653),C=a(637),x=a(328),T=a.n(x),N=a(116),M=a(335),Y=a(664),R=a(86),_=a.n(R),A=(a(369),a(658)),V=a(652),L=a(330),P=a.n(L),q=a(331),I=a.n(q),K=a(332),U=a.n(K),W=a(333),B=a.n(W),H=a(209),G=a(34),J=a(654),z=a(53),$=a.n(z),Q={width:"100%",height:"600px"},X=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={data:{}},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"renderMap",value:function(){var e=$.a.tileLayer.wms("https://services.kortforsyningen.dk/topo_skaermkort",{layers:"dtk_skaermkort_daempet",token:"d12107f70a3ee93153f313c7c502169a",format:"image/png",attribution:'&copy; <a target="_blank" href="https://download.kortforsyningen.dk/content/vilk%C3%A5r-og-betingelser">Styrelsen for Dataforsyning og Effektivisering</a>'});r=$.a.map("map",{center:[55.876823,9.961644],zoom:7,layers:[e]});var t=$.a.control({position:"bottomleft"});t.onAdd=function(e){var t=$.a.DomUtil.create("div","legend");return t.innerHTML+="<h4>Signaturforklaring</h4>",t.innerHTML+='<i style="background:#0020d7"></i><span>NyStartet</span><br>',t.innerHTML+='<i style="background:#d79700"></i><span>Fraflyttet</span><br>',t.innerHTML+='<i style="background:#298b30"></i><span>Tilflyttet</span><br>',t.innerHTML+='<i style="background:#c10a0a"></i><span>Oph\xf8rt</span><br>',t},t.addTo(r),$.a.control.scale().addTo(r)}},{key:"renderFeatures",value:function(e){void 0!==n&&r.removeLayer(n),n=$.a.geoJSON(e,{onEachFeature:function(e,t){t.bindPopup("<strong>"+e.properties.status+"</strong></br><hr>"+e.properties.navn+'</br><a href="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id='+e.properties["p-nummer"]+'" target="_blank">Se mere her</a>')},pointToLayer:function(e,t){return $.a.marker(t,{icon:(a=e.properties.status,$.a.icon({iconUrl:function(e){switch(e){case"Tilflytter":return"img/t.png";case"Fraflytter":return"img/f.png";case"Nystartet":return"img/n.png";case"Oph\xf8rt":return"img/o.png"}}(a),shadowUrl:"img/shadow.png",iconAnchor:[16,37],shadowAnchor:[20,35],popupAnchor:[0,-30]}))});var a}}).addTo(r);var t=function(e){var t=e.filter((function(e){return["Nystartet",""].includes(e.properties.status)}));return 0===t.length?null:t[0].geometry.coordinates}(e);t?r.setView([t[1],t[0]],12):r.fitBounds(n.getBounds())}},{key:"componentDidMount",value:function(){this.renderMap(),this.props.data.length>0&&this.renderFeatures(this.props.data)}},{key:"componentDidUpdate",value:function(){console.log("componentdidupdate"),this.props.data.length>0?this.renderFeatures(this.props.data):console.log("props empty")}},{key:"renderMarkers",value:function(e){void 0!==n&&r.removeLayer(n),n=$.a.geoJSON(e,{onEachFeature:function(e,t){t.bindPopup("<strong>"+e.properties.status+"</strong></br><hr>"+e.properties.navn+'</br><a href="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id='+e.properties["p-nummer"]+'" target="_blank">Se mere her</a>')},pointToLayer:function(e,t){return $.a.marker(t,{icon:(a=e.properties.status,$.a.icon({iconUrl:function(e){switch(e){case"Tilflytter":return"img/t.png";case"Fraflytter":return"img/f.png";case"Nystartet":return"img/n.png";case"Oph\xf8rt":return"img/o.png"}}(a),shadowUrl:"img/shadow.png",iconAnchor:[16,37],shadowAnchor:[20,35],popupAnchor:[0,-30]}))});var a}}).addTo(r)}},{key:"render",value:function(){return s.a.createElement("div",{id:"map",style:Q})}}]),t}(s.a.Component),Z=a(214),ee=a(2),te=a(11),ae=a(115),ne=function(e){var t,a=e.value,n="Fraflytter"===(t=a)?"orange":"Tilflytter"===t?"green":"Nystartet"===t?"blue":"Oph\xf8rt"===t?"red":"blue";return s.a.createElement("b",{style:{color:n}},a)},re=function(e){return s.a.createElement(te.b,Object.assign({formatterComponent:ne},e))},le=function(e){var t=e.value,a="https://datacvr.virk.dk/data/visenhed?enhedstype=produktionsenhed&id=".concat(t);return s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)},se=function(e){return s.a.createElement(te.b,Object.assign({formatterComponent:le},e))},ie=function(e){return e.keyIndex},oe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={rows:[],data:[],sorting:[{columnName:"hovedbranche",direction:"desc"}],statusColumns:["status"],pcols:["p-nummer"],grouping:[{columnName:"status"}]},a.changeSorting=function(e){return a.setState({sorting:e})},a.changeGrouping=function(e){return a.setState({grouping:e})},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props.updateData,t=this.props.total,a=this.props.totalRendered,n=this.state.statusColumns,r=this.state.pcols,l=this.props.data.map((function(e,t){e.properties.keyIndex=t;var a=e.properties["fuldt ansvarlige deltagere"];return null!==a&&a.length>0&&(e.properties["fuldt ansvarlige deltagere"]=a.replace(/\"/g,"")),"NULL"===a&&(e.properties["fuldt ansvarlige deltagere"]=""),e.properties}));return s.a.createElement(Z.a,{style:{height:"600px"}},s.a.createElement("h6",{style:{textAlign:"center"}},"".concat(a," ud af ").concat(t)),s.a.createElement(ae.a,{rows:l,columns:[{name:"status",title:"Status"},{name:"cvr-nummer",title:"CVR nummer"},{name:"p-nummer",title:"P nummer"},{name:"hovedbranche",title:"Branche"},{name:"virksomhedsform",title:"virksomhedsform"},{name:"navn",title:"Virksomhedsnavn"},{name:"fuldt ansvarlige deltagere",title:"Kontaktperson"},{name:"kvartalbes_interval",title:"Antal ansatte"},{name:"kommunekode",title:"Kommunekode"},{name:"vejnavn",title:"Vejnavn"},{name:"husnummer",title:"Husnummer"},{name:"postnummer",title:"Postnummer"},{name:"postdistrikt",title:"By"},{name:"emailadresse",title:"Email"},{name:"indl\xe6st dato",title:"Indl\xe6st dato"}],getRowId:ie,style:{height:"100%"}},s.a.createElement(te.d,{defaultFilters:[]}),s.a.createElement(te.g,null),s.a.createElement(te.k,{defaultSorting:[{columnName:"status",direction:"desc"}]}),s.a.createElement(te.h,null),s.a.createElement(re,{for:n}),s.a.createElement(se,{for:r}),s.a.createElement(ae.e,{height:600}),s.a.createElement(ae.b,{defaultColumnWidths:[{columnName:"status",width:100},{columnName:"cvr-nummer",width:100},{columnName:"p-nummer",width:100},{columnName:"hovedbranche",width:150},{columnName:"virksomhedsform",width:150},{columnName:"navn",width:150},{columnName:"fuldt ansvarlige deltagere",width:120},{columnName:"kvartalbes_interval",width:120},{columnName:"kommunekode",width:120},{columnName:"vejnavn",width:120},{columnName:"husnummer",width:120},{columnName:"postnummer",width:120},{columnName:"postdistrikt",width:120},{columnName:"emailadresse",width:120},{columnName:"indl\xe6st dato",width:120}]}),s.a.createElement(ae.d,{showSortingControls:!0}),s.a.createElement(ae.c,null),s.a.createElement(ee.k,{name:"root"},s.a.createElement(ee.l,null,(function(t){var a=t.rows;return console.log("filteredRows"),console.log(a),e(a),s.a.createElement(ee.m,null)})))))}}]),t}(s.a.PureComponent),ce=a(656),ue=a(662),de=a(669),me=a(334),he=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(v.a)(this,Object(k.a)(t).call(this))).state={clicked:!1,style:{data:{fill:"tomato"}}},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=e.map((function(e){return e.properties})),a=t.filter((function(e){return"Tilflytter"===e.status})).length;return[{x:"Fraflytter",y:t.filter((function(e){return"Fraflytter"===e.status})).length},{x:"Tilflytter",y:a},{x:"Oph\xf8rt",y:t.filter((function(e){return"Oph\xf8rt"===e.status})).length},{x:"Nystartet",y:t.filter((function(e){return"Nystartet"===e.status})).length}]}(this.props.data);return s.a.createElement("div",null,s.a.createElement(Z.a,{style:{height:800,width:800}},s.a.createElement(ce.a,{height:200,width:300,theme:ue.a.material,domainPadding:15},s.a.createElement(de.a,{barWidth:8,dataComponent:s.a.createElement(me.a,{events:{onMouseOver:function(){var t=e.state.clicked?"blue":"tomato",a=!e.state.clicked;e.setState({clicked:a,style:{data:{fill:t}}})}}}),style:{data:{fill:function(e){return"Fraflytter"===e.datum.x?"orange":"Tilflytter"===e.datum.x?"green":"Oph\xf8rt"===e.datum.x?"red":"Nystartet"===e.datum.x?"blue":void 0}}},data:t,labels:function(e){return e.datum.y}}))))}}]),t}(s.a.Component),pe=(a(474),a(12)),fe=a.n(pe),ve=a(164),ke=a.n(ve),be=a(213),ge=a.n(be),Ee=a(329),ye=a.n(Ee),Oe=a(646),je=a(666),we=a(636),Fe=a(638),De=a(639),Se=a(643),Ce=a(648),xe=a(156),Te=a.n(xe),Ne=a(112),Me=a.n(Ne),Ye=a(647),Re=a(659),_e=a(642),Ae=Object(Oe.a)({list:{width:450},fullList:{width:"auto"},nested:{paddingLeft:30}});function Ve(e){var t=Ae(),a=e.handleDrawer,n=e.filterCols,r=e.handleCheckedFilters,l=e.reset,i=e.doFilter,o=e.filterWords,c=s.a.useState({status:!1,postdistrikt:!1,postnummer:!1}),u=Object(h.a)(c,2),d=u[0],p=u[1];return s.a.createElement("div",null,s.a.createElement(je.a,{anchor:"right",open:e.drawerOpen,onClose:a},function(e,a){var n={};return e.forEach((function(e){a[e]&&(n[e]=function(e,a){return e[a].map((function(e,n){return s.a.createElement(Fe.a,{key:a+"_"+n,button:!0,className:t.nested},s.a.createElement(De.a,{primary:Object.keys(e)[0]}),s.a.createElement(Ye.a,null,s.a.createElement(Re.a,{checked:Object.values(e)[0],onChange:function(t){return r(a+"_"+Object.keys(e)[0],t)},edge:"end"})))}))}(a,e))})),s.a.createElement("div",{className:t.list,role:"presentation"},s.a.createElement(we.a,null,s.a.createElement(Fe.a,null,s.a.createElement(Se.a,null,s.a.createElement(_e.a,{variant:"contained",color:"primary",size:"small",onClick:i},"Filtrere")),s.a.createElement(Ye.a,null,s.a.createElement(_e.a,{variant:"contained",color:"secondary",size:"small",onClick:l},"Nulstil")))),s.a.createElement(we.a,{dense:!0},e.map((function(e,t){return s.a.createElement(s.a.Fragment,{key:"cat_"+t},s.a.createElement(Fe.a,{button:!0,key:e,onClick:function(){return function(e){p(Object(m.a)({},d,Object(E.a)({},e,!d[e])))}(e)}},s.a.createElement(De.a,{primary:e}),d[e]?s.a.createElement(Te.a,null):s.a.createElement(Me.a,null)),s.a.createElement(Ce.a,{in:d[e],timeout:"auto",unmountOnExit:!0},s.a.createElement(we.a,{component:"div",disablePadding:!0,dense:!0},n[e])))}))))}(o,n)))}a(650);_.a.locale("da");var Le=ke.a.ExcelFile,Pe=ke.a.ExcelFile.ExcelSheet,qe=ke.a.ExcelFile.ExcelColumn,Ie=["status","virksomhedsform","hovedbranche"],Ke=Object(M.a)({typography:{useNextVariants:!0,suppressDeprecationWarnings:!0}});function Ue(e,t){var a={};function n(e,t){var a,n=e.map((function(e){return e[t]})),r=(a=n,Object(y.a)(new Set(a)));return r=r.map((function(e){return Object(E.a)({},e,!1)}))}return t.forEach((function(t){a[t]=n(e,t)})),a}function We(e){return s.a.createElement("div",null,e.children)}var Be=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(v.a)(this,Object(k.a)(t).call(this,e))).state={value:0,startDate:_()().subtract(1,"months").startOf("month").format("YYYY-MM-DD"),endDate:_()().subtract(1,"months").endOf("month").format("YYYY-MM-DD"),data:[],kommuner:[],komkode:a.props.komnr,csvData:[],loading:!0,completed:0,canSendRequest:!1,filterOpen:!1,drawerOpen:!1,alertOpen:!1,alertMessage:"",uniqueVals:{},dataToRender:[]},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleStart=a.handleStart.bind(Object(b.a)(a)),a.handleEnd=a.handleEnd.bind(Object(b.a)(a)),a.handleSelect=a.handleSelect.bind(Object(b.a)(a)),a.handleDoneClick=a.handleDoneClick.bind(Object(b.a)(a)),a.handleFilterOpen=a.handleFilterOpen.bind(Object(b.a)(a)),a.handleFilterClose=a.handleFilterClose.bind(Object(b.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(b.a)(a)),a.handleCheckedFilters=a.handleCheckedFilters.bind(Object(b.a)(a)),a.reset=a.reset.bind(Object(b.a)(a)),a.updateRenderDataFromTable=a.updateRenderDataFromTable.bind(Object(b.a)(a)),a.doFilter=a.doFilter.bind(Object(b.a)(a)),a.onAlertClose=a.onAlertClose.bind(Object(b.a)(a)),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"onAlertClose",value:function(){this.setState({alertOpen:!1})}},{key:"doFilter",value:function(){var e=this.state.uniqueVals,t=Object.keys(e),a={};t.forEach((function(t){var n=e[t];a[t]=n.filter((function(e){return!0===Object.values(e)[0]})).map((function(e){return Object.keys(e)[0]}))}));var n=this.state.dataToRender.filter((function(e){var n=!0;return t.forEach((function(t){a[t].length>0&&-1===a[t].indexOf(e.properties[t])&&(n=!1)})),n})),r="".concat(n.length," ud af ").concat(this.state.data.length);this.setState({dataToRender:n,drawerOpen:!1,alertMessage:r,alertOpen:!0})}},{key:"updateRenderDataFromTable",value:function(e){console.log("filtered rows"),this.setState({csvData:e})}},{key:"reset",value:function(){this.setState({dataToRender:this.state.data,uniqueVals:Ue(this.state.data.map((function(e){return e.properties})),Ie)})}},{key:"handleCheckedFilters",value:function(e,t){var a=e.split("_"),n=Object(h.a)(a,2),r=n[0],l=n[1],s=this.state.uniqueVals[r],i=s.findIndex((function(e){return Object.keys(e)[0]===l})),o=s[i];o[l]=!o[l],this.setState({uniqueVals:Object(m.a)({},this.state.uniqueVals,Object(E.a)({},r,[].concat(Object(y.a)(s.slice(0,i)),[o],Object(y.a)(s.slice(i+1)))))})}},{key:"handleFilterOpen",value:function(){this.setState({filterOpen:!this.state.filterOpen})}},{key:"handleDrawerOpen",value:function(){this.setState({drawerOpen:!this.state.drawerOpen})}},{key:"handleFilterClose",value:function(){this.setState({filterOpen:!1})}},{key:"getKommuner",value:function(){var e=this;ge.a.ajax({url:"kom.json",type:"GET",dataType:"json",success:function(t){var a=t.features.map((function(e){return e.properties}));e.setState((function(e){return{kommuner:a}}))}})}},{key:"getData",value:function(e,t,a){this.setState((function(e){return{csvData:[],loading:!0}}));var n=this;if(e){var r="https://drayton.mapcentia.com/api/v1/sql/ballerup?q=SELECT * FROM cvr.flyt_fad_dev("+e+",'"+t+"','"+a+"')&srs=4326";ge.a.ajax({url:r,type:"GET",dataType:"jsonp",success:function(e){var t=e.features.map((function(e){return e.properties}));e.features.forEach((function(e){var t=e.properties.virksomhedsform;e.properties.virksomhedsform=function(e){switch(e){case 10:return"Enkeltmandsvirksomhed";case 15:return"Personligt ejet Mindre Virksomhed";case 20:return"D\xf8dsbo";case 30:return"Interessentskab";case 40:return"Kommanditselskab";case 45:return"Medarbejderinvesteringsselskab";case 50:return"Partrederi";case 60:return"Aktieselskab";case 70:return"Kommanditaktieselskab/Partnerskab";case 80:return"Anpartsselskab";case 81:return"Iv\xe6rks\xe6tterselskab";case 90:return"Fond";case 100:return"Erhvervsdrivende fond";case 110:return"Forening";case 115:return"Frivillig forening";case 130:return"Andelselskab(-forening)";case 140:return"Andelselskab(-forening) med begr\xe6nset ansvar";case 150:return"Forening eller selskab med begr\xe6nset ansvar";case 151:return"Selskab med begr\xe6nset ansvar";case 152:return"Forening med begr\xe6nset ansvar";case 160:return"Europ\xe6isk \xd8konomisk Firmagruppe";case 170:return"Filial af udenlandsk aktieselskab, kommanditakties";case 180:return"Filial af udenlandsk anpartselskab eller selskab";case 190:return"Filial af udenlandsk virksomhed med begr\xe6nset ansv";case 195:return"SCE-selskab";case 196:return"Filial af SCE-selskab";case 200:return"Filial af anden udenlandsk virksomhed";case 210:return"Anden udenlandsk virksomhed";case 220:return"Fast forretningssted af Europ\xe6isk \xf8konomisk Firmag";case 230:case 235:case 245:case 250:return"Offentlige arbejdsplads";case 260:return"Folkekirkelige institutioner";case 270:return"Enhed under oprettelse i Erhvervs- og Selskabsstyr";case 280:return"\xd8vrige virksomhedsformer";case 285:return"S\xe6rlig finansiel virksomhedsform";case 290:return"SE-selskab";case 291:return"Filial af SE-selskab";case 990:return"Uoplyst virksomhedsform";default:return e}}(t)})),n.setState((function(a){return{csvData:t,data:e.features,dataToRender:e.features,loading:!1,uniqueVals:Ue(t,Ie)}}))}})}else this.setState({loading:!1})}},{key:"handleSelect",value:function(e){e.persist(),this.setState((function(t){return{komkode:e.target.value}}))}},{key:"componentDidMount",value:function(){var e=this.state,t=e.komkode,a=e.startDate,n=e.endDate;this.getData(t,a,n),this.getKommuner()}},{key:"componentWillUnmount",value:function(){}},{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"handleDoneClick",value:function(){var e=this.state,t=e.komkode,a=e.startDate,n=e.endDate;t||(t=165),this.getData(t,a,n),Object(c.d)("#/"+t)}},{key:"handleStart",value:function(e){this.setState({startDate:e.format("YYYY-MM-DD")})}},{key:"handleEnd",value:function(e){this.setState({endDate:e.format("YYYY-MM-DD")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.value,n=t.startDate,r=t.endDate,l=t.kommuner,i=t.komkode;return s.a.createElement(Y.a,{theme:Ke},s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:this.state.loading?"loading":""}),s.a.createElement(Ve,{handleDrawer:this.handleDrawerOpen,drawerOpen:this.state.drawerOpen,filterCols:this.state.uniqueVals,handleCheckedFilters:this.handleCheckedFilters,reset:this.reset,doFilter:this.doFilter,filterWords:Ie}),s.a.createElement("div",{className:""},s.a.createElement(O.a,{position:"static",color:"default"},s.a.createElement(j.a,null,s.a.createElement(V.a,{container:!0},s.a.createElement(V.a,{item:!0,xs:3},s.a.createElement(N.a,{variant:"h6",color:"inherit"},"CVR Flyttem\xf8nster")),s.a.createElement(V.a,{item:!0,xs:2},s.a.createElement("form",{className:fe.a.container,noValidate:!0,autoComplete:"off"},s.a.createElement(A.a,{id:"standard-select",select:!0,label:"Kommune",placeholder:"Placeholder",className:fe.a.textField,value:this.state.komkode||"",onChange:this.handleSelect,SelectProps:{native:!0},helperText:"",InputLabelProps:{shrink:!0}},l.map((function(t){e.state.komkode,t.komkode;return s.a.createElement("option",{key:t.komkode,value:t.komkode},t.komnavn)}))))),s.a.createElement(V.a,{item:!0,xs:2},s.a.createElement(G.a,{utils:H.a,locale:"da",moment:_.a},s.a.createElement(J.a,{value:n,label:"Startdato",format:"DD MMM YYYY",onChange:this.handleStart}))),s.a.createElement(V.a,{item:!0,xs:2},s.a.createElement(G.a,{utils:H.a},s.a.createElement(J.a,{value:r,label:"Slutdato",format:"DD MMM YYYY",onChange:this.handleEnd}))),s.a.createElement(V.a,{item:!0,xs:3},s.a.createElement(C.a,{"arial-label":"Done",onClick:this.handleDoneClick},s.a.createElement(w.a,{title:"Send"},s.a.createElement(T.a,null))),s.a.createElement(C.a,{"arial-label":"Filter",onClick:this.handleDrawerOpen},s.a.createElement(w.a,{title:"Filter"},s.a.createElement(ye.a,null))),this.state.csvData.length>0&&s.a.createElement(Le,{element:s.a.createElement(C.a,{"arial-label":"Excel"},s.a.createElement(w.a,{title:"Download Excel"},s.a.createElement(P.a,null))),filename:"export_"+i+"_"+n+"_"+r},s.a.createElement(Pe,{data:this.state.csvData,name:"CVR"},s.a.createElement(qe,{label:"Status",value:"status"}),s.a.createElement(qe,{label:"CVR nummer",value:"cvr-nummer"}),s.a.createElement(qe,{label:"P nummer",value:"p-nummer"}),s.a.createElement(qe,{label:"Branche",value:"hovedbranche"}),s.a.createElement(qe,{label:"virksomhedsform",value:"virksomhedsform"}),s.a.createElement(qe,{label:"Virksomhedsnavn",value:"navn"}),s.a.createElement(qe,{label:"Kontaktperson",value:"fuldt ansvarlige deltagere"}),s.a.createElement(qe,{label:"kvartalbes_interval",value:"Antal ansatte"}),s.a.createElement(qe,{label:"Kommunekode",value:"kommunekode"}),s.a.createElement(qe,{label:"vejnavn",value:"vejnavn"}),s.a.createElement(qe,{label:"Husnummer",value:"husnummer"}),s.a.createElement(qe,{label:"Postnummer",value:"postnummer"}),s.a.createElement(qe,{label:"By",value:"postdistrikt"}),s.a.createElement(qe,{label:"Email",value:"emailadresse"}),s.a.createElement(qe,{label:"Indl\xe6st dato",value:"indl\xe6st dato"}))))))),s.a.createElement(D.a,{value:a,onChange:this.handleChange,centered:!0},s.a.createElement(S.a,{icon:s.a.createElement(w.a,{title:"Kort"},s.a.createElement(I.a,null))}),s.a.createElement(S.a,{icon:s.a.createElement(w.a,{title:"Tabel"},s.a.createElement(U.a,null)),"aria-label":"Tabel"}),s.a.createElement(S.a,{icon:s.a.createElement(w.a,{title:"Histogram"},s.a.createElement(B.a,null))})),0===a&&s.a.createElement(We,null,s.a.createElement(X,{data:this.state.dataToRender})),1===a&&s.a.createElement(We,null,s.a.createElement(oe,{data:this.state.dataToRender,updateData:this.updateRenderDataFromTable,total:this.state.data.length,totalRendered:this.state.csvData.length})),2===a&&s.a.createElement(We,null,s.a.createElement(he,{data:this.state.dataToRender})))))}}]),t}(l.Component),He=Object(F.a)((function(e){return{root:{flexGrow:1},container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:300},progress:{margin:2*e.spacing(1)},nested:{paddingLeft:e.spacing(4)}}}))(Be),Ge=d()(),Je=Object(c.c)(Ge),ze=function(){return s.a.createElement(c.a,{history:Je},s.a.createElement(c.b,null,s.a.createElement(He,{path:"/"}),s.a.createElement(He,{path:"/:komnr"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[356,1,2]]]);
//# sourceMappingURL=main.79fffc12.chunk.js.map