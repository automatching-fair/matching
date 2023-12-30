let rowCounter = 1;
let columnCounter = 3;

function addColumn() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var headerRow = table.rows[0];
  var newHeaderCell = document.createElement("td");
  var newHeaderNumber = document.createTextNode(columnCounter);
  newHeaderCell.appendChild(newHeaderNumber);
  headerRow.appendChild(newHeaderCell);
  columnCounter++;

  for (var i = 1; i < rowCount; i++) {
    var cell = table.rows[i].insertCell(-1);
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    cell.appendChild(input);
    handleInput(input); // Assign event handler to the newly added input field
  }
}

function addRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var row = table.insertRow(rowCount);
  rowCounter++; // 행이 추가되기 전에 증가시켜야 올바른 순서로 값이 채워집니다.

  for (var i = 0; i < columnCounter; i++) {
    var cell = row.insertCell(i);
    if (i === 0) {
      cell.innerHTML = rowCounter; // 이제 행을 추가한 후에 값을 할당합니다.
    } else {
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      cell.appendChild(input);
      handleInput(input); // Assign event handler to the newly added input field
    }
  }
}

function handleInput(input) {
  input.addEventListener('input', function() {
    var text = input.value;
    var numbers = text.split(',');

    input.value = ''; // Clear the input field

    // Insert each number in the cell
    for (var i = 0; i < numbers.length; i++) {
      input.value += numbers[i].trim();

      if (i !== numbers.length - 1) {
        input.value += ', ';
      }
    }
  });
}
