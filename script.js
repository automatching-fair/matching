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
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      cell.appendChild(input);
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
