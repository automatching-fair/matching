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


function startMatching() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  var columnCount = table.rows[0].cells.length;

  var firstRowValues = [];

  // 1. 1번 행의 값을 읽어오는 코드
  for (var i = 1; i < columnCount; i++) {
    firstRowValues.push(table.rows[1].cells[i].querySelector('input').value);
  }

  // 2. 중복이 아닌 숫자 찾기
function findUniqueNumber() {
  var uniqueNumber = null;
  for (var i = 0; i < firstRowValues.length; i++) {
    var currentValue = firstRowValues[i];
    var count = 0;
    for (var j = 0; j < firstRowValues.length; j++) {
      if (currentValue === firstRowValues[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueNumber = currentValue;
      break;
    }
  }
  return uniqueNumber;
}


  // 3. 중복이 아닌 숫자 처리하는 코드
function handleUniqueNumber() {
  var uniqueNumber = findUniqueNumber();
  if (uniqueNumber !== null) {
    // 중복이 아닌 숫자가 있을 때 처리하는 코드 작성
    for (var i = 2; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var currentInput = table.rows[i].cells[j].querySelector('input');
        if (currentInput.value !== uniqueNumber) {
          currentInput.value = '';
        }
      }
    }
  }
}


  // 4. 여러 중복이 아닌 숫자 처리하는 코드
function handleMultipleUniqueNumbers() {
  var uniqueNumbers = [];
  for (var i = 0; i < firstRowValues.length; i++) {
    var currentValue = firstRowValues[i];
    var count = 0;
    for (var j = 0; j < firstRowValues.length; j++) {
      if (currentValue === firstRowValues[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueNumbers.push(currentValue);
    }
  }

  if (uniqueNumbers.length > 1) {
    // 여러 중복이 아닌 숫자가 있을 때 처리하는 코드 작성
    for (var i = 2; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var currentInput = table.rows[i].cells[j].querySelector('input');
        if (!uniqueNumbers.includes(currentInput.value)) {
          currentInput.value = '';
        }
      }
    }
  }
}


  // 5. 모든 수들이 중복된 상태일 때 처리하는 코드
function handleAllDuplicates() {
  var uniqueNumbers = [];
  var duplicates = [];

  for (var i = 0; i < firstRowValues.length; i++) {
    var currentValue = firstRowValues[i];
    var count = 0;
    for (var j = 0; j < firstRowValues.length; j++) {
      if (currentValue === firstRowValues[j]) {
        count++;
      }
    }
    if (count === 1) {
      uniqueNumbers.push(currentValue);
    } else {
      duplicates.push(currentValue);
    }
  }

  if (uniqueNumbers.length === 0 && duplicates.length > 0) {
    // 모든 수가 중복인 경우 처리하는 코드 작성
    var smallest = duplicates.reduce((min, val) => Math.min(min, val));
    for (var i = 2; i < rowCount; i++) {
      for (var j = 1; j < columnCount; j++) {
        var currentInput = table.rows[i].cells[j].querySelector('input');
        if (currentInput.value !== smallest) {
          currentInput.value = '';
        }
      }
    }
  }
}


  // 6. 가로, 세로에서 N을 삭제하는 코드
function removeExceptSmallest() {
  var smallest = Number.MAX_SAFE_INTEGER;

  for (var i = 2; i < rowCount; i++) {
    var currentInput = table.rows[i].cells[1].querySelector('input');
    var currentValue = parseInt(currentInput.value);
    if (!isNaN(currentValue)) {
      smallest = Math.min(smallest, currentValue);
    }
  }

  for (var i = 2; i < rowCount; i++) {
    var currentInput = table.rows[i].cells[1].querySelector('input');
    var currentValue = parseInt(currentInput.value);
    if (!isNaN(currentValue) && currentValue !== smallest) {
      currentInput.value = '';
    }
  }
}

function removeNFromRowsAndColumns() {
  var baseInput = table.rows[1].cells[1].querySelector('input');
  var baseValue = parseInt(baseInput.value);

  for (var i = 1; i < rowCount; i++) {
    for (var j = 1; j < columnCount; j++) {
      var currentInput = table.rows[i].cells[j].querySelector('input');
      var currentValue = parseInt(currentInput.value);
      if (!isNaN(currentValue) && currentValue === baseValue && i !== 1 && j !== 1) {
        currentInput.value = '';
      }
    }
  }
}


  
  // 7. 위의 단계들을 순서대로 실행하는 코드
  findUniqueNumber();
  handleUniqueNumber();
  handleMultipleUniqueNumbers();
  handleAllDuplicates();
  removeNFromRowsAndColumns();
}
