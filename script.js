const holidays = [
    '01/01/2025', '17/02/2025', '18/02/2025', '24/03/2025', '17/04/2025',
    '18/04/2025', '02/04/2025', '01/05/2025', '26/05/2025', '20/06/2025',
    '09/07/2025', '18/08/2025', '13/10/2025', '20/11/2025', '25/12/2025'
].map(date => new Date(date.split('/').reverse().join('-')));

document.getElementById('calculate').addEventListener('click', function () {
    const startDateInput = document.getElementById('start-date').value;
    const daysCount = parseInt(document.getElementById('days-count').value, 10);
    const startDate = new Date(startDateInput.split('/').reverse().join('-'));

    if (isNaN(startDate.getTime()) || isNaN(daysCount)) {
        alert("Por favor, ingresa una fecha y una cantidad de días válidas.");
        return;
