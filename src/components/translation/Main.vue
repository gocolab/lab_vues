<template>
  <div class="row">
    <div class="col-6">
      <div class="scrollspy-example bg-light p-3 rounded-2 border">
        {{ states.source }}
      </div>
      <div class="scrollspy-example p-3 rounded-2 border">
        {{ states.byFirst }}
      </div>
      <div class="scrollspy-example p-3 rounded-2 border">
        {{ states.bySecond }}
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
          v-model="states.source"
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

function splitStringToArray(str) {
  const regexp = /(?<=[^0-9])[\.]/;
  const array_list = str.split(regexp);
  array_list.forEach((element, index) => {
    array_list[index] = element + ".";
  });
  console.log(array_list);
  return array_list;
}

function wrapBrightTag(element) {
  const brightTag = `<span class='text-success'>${element}</span>`;
  return brightTag;
}

function currentLineMark(array, index) {
  array[index] = wrapBrightTag(array[index]);
}

function changeLineMark() {
  currentLineMark(states.source, currentLineNumber);
  currentLineMark(states.byFirst, currentLineNumber);
  currentLineMark(states.bySecond, currentLineNumber);
}
// 변수 선언
let currentLineNumber = 0;

function initial() {
  states.source = splitStringToArray(stores.translatestates.source);
  states.byFirst = splitStringToArray(stores.translatestates.byFirst);
  states.bySecond = splitStringToArray(stores.translatestates.bySecond);
}

onMounted(() => {
  initial();
  changeLineMark();
  console.log();
});

function writeTranslatingTerms(event) {
  const keyCode = event.keyCode;
  switch (keyCode) {
    case 190: // Period
      console.log(`keyCode : ${keyCode}`);
      break;
    case 8: // backspace
      console.log(`keyCode : ${keyCode}`);
      break;
  }
}
function moveTranslatingTerms() {}
</script>

<style scoped>
.scrollspy-example {
  height: 200px;
  margin-bottom: 0.5rem;
  overflow: auto;
}
</style>
