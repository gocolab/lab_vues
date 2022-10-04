<template>
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
        <label for="festivalName">축제명</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventstartdate"
          v-model="states.detailIntro.eventstartdate"
        />
        <label for="eventstartdate">시작일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventenddate"
          v-model="states.detailIntro.eventenddate"
        />
        <label for="eventenddate">종료일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="tel"
          v-model="states.detailCommon.tel"
        />
        <label for="tel">연락처</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="addr1"
          v-model="states.detailCommon.addr1"
        />
        <label for="addr1">지역</label>
      </div>
      <div class="form-floating mb-3">
        <label for="overview">상세 정보</label>
        <textarea
          name=""
          id="overview"
          cols="30"
          rows="10"
          readonly
          v-model="states.detailCommon.overview"
        >
        </textarea>
      </div>
    </div>
    <div class="col-6">
      <img v-src="states.detailCommon.firstimage" alt="" />
      <img v-src="states.detailCommon.firstimage2" alt="" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { inject, onMounted, reactive } from "vue";
const states = reactive({
  detailCommon: {},
  detailIntro: {},
});
function getDetailContent() {
  // console.log(
  //   `getDetailContent() - contentId : ${$route.query.contentId}, ${$route.query.contentTypeId}`
  // );

  const contentId = "293084"; //$route.query.contentId;
  const contentTypeId = "15"; //$route.query.contentTypeId;
  const params = {
    // serviceKey: "<your service Key>",
    serviceKey:
      "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==",
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
    contentId: contentId,
    contentTypeId: contentTypeId,
  };
  axios
    .get(
      "https://apis.data.go.kr/B551011/KorService/detailCommon", //  행사상세정보조회
      { params }
    )
    .then(function (response) {
      const datas = response.data.response;
      if (datas.header.resultCode == "0000") {
        // console.log(`axios : ${JSON.stringify(datas)}`);
        states.detailCommon = { ...datas.items.item };
        console.log(`axios : ${states.detailCommon}`);
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error.toJSON());
    });
}
onMounted(() => {
  getDetailContent();
});
</script>

<style></style>
