function calculateDiscount(getTotalStudents) {
  var getTotalStudents = document.getElementById('totalStudents').value;
  if (getTotalStudents <= 100) {
    return alert("Your total is " + (getTotalStudents * 10) + " Euros.");
    } else if (getTotalStudents > 250) {
      var discount2 = .7;
      return alert("Your total is " + (getTotalStudents * (10 * discount2)) + " Euros.");
    } else {
      var discount1 = .75;
      return alert("Your total is " + (getTotalStudents * (10 * discount1)) + " Euros.");
    }
  }