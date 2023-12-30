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
      input.setAttribute('oninput', 'handleInput(this)');
      cell.appendChild(input);
      handleInput(input);
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
