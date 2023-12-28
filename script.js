function addRow() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = '<input type="number">';
  }
}

function expandTable() {
  var sessionInput = document.getElementById("sessionInput").value;
  var table = document.getElementById("myTable");
  var currentRowCount = table.rows.length;

  if (sessionInput > 0) {
    var expandBy = sessionInput - currentRowCount + 1;
    for (var i = 0; i < expandBy; i++) {
      addRow();
    }
  } else {
    alert("올바른 숫자를 입력하세요.");
  }
}
