let rowCounter = 2;
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

  for (var i = 0; i < columnCounter; i++) {
    var cell = row.insertCell(i);
    if (i === 0) {
      if (rowCount === 0) {
        cell.innerHTML = rowCounter; // 첫 번째 행을 추가할 때 2로 설정합니다.
      } else {
        cell.innerHTML = rowCounter + rowCount; // 이후 행을 추가할 때 rowCounter와 rowCount를 더하여 값을 할당합니다.
      }
    } else {
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      cell.appendChild(input);
      handleInput(input); // 새로운 입력 필드에 이벤트 핸들러를 할당합니다.
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
