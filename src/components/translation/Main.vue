<template>
  <div class="row">
    <div class="col-6">
      <div
        class="scrollspy-example bg-light p-3 rounded-2 border"
        v-html="states.source"
      ></div>
      <div
        class="scrollspy-example p-3 rounded-2 border"
        v-html="states.byFirst"
      ></div>
      <div
        class="scrollspy-example p-3 rounded-2 border"
        v-html="states.bySecond"
      ></div>
    </div>
    <div class="col-6">
      <div class="input-group">
        <textarea
          class="form-control"
          rows="25"
          @keydown="writeTranslatingTerms"
          @click="moveTranslatingTerms"
          placeholder="Choose a term to translate..."
          v-model="states.byMe"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive } from "vue";
const stores = inject("stores");

const states = reactive({
  source: "",
  byFirst: "",
  bySecond: "",
  byMe: "",
});

// 구분값들(.) 통한 문장들을 배열로 만듬.
function splitTermsToArray(terms) {
  const regexp = /(?<=[^0-9])[\.]/;
  const arrays = terms.split(regexp);
  return arrays;
}

// 작성 중인 문단 위치 표시 위해 Html Tag로 쌈.
function wrapBrightTag(text) {
  const brightWithTag = `<span class='bg-primary text-white' ref="Btn" @click='chooseTerm(this)'>${text}.</span>`;
  // this.refs.Btn.click();
  return brightWithTag;
}

// 작성 중인 문단 위치 표시
function currentTermMark(arrayTerms, index) {
  const arrays = arrayTerms;
  arrays[index] = wrapBrightTag(arrays[index]);
  return arrays;
}

// 작성 중인 문장 위치 표시한 String 반환
function currentTermWithMark(terms, index) {
  const arrays = splitTermsToArray(terms);
  const arrayswithmark = currentTermMark(arrays, index);
  const stringwithmark = arrayswithmark.join(".");
  return stringwithmark;
}

function moveCurrentTermWithMark(index) {
  states.source = currentTermWithMark(stores.translatestates.source, index);
  states.byFirst = currentTermWithMark(stores.translatestates.byFirst, index);
  states.bySecond = currentTermWithMark(stores.translatestates.bySecond, index);
}
// 변수 선언
let currentTermNumber = 0; // 번역 위치
let termArraySize = 0; // 문장 갯수
let lastChar = "";

// 문장 갯수 구하기
function measureTermsSize(terms) {
  return splitTermsToArray(terms).length - 1;
}

// 작성 문장 표시 초기화
function initial() {
  moveCurrentTermWithMark(currentTermNumber);
  termArraySize = measureTermsSize(stores.translatestates.source);
}

onMounted(() => {
  initial();
});

// 작성 글 마지막 글자 확인
function getLastChar(terms) {
  const charactor = terms.slice(-1);
  return charactor;
}

// 2byte 문자형식 입력 시 사용
function inputEventValue(event) {
  console.log(`inputEventValue : event.targt.value ${event.targt.value}`);
}
function writeTranslatingTerms(event) {
  const keyCode = event.keyCode;
  // console.log(`keyCode : ${keyCode}`);
  switch (keyCode) {
    case 190: // Period
    case 46: // Period
      if (currentTermNumber <= termArraySize) {
        currentTermNumber++;
        moveCurrentTermWithMark(currentTermNumber);
      } else {
        // 번역 대상 글보다 많은 경우 '.' 입력 취소;
        event.preventDefault();
      }
      break;
    case 8: // backspace
      lastChar = getLastChar(states.byMe);
      console.log(`lastChar : ${lastChar}`);
      if ((lastChar == ".") & (currentTermNumber > 0)) {
        currentTermNumber--;
        moveCurrentTermWithMark(currentTermNumber);
      }
      break;
  }
  // Event 처리 완료 후 html에 적용됨, 현재 입력한 값은 변수에 적용되지 않음.
  console.log(
    `writeTranslatingTerms : keyCode ${keyCode}, getLastChar ${getLastChar(
      states.byMe
    )}, currentNum ${currentTermNumber}`
  );
}
function moveTranslatingTerms() {}

// 번역된 글 중 선택해 작성 글에 넣기
function chooseTerm(event) {
  console.log(`chooseTerm : ${event.target.text()}`);
  states.byMe = states.byMe + event.target.text();
}
</script>

<style scoped>
.scrollspy-example {
  height: 200px;
  margin-bottom: 0.5rem;
  overflow: auto;
}
</style>
