import{a as r}from"./index.becf6c0c.js";import{d as p,e as u,c as h,b as t,t as i,n as v,F as f,o as b,l as g}from"./index.19792834.js";const y={class:"d-flex justify-content-between"},C={class:"h3"},Y=t("strong",null,"Loading...",-1),I=t("div",{class:"spinner-border ms-auto",role:"status","aria-hidden":"false"},null,-1),N=[Y,I],S={class:"row"},w={class:"col-6"},x={class:"table"},B=t("td",{class:""},"\uC2DC\uC791\uC77C",-1),T={class:"h6"},k=t("td",{class:""},"\uC885\uB8CC\uC77C",-1),L={class:"h6"},M=t("td",{class:""},"\uC5F0\uB77D\uCC98",-1),j={class:"h6"},z=t("td",{class:""},"\uC9C0\uC5ED",-1),A={class:"h6"},E=t("td",{class:"text-nowrap"},"\uC0C1\uC138 \uC815\uBCF4",-1),K={class:"h6"},F={class:"col-6"},O=["src"],R={__name:"FestivalView",setup($){const l=g(),s=p({spiner_status:"invisible",detailCommon:{},detailIntro:{}}),c="BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==";function _(){const a=l.params.contentid,n=l.params.contenttypeid,d={serviceKey:c,MobileOS:"ETC",MobileApp:"AppTest",_type:"json",defaultYN:"Y",firstImageYN:"Y",areacodeYN:"Y",catcodeYN:"Y",addrinfoYN:"Y",mapinfoYN:"Y",overviewYN:"Y",contentId:a,contentTypeId:n};s.spiner_status="visible",r.get("https://apis.data.go.kr/B551011/KorService/detailCommon",{params:d}).then(function(e){const o=e.data.response;o.header.resultCode=="0000"?s.detailCommon={...o.body.items.item[0]}:alert(`${JSON.stringify(o.header)}`),s.spiner_status="invisible"}).catch(function(e){console.log(e),s.spiner_status="invisible"})}function m(){const a=l.params.contentid,n=l.params.contenttypeid,d={serviceKey:c,MobileOS:"ETC",MobileApp:"AppTest",_type:"json",contentId:a,contentTypeId:n};r.get("https://apis.data.go.kr/B551011/KorService/detailIntro",{params:d}).then(function(e){const o=e.data.response;o.header.resultCode=="0000"?s.detailIntro={...o.body.items.item[0]}:alert(`${JSON.stringify(o.header)}`),s.spiner_status="invisible"}).catch(function(e){console.log(e),s.spiner_status="invisible"})}return u(()=>{_(),m()}),(a,n)=>(b(),h(f,null,[t("div",y,[t("div",C,i(s.detailCommon.title),1),t("button",{type:"submit",class:"btn btn-primary",onClick:n[0]||(n[0]=d=>a.$router.push({name:"FestivalList"}))}," To List ")]),t("div",{class:v(["d-flex align-items-center",s.spiner_status])},N,2),t("div",S,[t("div",w,[t("table",x,[t("tbody",null,[t("tr",null,[B,t("td",T,i(s.detailIntro.eventstartdate),1)]),t("tr",null,[k,t("td",L,i(s.detailIntro.eventenddate),1)]),t("tr",null,[M,t("td",j,i(s.detailCommon.tel),1)]),t("tr",null,[z,t("td",A,i(s.detailCommon.addr1),1)]),t("tr",null,[E,t("td",K,[t("div",null,i(s.detailCommon.overview),1)])])])])]),t("div",F,[t("img",{alt:"",class:"rounded img-fluid",src:s.detailCommon.firstimage},null,8,O)])])],64))}};export{R as default};