<template>
  <div>
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
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="festivalName"
          v-model="states.detailCommon.title"
        />
        <label class="form-label" for="festivalName">축제명</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventstartdate"
          v-model="states.detailIntro.eventstartdate"
        />
        <label class="form-label" for="eventstartdate">시작일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventenddate"
          v-model="states.detailIntro.eventenddate"
        />
        <label class="form-label" for="eventenddate">종료일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="tel"
          v-model="states.detailCommon.tel"
        />
        <label class="form-label" for="tel">연락처</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="addr1"
          v-model="states.detailCommon.addr1"
        />
        <label class="form-label" for="addr1">지역</label>
      </div>
      <div class="form mb-3">
        <label class="form-label" for="overview">상세 정보</label>
        <textarea
          name=""
          class="form-control"
          id="overview"
          rows="10"
          readonly
          v-model="states.detailCommon.overview"
        >
        </textarea>
      </div>
    </div>
    <div class="col-6">
      <img alt="" :src="states.detailCommon.firstimage" />
      <img alt="" :src="states.detailCommon.firstimage2" />
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

const serviceKey =
  "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==";

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
