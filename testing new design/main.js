home();
function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("Contacts").style.display = "none";
}

function about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("Contacts").style.display = "none";
}
function projects() {
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("Contacts").style.display = "none";
}
function Contacts() {
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("Contacts").style.display = "block";
}
