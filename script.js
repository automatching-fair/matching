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
      cell.innerHTML = rowCounter; 
    } else {
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      cell.appendChild(input);
      handleInput(input); 
    }
  }
  rowCounter++; // 이 코드를 추가합니다.
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

function startMatching2() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  var columnCount = table.rows[0].cells.length;

  var uniqueNumbers = [];
  var countMap = {};

  // 1번 행에서 중복되지 않은 숫자 찾기
  for (var i = 1; i < columnCount; i++) {
    var inputValue = table.rows[1].cells[i].querySelector('input').value;
    if (!countMap[inputValue]) {
      countMap[inputValue] = 1;
    } else {
      countMap[inputValue]++;
    }
  }

  for (var key in countMap) {
    if (countMap.hasOwnProperty(key) && countMap[key] === 1) {
      uniqueNumbers.push(key);
    }
  }

  // 중복되지 않은 숫자 처리
  if (uniqueNumbers.length === 1) {
    var a = uniqueNumbers[0];

    for (var i = 2; i < rowCount; i++) {
      var cellValue = table.rows[i].cells[1].querySelector('input').value;
      if (cellValue !== a) {
        table.rows[i].cells[1].querySelector('input').value = '';
      }
    }
  } else if (uniqueNumbers.length > 1) {
    var b = uniqueNumbers[0];

    for (var i = 2; i < rowCount; i++) {
      var cellValue = table.rows[i].cells[1].querySelector('input').value;
      if (cellValue !== b) {
        table.rows[i].cells[1].querySelector('input').value = '';
      }
    }
  } else {
    var min = Number.MAX_SAFE_INTEGER;

    for (var i = 2; i < rowCount; i++) {
      var cellValue = table.rows[i].cells[1].querySelector('input').value;
      if (parseInt(cellValue) < min) {
        min = parseInt(cellValue);
      }
    }

    for (var i = 2; i < rowCount; i++) {
      var cellValue = table.rows[i].cells[1].querySelector('input').value;
      if (parseInt(cellValue) !== min) {
        table.rows[i].cells[1].querySelector('input').value = '';
      }
    }
  }

  // 기준 칸 빨간색으로 표시 (기준 칸 값은 N으로 가정)
  var baseCell = table.rows[1].cells[1].querySelector('input');
  baseCell.style.color = 'red';
}
