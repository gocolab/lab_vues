<template>
  <div class="row">
    <div class="col-6">
      <div class="scrollspy-example bg-light p-3 rounded-2 border">
        <template v-for="(term, index) in states.source" :key="index">
          <span
            :class="states.currentTermNumber === index ? termMarkClass : ''"
          >
            {{ term }}
          </span>
        </template>
      </div>
      <div class="scrollspy-example p-3 rounded-2 border" @click="chooseTerm">
        <template v-for="(term, index) in states.byFirst" :key="index">
          <span
            :class="states.currentTermNumber === index ? termMarkClass : ''"
          >
            {{ term }}
          </span>
        </template>
      </div>
      <div class="scrollspy-example p-3 rounded-2 border" @click="chooseTerm">
        <template v-for="(term, index) in states.bySecond" :key="index">
          <span
            :class="states.currentTermNumber === index ? termMarkClass : ''"
          >
            {{ term }}
          </span>
        </template>
      </div>
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
  currentTermNumber: 0, // 번역 위치
});

// 구분값들(.) 통한 문장들을 배열로 만듬.
function splitTermsToArray(terms) {
  const regexp = /(?<=[^0-9])[\.]/;
  const arrays = terms.split(regexp);
  arrays.forEach((element, index) => {
    arrays[index] = arrays[index].trim();
    // delete term with null
    if (arrays[index].length <= 0) {
      arrays.splice(index, 1);
    } else {
      // add '.'
      arrays[index] = arrays[index] + ". ";
    }
  });
  return arrays;
}

function splitAllTermsToArray() {
  states.source = splitTermsToArray(stores.translatestates.source);
  states.byFirst = splitTermsToArray(stores.translatestates.byFirst);
  states.bySecond = splitTermsToArray(stores.translatestates.bySecond);
}
// 변수 선언
const termMarkClass = "bg-primary  text-white";
let termArraySize = measureTermsSize(stores.translatestates.source); // 문장 갯수
let lastChar = "";

// 문장 갯수 구하기
function measureTermsSize(terms) {
  return splitTermsToArray(terms).length - 1;
}

// 작성 문장 표시 초기화
function initial() {
  splitAllTermsToArray();
}

onMounted(() => {
  initial();
});

// 작성 글 마지막 글자 확인
function getLastChar(terms) {
  const charactor = terms.slice(-1);
  return charactor;
}

// 입력 시 사용
function writeTranslatingTerms(event) {
  const keyboardCode = event.code;
  // console.log(
  //   `KeyboardEvent: key='${event.key}' | code='${event.code}' | location=${event.location}`
  // );
  switch (keyboardCode) {
    case 190: // Period - keypress event
    case "Period": // Period - keydown event
      if (states.currentTermNumber <= termArraySize) {
        states.currentTermNumber++;
      } else {
        // 번역 대상 글보다 많은 경우 '.' 입력 취소;
        event.preventDefault();
        // ToDo 번역 완료 메세지 표시(save 여부 표시)
      }
      break;
    case "Backspace": // backspace - keypress event
      lastChar = getLastChar(states.byMe);
      console.log(`lastChar : ${lastChar}`);
      if ((lastChar == ".") & (states.currentTermNumber > 0)) {
        states.currentTermNumber--;
      }
      break;
  }
  // Event 처리 완료 후 html에 적용됨, 현재 입력한 값은 변수에 적용되지 않음.
}
function moveTranslatingTerms() {}

// 번역된 글 중 선택해 작성 글에 넣기
function chooseTerm(event) {
  const element = event.target;
  const classname = element.className;
  if (classname.includes(termMarkClass)) {
    states.byMe = states.byMe + element.textContent;
    states.currentTermNumber++;
  }
}
</script>

<style scoped>
.scrollspy-example {
  height: 200px;
  margin-bottom: 0.5rem;
  overflow: auto;
}
</style>
