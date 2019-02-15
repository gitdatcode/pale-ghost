function toggleMenu() {
  var x = document.getElementById("site-nav");
  if (x.className === "site-nav") {
    x.className += " responsive";
  } else {
    x.className = "site-nav";
  }
}