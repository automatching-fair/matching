function addColumn() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  for (var i = 0; i < rowCount; i++) {
    var cell = table.rows[i].insertCell(-1);
    cell.innerHTML = '<input type="number">';
  }
}

function expandTable() {
  var sessionInput = document.getElementById("sessionInput").value;
  var table = document.getElementById("myTable");
  var currentColumnCount = table.rows[0].cells.length - 3; // 첫번째 줄 숫자 칸 제외

  if (sessionInput > currentColumnCount) {
    var expandBy = sessionInput - currentColumnCount;
    for (var i = 0; i < expandBy; i++) {
      addColumn();
    }
  } else {
    alert("현재보다 작거나 같은 숫자를 입력하세요.");
  }
}
