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

  // 반복적으로 알고리즘 수행
  while (true) {
    var redFound = false; // 빨간색 숫자가 발견되었는지 여부를 나타내는 플래그

    // 1. 빨간색이 아닌 숫자 찾기
    var nonRedNumbers = [];
    for (var i = 1; i < columnCount; i++) {
      var cellInput = table.rows[1].cells[i].querySelector('input');
      if (cellInput.style.color !== 'red') {
        nonRedNumbers.push(parseInt(cellInput.value));
      }
    }

    // 2. 중복이 아닌 숫자 중 최솟값 찾기
    var uniqueNonRedNumbers = Array.from(new Set(nonRedNumbers));
    uniqueNonRedNumbers.sort((a, b) => a - b);

    // 3. 중복이 아닌 숫자가 없는 경우 가장 작은 수 선택
    var minNumber = uniqueNonRedNumbers.length > 0 ? uniqueNonRedNumbers[0] : Math.min(...nonRedNumbers);

    // 4. a가 있는 칸에서 숫자 삭제 및 빨간색 a 다시 입력
    for (var i = 1; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var cellInput = table.rows[i].cells[j].querySelector('input');
        var cellValue = parseInt(cellInput.value);
        if (cellValue === minNumber) {
          if (i === 1 && cellInput.style.color !== 'red') {
            cellInput.style.color = 'red';
            redFound = true;
          } else if (i !== 1) {
            cellInput.value = '';
          }
        }
      }
    }

    // 5. a와 같은 행과 열에 있는 a들을 전부 삭제
    for (var i = 1; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var cellInput = table.rows[i].cells[j].querySelector('input');
        var cellValue = parseInt(cellInput.value);
        if ((cellValue === minNumber) && (i !== 1 || cellInput.style.color !== 'red')) {
          cellInput.value = '';
        }
      }
    }

    // 6. 1행의 모든 숫자가 빨간색이 될 때까지 반복
    if (!redFound) {
      break;
    }
  }
}

