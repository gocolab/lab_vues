<template>
  <div class="row justify-content-between">
    <div class="col-5 row justify-content-start">
      <div class="col-4">
        <input type="date" class="form-control" v-model="states.fromday" />
      </div>
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="getDataFromApi">
          Get Data from API
        </button>
        Totel : {{ states.totalCount }}
      </div>
    </div>
    <div class="col-7 row justify-content-end">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="검색어" />
        <button type="submit" class="btn btn-outline-primary" @click="search">
          검색어
        </button>
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center" :class="states.spiner_status">
    <strong>Loading...</strong>
    <div class="spinner-border ms-auto" role="status" aria-hidden="false"></div>
  </div>

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
              params: {
                contentid: item.contentid,
                contenttypeid: item.contenttypeid,
              },
            })
          "
        >
          <th scope="row">
            {{ index + 1 + states.currentPageNo * states.numOfRow }}
          </th>
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
        <template v-if="number <= 4">
          <li class="page-item">
            <a class="page-link" @click="getCurrentPageWithItemList(index)">{{
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
import { inject, onMounted, reactive, onUnmounted } from "vue";
import axios from "axios";

let states = reactive({
  totalCount: 0,
  totalPageNo: 0,
  numOfRow: 10,
  itemList: [],
  currentPageList: [],
  currentPageNo: 0,
  spiner_status: "invisible",
  fromday: "",
});

const stores = inject("stores");
// check null with object
function isEmptyObject(obj) {
  const condition = Object.keys(obj).length === 0 && obj.constructor === Object;
  // console.log(`condition : ${condition}`);
  return condition;
}

// console.log(`stores.festivalStates : ${stores.festivalStates}`);
if (!isEmptyObject(stores.festivalStates)) {
  // console.log(
  //   `states - ${states.itemList.length}, ${states.currentPageList.length}, ${states.fromday}`
  // );
  states = { ...stores.festivalStates };
}

function getFromDayWithFormat(plusDate = 20) {
  const date = new Date();
  date.setDate(date.getDate() + plusDate);
  const fromdayWithFormat = date.toISOString().split("T")[0];
  // console.log(
  //   ` getFromDayWithFormat() - fromdayWithFormat : ${fromdayWithFormat}`
  // );
  return fromdayWithFormat;
}

const serviceKey =
  "BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg==";
// call api with current page or
function getDataFromApi(pageNo = 1, numOfRow = 1) {
  // GET request for remote image in node.js
  // Refer API : https://www.data.go.kr/iim/api/selectAPIAcountView.do
  let params = {
    serviceKey: serviceKey,
    numOfRows: numOfRow, // 한페이지결과수
    pageNo: pageNo, // 페이지번호
    MobileOS: "ETC",
    MobileApp: "AppTest",
    _type: "json",
    listYN: "Y",
    arrange: "C", // 정렬구분(A=제목순, B=조회순, C=수정일순, D=생성일순)대표이미지가반드시있는정렬(O=제목순, P=조회순, Q=수정일순, R=생성일순)
    eventStartDate: states.fromday, // 행사시작일(형식 :YYYYMMDD)
  };
  // console.log(
  //   `getDataFromApi() - params : ${JSON.stringify(params)}`
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
        getAllDatafromAPI(params);
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
      // return results;
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error);
      states.spiner_status = "invisible";
    });
}

function getAllDatafromAPI(params) {
  states.spiner_status = "visible";
  params.numOfRows = states.totalCount;
  axios
    .get(
      "https://apis.data.go.kr/B551011/KorService/searchFestival", // 행사정보조회
      { params }
    )
    .then(function (response) {
      const datas = response.data.response;
      console.log(`axios : ${datas.header.resultCode == "0000"}`);

      if (datas.header.resultCode == "0000") {
        // console.log(`getAllDatafromAPI() : ${JSON.stringify(datas)}`);
        states.totalCount = filteringAllDataWithWords(datas.body.items.item);
        states.totalPageNo = Math.ceil(states.totalCount / states.numOfRow);
        getCurrentPageWithItemList();
      } else {
        alert(`${JSON.stringify(datas.header)}`);
      }
      states.spiner_status = "invisible";

      // return results;
    })
    .catch(function (error) {
      // https://axios-http.com/docs/handling_errors
      console.log(error);
      states.spiner_status = "invisible";
    });
}

function filteringAllDataWithWords(items) {
  states.itemList = items.filter((item, index) => {
    return item.title.includes("축제");
  });
  const items_length = states.itemList.length;

  return items_length;
}
function changeNumOfRow(numOfRow) {
  return numOfRow;
}

function getCurrentPageWithItemList(pageNo = 0) {
  states.currentPageNo = pageNo;
  const index_start = pageNo * states.numOfRow;
  const index_end = index_start + states.numOfRow;
  console.log(
    `getCurrentPageWithItemList() index_start: ${index_start}, index_end : ${index_end}`
  );
  let currentRows = [];
  states.itemList.forEach((item, index) => {
    if (index >= index_start && index < index_end) {
      console.log(`currentRows.push item: ${item.title}`);
      currentRows.push(item);
    }
  });
  states.currentPageList = currentRows;
  // console.log(
  //   `states.currentPageList[index_end].title: ${states.currentPageList[index_end].title}`
  // );
}

onMounted(() => {
  // console.log(
  //   `onMounted() : ${states.itemList.length}, ${stores.festivalStates.itemList.length}`
  // );

  states.fromday = getFromDayWithFormat();
  states.numOfRows = changeNumOfRow(10);
});

onUnmounted(() => {
  stores.festivalStates = { ...states };
  // console.log(
  //   `onUnmounted() : ${states.itemList.length}, ${stores.festivalStates.itemList.length}`
  // );
});
</script>

<style></style>
