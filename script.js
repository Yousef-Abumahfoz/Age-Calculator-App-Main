document.getElementById('calculate-btn').addEventListener('click', function () {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
const yearsSpan = document.getElementById('years');
  const monthsSpan = document.getElementById('months');
  const daysSpan = document.getElementById('days');

  // Input validation
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Please enter a valid date.');
    return;
  }
       const birthDate = new Date(year, month - 1, day)  ;
  const today = new Date() ;

  if (birthDate > today) {
    alert('Birth date cannot be in the future.');
    return;
  }

     let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }
   yearsSpan.textContent = ageYears;
     monthsSpan.textContent = ageMonths;
   daysSpan.textContent = ageDays;
});