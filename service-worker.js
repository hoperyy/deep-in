if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),f={module:{uri:c},exports:r,require:b};s[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.493975ce.css",revision:"38939e5be33d41f4f0da95d0d2077459"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/26.db6b8dab.js",revision:"38d80ace3699e17b073cc64071a3eaba"},{url:"assets/js/app.1bcfb3b3.js",revision:"e5892265a7c4a9bb730eb8d34234fc17"},{url:"assets/js/layout-Blog.b0c6dcb7.js",revision:"342c067b8b0ba51c4100027f9ce25d33"},{url:"assets/js/layout-Layout.54347a9b.js",revision:"705fe36c8e6c6cdd4228d02890c04b9f"},{url:"assets/js/layout-NotFound.846facba.js",revision:"3a4db94d18b45d007ecc12d174662fb4"},{url:"assets/js/layout-Slide.88fa1023.js",revision:"4e6ba79b159798981d5563e15e2263ac"},{url:"assets/js/page--0634ff23.a0330061.js",revision:"668538bc40694dbef84550f6fcf371a6"},{url:"assets/js/page--0a25c2f2.537ec7c2.js",revision:"8260a6744a743c1d82e81428b2bacbec"},{url:"assets/js/page--16ed4b18.a3685b13.js",revision:"f2acca11233f37f4f0bb004b1a7b83fa"},{url:"assets/js/page--22748d68.ec38d625.js",revision:"a57a0064d240ab92acc48c064ab776d8"},{url:"assets/js/page--340e5eca.98e127bc.js",revision:"46f229fc076f9c4e208fa0d86c9d4bbe"},{url:"assets/js/page--3593c398.674650dc.js",revision:"7c64a258ef5544c838af9271cb63813e"},{url:"assets/js/page--3c8b2e78.a85de8a4.js",revision:"88999ba28616a7f708f656423293da37"},{url:"assets/js/page--41eeb5e4.f46cc140.js",revision:"c6b5c7d21b4b4861cbe69495973ebdca"},{url:"assets/js/page--4655fe84.fb128710.js",revision:"93e635f984ee53a3f724919030bd2773"},{url:"assets/js/page--4d090060.fed09ae4.js",revision:"c333fbfea7a9de8c0d6720d5bb4cec00"},{url:"assets/js/page--4fdeacc4.9d22c4c1.js",revision:"3be308080df9ec773ab0574273958b15"},{url:"assets/js/page--aa1cd778.17eec900.js",revision:"4888928ff8754f476621d833eff888a9"},{url:"assets/js/page--aec4dcea.63bd61cc.js",revision:"c0db7a3508c6a2eb45329b252afbd9ca"},{url:"assets/js/page-前言.0350ecb5.js",revision:"f7de9c92722ee154aa8efdfd723b8ac4"},{url:"assets/js/page-提案特性转换插件.51954226.js",revision:"d16568fdbe8762ee5acb36093e8461f0"},{url:"assets/js/page-语法分析和语义分析.f62ff820.js",revision:"1f81c13ade02e8b908fbe6764a9ef322"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.ebefd1c7.js",revision:"6f775b4c382993f0492a07fff3f93958"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.33005620.js",revision:"66ab7f89839094e5d84f9652544d0b05"},{url:"assets/js/vendors~layout-Layout.df4812ba.js",revision:"bbd3d92d223235ea15047ffa71779d88"},{url:"assets/js/vendors~photo-swipe.ed4bf049.js",revision:"769939c8347f7c19b0ebd6cf8e9ae439"},{url:"00.前言/index.html",revision:"47005cf2ed5e5bef8cbb79c76bbec589"},{url:"01.概述/index.html",revision:"d240e788693ec9905a4b0da0cd0d85dc"},{url:"02.转译原理(1)/index.html",revision:"ef997730ae7830fe6acde7b9c91becb7"},{url:"03.转译原理(2)/index.html",revision:"6d28e64b7193f3734d86ce956a3d93a7"},{url:"04.Babel节点/index.html",revision:"a4116b6eb667ab1b67b2b3693eced3ad"},{url:"05.Babel工具集/index.html",revision:"9e3401a98af1d37ed8d13d62d002f51f"},{url:"06.Babel插件编写/index.html",revision:"fab0afd07171d8e621e3e14d6502f50a"},{url:"07.Babel内置Plugin(1)/index.html",revision:"c8609da1dc757195a2a7700d0a9838f1"},{url:"08.Babel内置Plugin(2)/index.html",revision:"d74471d2d2e4d5ab4cf56468612281a0"},{url:"09.Babel内置Preset/index.html",revision:"a5cd90f88d90e1aca7721b038583cec8"},{url:"10.runtime(1)/index.html",revision:"213b9b789fd4908bbc77adbe18947dd9"},{url:"11.runtime(2)/index.html",revision:"8b327ba96bdc2549e3c9576b93870b9d"},{url:"12.runtime(3)/index.html",revision:"32f7826fb520314ed5ad9c7c805692df"},{url:"13.Babel项目管理/index.html",revision:"e3b9c7d17d5fb46f0268816ec410a2ff"},{url:"14.转译器对比/index.html",revision:"1c4199832cd523e3c87869a5b74166c3"},{url:"404.html",revision:"1e0639c267b6ad311fd926060d19af4f"},{url:"article/index.html",revision:"8417ee593ca021b96d4ddb095924f473"},{url:"category/index.html",revision:"29807dd759f3aca0dca72eaefce397bb"},{url:"encrypt/index.html",revision:"d755a2a832e184083407d5a3a272bf8b"},{url:"index.html",revision:"d977074255cb0a9ba52bb955505365bf"},{url:"slide/index.html",revision:"e9f9401cd648c4b759e09cb52aeb207a"},{url:"star/index.html",revision:"f5bdd2207c21551c34af9b9eafe109d8"},{url:"tag/index.html",revision:"51d3ef2cb8ca357ad153d90fa8555503"},{url:"timeline/index.html",revision:"94f6cfddd1076548e701315a263277be"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});