function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const dateInput = document.getElementById("date").value;

  if (!dobInput || !dateInput) {
    alert("Please enter both dates.");
    return;
  }

  const dob = new Date(dobInput);
  const targetDate = new Date(dateInput);
  const today = new Date();

  if (dob > today) {
    alert("Date of birth cannot be in the future.");
    return;
  }

  if (targetDate < dob) {
    alert("The target date cannot be before the date of birth.");
    return;
  }

  let age = targetDate.getFullYear() - dob.getFullYear();
  const monthDifference = targetDate.getMonth() - dob.getMonth();
  const dayDifference = targetDate.getDate() - dob.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Your age is: ${age} years old.</p>`;
}
