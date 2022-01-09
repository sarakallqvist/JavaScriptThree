//SIDEPANEL
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

//MODAL

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*expandable panels:
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // add an eventlistener to listen to the click
panel.addEventListener("click", () => {
    removeActiveClass();

    panel.classList.add("active");
    });
});

function removeActiveClass() {
panels.forEach((panel) => {
    // remove all active panel classes
    panel.classList.remove("active");
});
}*/
