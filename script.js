function addColumn() {
  var table = document.getElementById("myTable");
  var headerRow = document.getElementById("headerRow");
  var rowCount = table.rows.length;

  var newHeaderCell = document.createElement("td");
  var newHeaderNumber = document.createTextNode(rowCount + 1);
  newHeaderCell.appendChild(newHeaderNumber);
  headerRow.appendChild(newHeaderCell);

  for (var i = 0; i < rowCount; i++) {
    var cell = table.rows[i].insertCell(-1);
    cell.innerHTML = '<input type="number">';
  }
}

function confirmExpansion() {
  var sessionInput = document.getElementById("sessionInput").value;
  var table = document.getElementById("myTable");
  var currentColumnCount = table.rows[0].cells.length - 3; // 첫 번째 줄 숫자 칸 제외

  if (sessionInput > currentColumnCount) {
    var expandBy = sessionInput - currentColumnCount;
    for (var i = 0; i < expandBy; i++) {
      addColumn();
    }
  } else {
    alert("현재보다 큰 숫자를 입력하세요.");
  }
}
