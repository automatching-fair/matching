let rowCounter = 2;
let columnCounter = 4;

function addColumn() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var headerRow = table.rows[0];
  var newHeaderCell = document.createElement("td");
  var newHeaderNumber = document.createTextNode(columnCounter);
  newHeaderCell.appendChild(newHeaderNumber);
  headerRow.appendChild(newHeaderCell);
  columnCounter++;

  for (var i = 0; i < rowCount; i++) {
    var cell = table.rows[i].insertCell(-1);
    if (i === 1) {
      cell.innerHTML = '<input type="number">';
    } else {
      cell.innerHTML = '';
    }
  }
}

function addRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var row = table.insertRow(rowCount);
  for (var i = 0; i < columnCounter; i++) {
    var cell = row.insertCell(i);
    if (i === 0) {
      cell.innerHTML = rowCounter;
      rowCounter++;
    } else {
      cell.innerHTML = '<input type="number">';
    }
  }
}
