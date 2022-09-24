// pre Coding : https://codepen.io/sanghunoh/pen/NWMamzX

const source =
  'Now -- as Russia\'s economic isolation in the wake of its invasion of Ukraine pushes it closer to Beijing -- that is changing, with fanfare. The bridge would "create a new channel connecting the two countries," Xi said during the call, which took place on his 69th birthday. "The Chinese side stands ready to work with the Russian side to push for steady and long-term development of practical bilateral cooperation," Xi said.';

// 구분값들(.) 통한 문장들을 배열로 만듬.
function splitTermsToArray(terms) {
  const regexp = /(?<=[^0-9])[\.]/;
  const arrays = terms.split(regexp);
  arrays.forEach((element, index) => {
    arrays[index] = arrays[index].trim();
    if (arrays[index].length <= 0) {
      arrays.splice(index, 1);
    }
  });
  return arrays;
}

let arrays = splitTermsToArray(source);

// 문장 갯수 구하기
function measureTermsSize(terms) {
  return splitTermsToArray(terms).length - 1;
}

const termlength = measureTermsSize(source);
console.log();
