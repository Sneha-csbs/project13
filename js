document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Trip booked to " + document.getElementById("destination").value + " on " +
 document.getElementById("date").value);
 });
