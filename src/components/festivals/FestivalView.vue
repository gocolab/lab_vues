<template>
  <div class="row">
    <div class="col-6">
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="festivalName"
          value="2022 제9회 라틴아메리카축제"
        />
        <label for="festivalName">축제명</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventstartdate"
          value="20220915"
        />
        <label for="eventstartdate">시작일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="eventenddate"
          value="20220925"
        />
        <label for="eventenddate">종료일</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="tel"
          value="02-2241-6381,3,4"
        />
        <label for="tel">연락처</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          readonly
          class="form-control-plaintext"
          id="addr1"
          value="서울특별시 성북구 삼선동 1가 14"
        />
        <label for="addr1">지역</label>
      </div>
    </div>
    <div class="col-6">
      <img
        src="http://tong.visitkorea.or.kr/cms/resource/98/2843898_image2_1.jpg"
        alt=""
      />
      <img
        src="http://tong.visitkorea.or.kr/cms/resource/98/2843898_image3_1.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { inject, onMounted, reactive } from "vue";
const states = reactive({
  content: {},
});
function getDetailContent() {
  contentId = $router.query.contentId;
  contentTypeId = $router.query.contentTypeId;
  axios({
    method: "get",
    url: "https://apis.data.go.kr/B551011/KorService/detailIntro", //  행사상세정보조회
    data: {
      serviceKey:
        "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D",
      MobileOS: "ETC",
      MobileApp: "AppTest",
      _type: "json",
      contentId: contentId,
      contentTypeId: contentTypeId,
    },
  })
    .then(function (response) {
      return response.data.body;
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error.toJSON());
    });
}
onMounted(() => {
  const datas = getDetailContent();
  states.content = { ...datas.items.item };
});
</script>

<style></style>
