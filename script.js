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
    cell.innerHTML = '<input type="text">';
  }

  handleNewInputs(); // 새로운 입력 필드에 이벤트 핸들러 할당
}

function addRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  rowCounter++;

  var row = table.insertRow(rowCount);
  for (var i = 0; i < columnCounter; i++) {
    var cell = row.insertCell(i);
    if (i === 0) {
      cell.innerHTML = rowCounter;
    } else {
      cell.innerHTML = '<input type="text">';
    }
  }

  handleNewInputs(); // 새로운 입력 필드에 이벤트 핸들러 할당
}

function handleNewInputs() {
  var inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    if (!input.hasAttribute('oninput')) {
      input.setAttribute('oninput', 'handleInput(this)');
    }
  });
}

function handleInput(input) {
  var text = input.value;
  var numbers = text.split(',');
  
  input.value = ''; // Clear the input field
  
  // Insert each number in the cell
  for (var i = 0; i < numbers.length; i++) {
    input.value += numbers[i]; // Show all numbers without commas for better user experience
    
    if (i !== numbers.length - 1) {
      input.value += ', '; // Add commas for separation, except for the last number
    }
  }
}

function handleInput(input) {
  var text = input.value;
  var numbers = text.split(',');
  
  input.value = ''; // Clear the input field
  
  // Insert each number in the cell
  for (var i = 0; i < numbers.length; i++) {
    input.value += numbers[i]; // Show all numbers without commas for better user experience
    
    if (i !== numbers.length - 1) {
      input.value += ', '; // Add commas for separation, except for the last number
    }
  }
}
