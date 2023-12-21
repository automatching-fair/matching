// Create a 10x10 table
const table = document.getElementById('numberTable');
for (let i = 0; i < 11; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 11; j++) {
        const cell = row.insertCell();
        if (i === 0 && j > 0) {
            cell.textContent = j;
        }
        if (i > 0 && j === 0) {
            cell.textContent = String.fromCharCode(64 + i);
        }
    }
}

// Function to process numbers
function processNumbers() {
    const row2 = table.rows[1];

    // Get unique numbers from the second row
    const uniqueNumbers = Array.from(new Set(Array.from(row2.cells).map(cell => cell.textContent)));

    if (uniqueNumbers.length === 1) {
        // If only one unique number, color it red
        row2.cells[0].classList.add('red');
    } else if (uniqueNumbers.length > 1) {
        // If multiple unique numbers, color the leftmost cell red
        row2.cells[0].classList.add('red');
    } else {
        // If no unique numbers, color the smallest number red
        let minNumber = Infinity;
        Array.from(row2.cells).forEach(cell => {
            const num = parseInt(cell.textContent);
            if (!isNaN(num) && num < minNumber) {
                minNumber = num;
            }
        });

        Array.from(row2.cells).forEach(cell => {
            const num = parseInt(cell.textContent);
            if (num === minNumber) {
                cell.classList.add('red');
            } else {
                cell.textContent = '';
            }
        });
    }

    // Remove numbers from the same row and column as the colored cell
    const coloredCellIndex = Array.from(row2.cells).findIndex(cell => cell.classList.contains('red'));

    Array.from(table.rows).forEach(row => {
        row.deleteCell(coloredCellIndex);
    });
    Array.from(table.rows).forEach(row => {
        row.deleteCell(0);
    });
}
