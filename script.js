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

  var uniqueValuesMap = new Map();
  var allUniqueValues = [];

  // 1번 행의 값을 읽어와 uniqueValuesMap에 저장
  for (var i = 1; i < columnCount; i++) {
    var inputValue = table.rows[1].cells[i].querySelector('input').value;
    if (!uniqueValuesMap.has(inputValue)) {
      uniqueValuesMap.set(inputValue, []);
    }
    uniqueValuesMap.get(inputValue).push(i);
    if (!allUniqueValues.includes(inputValue)) {
      allUniqueValues.push(inputValue);
    }
  }

  // 중복이 아닌 숫자가 하나인 경우 해당 숫자를 모든 셀에 적용
  if (allUniqueValues.length === 1) {
    var uniqueNumber = allUniqueValues[0];
    var columnsToFill = uniqueValuesMap.get(uniqueNumber);
    for (var i = 2; i < rowCount; i++) {
      columnsToFill.forEach(function (column) {
        table.rows[i].cells[column].querySelector('input').value = uniqueNumber;
      });
    }
  }
  // 중복이 아닌 숫자가 여러 개인 경우 왼쪽부터 가장 처음 나온 숫자만 남기고 나머지 삭제
  else if (allUniqueValues.length > 1) {
    for (var i = 2; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var cellValue = table.rows[i].cells[j].querySelector('input').value;
        if (!allUniqueValues.includes(cellValue)) {
          table.rows[i].cells[j].querySelector('input').value = '';
        }
      }
    }
  }
  // 모든 값이 중복인 경우 가장 작은 값만 남기고 나머지 삭제
  else {
    var minValue = Math.min(...allUniqueValues);
    for (var i = 2; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var cellValue = table.rows[i].cells[j].querySelector('input').value;
        if (parseInt(cellValue) !== minValue) {
          table.rows[i].cells[j].querySelector('input').value = '';
        }
      }
    }
  }

  // 기준 칸을 빨간색으로 표시 (여기서는 가장 왼쪽 셀을 기준으로 함)
  table.rows[1].cells[1].querySelector('input').style.color = 'red';
}
