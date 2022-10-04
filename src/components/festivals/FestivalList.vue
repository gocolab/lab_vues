<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">축제명</th>
        <th scope="col">시작일</th>
        <th scope="col">종료일</th>
        <th scope="col">연락처</th>
        <th scope="col">지역</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <template v-for="(item, index) in states.currentPageList" :key="index">
        <tr
          @click="
            $router.push({
              name: 'FestivalView',
              query: {
                contentId: item.contentId,
                contentTypeId: item.contentTypeId,
              },
            })
          "
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.eventstartdate }}</td>
          <td>{{ item.eventenddate }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.addr1 }}</td>
        </tr>
      </template>
    </tbody>
  </table>

  <div class="d-flex align-items-center" :class="states.spiner_status">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="false"></div>
  </div>

  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <template v-for="(number, index) in states.totalPageNo" :key="index">
        <template v-if="number <= 4">
          <li class="page-item">
            <a class="page-link" @click="getCurrentPageInfoFromApi(number)">{{
              number
            }}</a>
          </li>
        </template>
      </template>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";
import moment from "moment";
import axios from "axios";

const states = reactive({
  numOfRows: 10,
  currentPageNo: 1,
  arrange: "C",
  totalCount: 0,
  totalPageNo: 0,
  currentPageList: [],
  spiner_status: "visible",
});

function getFromDayWithFormat() {
  const now = new Date();
  const formats = "YYYYMMDD";
  const fromdayWithFormat = moment(now).format(formats);
  // console.log(
  //   ` getFromDayWithFormat() - fromdayWithFormat : ${fromdayWithFormat}`
  // );
  return fromdayWithFormat;
}

// call api with current page or
function getCurrentPageInfoFromApi(currentPageNo = 1) {
  states.currentPageNo = currentPageNo;
  const eventStartDate = getFromDayWithFormat();
  // GET request for remote image in node.js
  // Refer API : https://www.data.go.kr/iim/api/selectAPIAcountView.do
  const params = {
    // serviceKey: "<your service Key>",
    serviceKey:
      "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==",
    numOfRows: states.numOfRows, // 한페이지결과수
    pageNo: states.currentPageNo, // 페이지번호
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    listYN: "Y",
    arrange: states.arrange, // 정렬구분(A=제목순, B=조회순, C=수정일순, D=생성일순)대표이미지가반드시있는정렬(O=제목순, P=조회순, Q=수정일순, R=생성일순)
    eventStartDate: eventStartDate, // 행사시작일(형식 :YYYYMMDD)
  };
  // console.log(
  //   `getCurrentPageInfoFromApi() - params : ${JSON.stringify(params)}`
  // );
  states.spiner_status = "visible";
  axios
    .get(
      "https://apis.data.go.kr/B551011/KorService/searchFestival", // 행사정보조회
      { params }
    )
    .then(function (response) {
      const datas = response.data.response;
      console.log(`axios : ${datas.header.resultCode == "0000"}`);

      if (datas.header.resultCode == "0000") {
        // console.log(`axios : ${JSON.stringify(datas)}`);
        states.totalCount = datas.body.totalCount;
        states.currentPageList = datas.body.items.item;
        states.totalPageNo = Math.ceil(states.totalCount / states.numOfRows);
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
      states.spiner_status = "invisible";

      // return results;
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error);
    });
}

function changeNumOfRows(numOfRows) {
  states.numOfRows = numOfRows;
  // getCurrentPageInfoFromApi();
}

onMounted(() => {
  getCurrentPageInfoFromApi();
});
</script>

<style></style>
