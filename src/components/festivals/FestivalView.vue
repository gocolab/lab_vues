<template>
  <div class="d-flex justify-content-between">
    <div class="h3">
      {{ states.detailCommon.title }}
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="
        $router.push({
          name: 'FestivalList',
        })
      "
    >
      To List
    </button>
  </div>
  <div class="d-flex align-items-center" :class="states.spiner_status">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="false"></div>
  </div>

  <div class="row">
    <div class="col-6">
      <table class="table">
        <tbody>
          <tr>
            <td class="">시작일</td>
            <td class="h6">{{ states.detailIntro.eventstartdate }}</td>
          </tr>
          <tr>
            <td class="">종료일</td>
            <td class="h6">{{ states.detailIntro.eventenddate }}</td>
          </tr>
          <tr>
            <td class="">연락처</td>
            <td class="h6">{{ states.detailCommon.tel }}</td>
          </tr>
          <tr>
            <td class="">지역</td>
            <td class="h6">{{ states.detailCommon.addr1 }}</td>
          </tr>
          <tr>
            <td class="text-nowrap">상세 정보</td>
            <td class="h6">
              <div>{{ states.detailCommon.overview }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-6">
      <img
        alt=""
        class="rounded img-fluid"
        :src="states.detailCommon.firstimage"
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { inject, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const states = reactive({
  spiner_status: "invisible",
  detailCommon: {},
  detailIntro: {},
});

const serviceKey = "";

//  행사상세정보조회
function getDetailCommon() {
  // console.log(
  //   `getDetailCommon() - route.params : ${JSON.stringify(route.params)}`
  // );

  const contentid = route.params.contentid;
  const contenttypeid = route.params.contenttypeid;
  const params = {
    serviceKey: serviceKey,
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    defaultYN: "Y",
    firstImageYN: "Y",
    areacodeYN: "Y",
    catcodeYN: "Y",
    addrinfoYN: "Y",
    mapinfoYN: "Y",
    overviewYN: "Y",
    contentId: contentid,
    contentTypeId: contenttypeid,
  };
  states.spiner_status = "visible";

  axios
    .get(
      "https://apis.data.go.kr/B551011/KorService/detailCommon", //  행사상세정보조회
      { params }
    )
    .then(function (response) {
      const datas = response.data.response;
      // console.log(`axios : ${JSON.stringify(datas)}`);
      if (datas.header.resultCode == "0000") {
        states.detailCommon = { ...datas.body.items.item[0] };
        // console.log(`axios : ${JSON.stringify(states.detailCommon)}`);
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
      states.spiner_status = "invisible";
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error);
      states.spiner_status = "invisible";
    });
}

//  소개정보조회
function getDetailIntro() {
  const contentid = route.params.contentid;
  const contenttypeid = route.params.contenttypeid;
  const params = {
    serviceKey: serviceKey,
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    contentId: contentid,
    contentTypeId: contenttypeid,
  };

  axios
    .get("https://apis.data.go.kr/B551011/KorService/detailIntro", { params })
    .then(function (response) {
      const datas = response.data.response;
      // console.log(`axios : ${JSON.stringify(datas)}`);
      if (datas.header.resultCode == "0000") {
        states.detailIntro = { ...datas.body.items.item[0] };
        // console.log(`axios : ${JSON.stringify(states.detailIntro)}`);
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
      states.spiner_status = "invisible";
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error);
      states.spiner_status = "invisible";
    });
}

onMounted(() => {
  getDetailCommon();
  getDetailIntro();
});
</script>

<style></style>
