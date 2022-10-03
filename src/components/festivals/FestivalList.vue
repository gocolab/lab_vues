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
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <template v-for="(number, index) in states.totalPageNo" :key="index">
        <li class="page-item">
          <a class="page-link" @click="chooseCurrentPage(number)">{{
            number
          }}</a>
        </li>
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
  totalPageNo: 0, // totalCount / numOfRows
  currentPageList: [],
});

function getFromDayWithFormat() {
  const now = new Date();
  const formats = "YYYYMMDD";
  const fromdayWithFormat = moment(now).format(formats);
  return fromdayWithFormat;
}
function getCurrentPageInfoFromApi(currentPageNo = 1) {
  states.currentPageNo = currentPageNo;
  const eventStartDate = getFromDayWithFormat();
  // GET request for remote image in node.js
  // Refer API : https://www.data.go.kr/iim/api/selectAPIAcountView.do
  axios({
    method: "get",
    url: "[https://apis.data.go.kr](https://apis.data.go.kr)/B551011/KorService/searchFestival", // 행사정보조회
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*", // Could work and fix the previous problem, but not in all APIs
    },
    data: {
      serviceKey:
        "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D",
      numOfRows: states.numOfRows, // 한페이지결과수
      pageNo: states.currentPageNo, // 페이지번호
      MobileOS: "ETC",
      MobileApp: "AppTest",
      _type: "json",
      listYN: "Y",
      arrange: states.arrange, // 정렬구분(A=제목순, B=조회순, C=수정일순, D=생성일순)대표이미지가반드시있는정렬(O=제목순, P=조회순, Q=수정일순, R=생성일순)
      eventStartDate: eventStartDate, // 행사시작일(형식 :YYYYMMDD)
    },
  })
    .then(function (response) {
      console.log(`axios : ${response.data.body}`);
      return response.data.body;
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error.toJSON());
    });
}
function getTotalCountFromApi() {
  const datas = getCurrentPageInfoFromApi();
  console.log(`getTotalCountFromApi() : ${datas}`);
  // const totalCount = datas.totalCount;
  const totalCount = 43;
  return totalCount;
}
// page번호 선택
function chooseCurrentPage(currentPageNo = 1) {
  states.currentPageNo = currentPageNo;
  const datas = getCurrentPageInfoFromApi(states.currentPageNo);
  if (Array.isArray(datas)) {
    datas.forEach((element, index) => {
      // let item = {
      //   addr1: element.addr1,
      //   addr2: element.addr2,
      //   areacode: element.areacode,
      //   booktour: element.booktour,
      //   cat1: element.cat1,
      //   cat2: element.cat2,
      //   cat3: element.cat3,
      //   contentid: element.contentid,
      //   contenttypeid: element.contenttypeid,
      //   createdtime: element.createdtime,
      //   eventstartdate: element.eventstartdate,
      //   eventenddate: element.eventenddate,
      //   firstimage: element.firstimage,
      //   firstimage2: element.firstimage2,
      //   mapx: element.mapx,
      //   mapy: element.mapy,
      //   mlevel: element.mlevel,
      //   modifiedtime: element.modifiedtime,
      //   readcount: element.readcount,
      //   sigungucode: element.sigungucode,
      //   tel: element.tel,
      //   title: element.title,
      // };
      let item = { ...element };
      states.currentPageList.append(item);
    });
  } else {
    datas = [];
  }
}

function changeNumOfRows(numOfRows) {
  states.numOfRows = numOfRows;
  states.totalCount = getTotalCountFromApi();
  states.totalPageNo = Math.ceil(states.totalCount / states.numOfRows);
  // chooseCurrentPage();
}

onMounted(() => {
  changeNumOfRows(states.numOfRows);
});
</script>

<style></style>
