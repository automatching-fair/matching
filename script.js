document.addEventListener('DOMContentLoaded', function() {
    // 초기 설정
    initializeSchedule();
});

function initializeSchedule() {
    const traders = ["A전무상"]; // 전문 무역 상사
    const companies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; // 제조 기업
    const sessions = Array.from({ length: companies.length }, (_, i) => `상담 ${i + 1}`); // 세션

    const scheduleTable = document.getElementById('schedule');
    
    // 1. 1행에 전문 무역 상사를 나열
    createRow(traders, 'traders', scheduleTable);

    // 2. 1열에 세션(1번째 상담, 2번째 상담 ...)을 나열
    createRow(sessions, 'sessions', scheduleTable);

    // 3. 각각의 전무상은 자신의 2행에 상담을 희망하는 제조기업의 번호들을 모두 적음
    companies.forEach(company => {
        const row = createRow([company], `company-${company}`, scheduleTable);
        row.classList.add('editable-row');
        row.addEventListener('click', () => toggleCompanySelection(row, company));
    });
}

function createRow(data, id, parent) {
    const row = document.createElement('tr');
    row.id = id;

    data.forEach(item => {
        const cell = document.createElement('td');
        cell.textContent = item;
        row.appendChild(cell);
    });

    parent.appendChild(row);
    return row;
}

function toggleCompanySelection(row, company) {
    row.classList.toggle('selected');
}

function adjustSchedule() {
    const selectedCompanies = document.querySelectorAll('.selected');
    const confirmedCompanies = [];

    selectedCompanies.forEach(row => {
        const companyNumber = row.firstChild.textContent;
        confirmedCompanies.push(companyNumber);
        row.remove();
    });

    // 확정된 기업 번호를 화면에 표시
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `확정된 기업 번호: ${confirmedCompanies.join(', ')}`;
}

function addCompany() {
    const inputElement = document.getElementById('companyInput');
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        const scheduleTable = document.getElementById('schedule');
        const row = createRow([inputValue], `company-${inputValue}`, scheduleTable);
        row.classList.add('editable-row');
        row.addEventListener('click', () => toggleCompanySelection(row, inputValue));

        inputElement.value = ""; // 입력 필드 비우기
    }
}
