// JSON 데이터, 실제로는 외부 API에서 데이터를 불러오거나 외부 .json 파일을 사용할 수 있습니다.
function readJsonFromFile(filePath) {
    // Fetch the list of JSON file names from the "fileList.json" file
    fetch(filePath)
        .then((response) => response.json())
        .then((data) => {
            const files = data.files;
            fillTable(files);
        })
        .catch((error) => {
            console.error("Error fetching fileList.json:", error);
        });
}
//페이지 로드 시 테이블 채우기
window.onload = function () {
    filePath = `Useful Infor - IT Tech List.json`;
    readJsonFromFile(filePath);
};


function fillTable(data) {
  // 컬럼 이름 추가
  let header = document.getElementById("data-header");
  data.schema.fields.forEach(field => {
    const th = document.createElement("th");
    th.innerText = field.name;
    header.appendChild(th);
  });

  // 각 행 추가
  let body = document.getElementById("data-body");
  data.data.forEach(row => {
    const tr = document.createElement("tr");

    // 각 셀 추가
    data.schema.fields.forEach(field => {
      const td = document.createElement("td");
      
      if (row[field.name]) {
        const toggleButton = document.createElement("button");
        toggleButton.classList.add("btn", "btn-secondary", "btn-sm");
        toggleButton.setAttribute("type", "button");
        toggleButton.setAttribute("data-toggle", "button");
        toggleButton.setAttribute("aria-pressed", "false");
        toggleButton.setAttribute("autocomplete", "off");
        toggleButton.innerText = row[field.name];
        td.appendChild(toggleButton);
      }
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });
}
