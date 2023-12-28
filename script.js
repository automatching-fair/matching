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
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var row = table.insertRow(rowCount);
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = row.insertCell(i);
    if (rowCount === 1) {
      cell.innerHTML = '<input type="number">';
    } else {
      cell.innerHTML = '';
    }
  }
}
