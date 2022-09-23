// 구분값들(.) 통한 문장들을 배열로 만듬.
function splitTermsToArray(terms) {
  const regexp = /(?<=[^0-9])[\.]/;
  const arrays = terms.split(regexp);
  return arrays;
}

// 작성 중인 문단 위치 표시 위해 Html Tag로 쌈.
function wrapBrightTag(text) {
  const brightWithTag = `<span class='text-success'>${text}</span>`;
  return brightWithTag;
}

// 작성 중인 문단 위치 표시
function currentTermMark(arrayTerms, index) {
  const arrays = arrayTerms;
  arrays[index] = wrapBrightTag(arrays[index]);
  return arrays;
}

// 작성 중인 문장 위치 표시한 String 반환
function currentTermWithMark(terms) {
  const arrays = splitTermsToArray(terms);
  const arrayswithmark = currentTermMark(arrays, 2);
  const stringwithmark = arrayswithmark.join(".");
  return stringwithmark;
}

const resource = "doc01s. doc,02s. doc03s. doc-04s.";
const result = currentTermWithMark(resource);
console.log();
