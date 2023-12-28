function addColumn() {
  var table = document.getElementById("myTable");
  var headerRow = table.rows[0];
  var rowCount = table.rows.length;

  var newHeaderCell = document.createElement("td");
  var newHeaderNumber = document.createTextNode(rowCount);
  newHeaderCell.appendChild(newHeaderNumber);
  headerRow.appendChild(newHeaderCell);

  for (var i = 1; i < rowCount; i++) {
    var cell = table.rows[i].insertCell(-1);
    cell.innerHTML = '<input type="number">';
  }
}

function addRow() {
  var sessionInput = document.getElementById("sessionInput").value;
  var table = document.getElementById("myTable");
  var currentRowCount = table.rows.length;

  if (sessionInput > 0) {
    var expandBy = sessionInput;
    for (var i = 0; i < expandBy; i++) {
      var row = table.insertRow(-1);
      for (var j = 0; j < table.rows[0].cells.length; j++) {
        var cell = row.insertCell(j);
        if (j === 0) {
          cell.innerHTML = currentRowCount + i;
        } else {
          cell.innerHTML = '<input type="number">';
        }
      }
    }
  } else {
    alert("올바른 숫자를 입력하세요.");
  }
}
