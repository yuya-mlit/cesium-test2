(function(e){function t(t){for(var n,a,s=t[0],u=t[1],c=t[2],h=0,f=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/cesium-gsi-terrain/example/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},1:function(e,t){},2:function(e,t){},"3fb0":function(e,t,r){"use strict";r("d3b7"),r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("cfc3"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("5cc6"),r("cb29"),r("d81d"),r("84c3");var n=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{u(n.next(e))}catch(t){o(t)}}function s(e){try{u(n["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):i(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(i=2&o[0]?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),i=0;for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=r("ec35"),u=a(r("35a6")),c=a(r("9b84"));function l(e){for(var t=e.shape[0]+1,r=new Float32Array(t*t),n=e.shape[0],i=0;i<n;i++)for(var o=0;o<n;o++){var a=i,s=e.get(o,a,0),u=e.get(o,a,1),c=e.get(o,a,2);r[i*t+o]=128===s&&0===u&&0===c?0:s>=128?655.36*s+2.56*u+.01*c-167772.16:655.36*s+2.56*u+.01*c}for(o=0;o<t-1;o++)r[t*(t-1)+o]=r[t*(t-2)+o];for(i=0;i<t;i++)r[t*i+t-1]=r[t*i+t-2];return r}var h=function(){function e(e){var t;this.hasWaterMask=!1,this.hasVertexNormals=!1,this.credit=new s.Credit("地理院タイル"),this.availability=null,this.errorEvent=new s.Event,this.tileSize=256,this.martini=new c.default(this.tileSize+1),this.ready=!0,this.readyPromise=Promise.resolve(!0),this.errorEvent.addEventListener(console.log,this),this.ellipsoid=null!==(t=e.ellipsoid)&&void 0!==t?t:s.Ellipsoid.WGS84,this.format="png",this.tilingScheme=new s.WebMercatorTilingScheme({numberOfLevelZeroTilesX:1,numberOfLevelZeroTilesY:1,ellipsoid:this.ellipsoid})}return e.prototype.getPixels=function(e,t){return void 0===t&&(t=""),n(this,void 0,void 0,(function(){return i(this,(function(r){return[2,new Promise((function(r,n){u.default(e,t,(function(e,t){null!=e&&n(e),r(t)}))}))]}))}))},e.prototype.requestMapboxTile=function(e,t,r){return n(this,void 0,void 0,(function(){var n,o,a,s,u,c,h;return i(this,(function(i){switch(i.label){case 0:this.tilingScheme.getNumberOfYTilesAtLevel(r),n=this.getLevelMaximumGeometricError(r),o="https://cyberjapandata.gsi.go.jp/xyz/dem_png/"+r+"/"+e+"/"+t+".png",i.label=1;case 1:return i.trys.push([1,4,,5]),[4,this.getPixels(o)];case 2:return a=i.sent(),s=l(a),u=this.martini.createTile(s),console.log("Error level: "+n),c=u.getMesh(n),[4,this.createQuantizedMeshData(e,t,r,u,c)];case 3:return[2,i.sent()];case 4:return i.sent(),h=Math.max(32-4*r,4),[2,this.emptyHeightmap(h)];case 5:return[2]}}))}))},e.prototype.emptyHeightmap=function(e){return new s.HeightmapTerrainData({buffer:new Uint8Array(Array(e*e).fill(0)),width:e,height:e})},e.prototype.createQuantizedMeshData=function(e,t,r,a,u){return n(this,void 0,void 0,(function(){var n,c,l,h,f,p,d,v,m,g,b,y,w,O,x,S,j,_,M,P,T,E,k,z,H,A,B,L,D,I;return i(this,(function(i){for(n=this.getLevelMaximumGeometricError(r),c=5*n,l=[],h=[],f=[],p=[],d=[],v=[],m=[],g=0;g<u.vertices.length/2;g++)b=g,y=u.vertices[2*g],w=u.vertices[2*g+1],f.push(a.terrain[w*(this.tileSize+1)+y]),0==w&&p.push(b),w==this.tileSize&&d.push(b),0==y&&m.push(b),y==this.tileSize&&v.push(b),O=32768/this.tileSize,x=y*O,S=(this.tileSize-w)*O,l.push(x),h.push(S);return j=Math.max.apply(this,f),_=Math.min.apply(this,f),M=f.map((function(e){return j-_<1?0:32767/(j-_)*(e-_)})),P=this.tilingScheme.tileXYToRectangle(e,t,r),T=s.Cartographic.toCartesian(s.Rectangle.center(P)),E=Math.cos(P.width/2),k=j/this.ellipsoid.maximumRadius,z=(1+k)/E,H=s.Ellipsoid.WGS84.transformPositionToScaledSpace(T),A=new s.Cartesian3(H.x,H.y,z),B=null,P.width<s.Math.PI_OVER_TWO+s.Math.EPSILON5?(B=s.OrientedBoundingBox.fromRectangle(P,_,j),L=s.BoundingSphere.fromOrientedBoundingBox(B)):L=new s.BoundingSphere(s.Cartesian3.ZERO,6379792.481506292),D=new Uint16Array(u.triangles),P.width>.02?[2,this.emptyHeightmap(64)]:(I=new Uint16Array(o(l,h,M)),[2,new s.QuantizedMeshTerrainData({minimumHeight:_,maximumHeight:j,quantizedVertices:I,indices:D,boundingSphere:L,orientedBoundingBox:B,horizonOcclusionPoint:A,westIndices:m,southIndices:d,eastIndices:v,northIndices:p,westSkirtHeight:c,southSkirtHeight:c,eastSkirtHeight:c,northSkirtHeight:c,childTileMask:14})])}))}))},e.prototype.requestTileGeometry=function(e,t,r){return n(this,void 0,void 0,(function(){var n,o;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.requestMapboxTile(e,t,r)];case 1:return n=i.sent(),[2,n];case 2:return o=i.sent(),console.log(o),[3,3];case 3:return[2]}}))}))},e.prototype.getLevelMaximumGeometricError=function(e){var t=s.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(this.tilingScheme.ellipsoid,65,this.tilingScheme.getNumberOfXTilesAtLevel(0));return t/(1<<e)},e.prototype.getTileDataAvailable=function(e,t,r){return r<=14},e}();t.default=h},"429a":function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="429a"},"7a83":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r("3fb0"));t.default=i.default},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function i(e,t,r,i,o,a){var s=Object(n["g"])("HelloWorld");return Object(n["e"])(),Object(n["b"])(s)}var o={ref:"canvas"};function a(e,t,r,i,a,s){return Object(n["e"])(),Object(n["b"])("div",o,null,512)}var s=r("5530"),u=r("1da1"),c=(r("96cf"),r("ec35")),l=(r("e877"),r("7a83")),h=r.n(l),f=Object(n["c"])({name:"HelloWorld",props:{msg:String},setup:function(){var e=Object(n["f"])();return Object(n["d"])(Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=new c["UrlTemplateImageryProvider"]({url:"https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg"}),n={animation:!1,baseLayerPicker:!1,fullscreenButton:!1,homeButton:!1,geocoder:!1,infoBox:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1,sceneModePicker:!1},i=new c["Viewer"](e.value,Object(s["a"])(Object(s["a"])({imageryProvider:r,scene3DOnly:!0},n),{},{terrainProvider:new h.a({}),targetFrameRate:30})),i.cesiumWidget.creditContainer.remove(),i.camera.setView({destination:c["Cartesian3"].fromDegrees(138.68,35.3,4e3),orientation:{heading:.7,pitch:-.2,roll:0}});case 5:case"end":return t.stop()}}),t)})))),{canvas:e}}});f.render=a;var p=f,d=Object(n["c"])({name:"App",components:{HelloWorld:p}});d.render=i;var v=d;Object(n["a"])(v).mount("#app")}});