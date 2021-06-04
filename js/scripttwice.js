// Get the modal
var overlay = document.getElementById("overlay");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnone = document.getElementById("myBtnone");
var btntwo = document.getElementById("myBtn2");
var btntree = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";
}
btnone.onclick = function() {
    modal.style.display = "flex";
    overlay.style.display = "block";
  }
btntwo.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";
}
btntree.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";
}
btntree.onclick = function() {
  modal.style.display = "flex";
  overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}