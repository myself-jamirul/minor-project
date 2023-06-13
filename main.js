// for dropdown menu
function handleclick() {
  const dropdown = document.getElementById("dropdown-btn");
  dropdown.classList.toggle("active");
}

// scroll to top functionality -----------------------------------

let mybutton = document.getElementById("scrollTopButton");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  console.log("on scrolling1");
};

function scrollFunction() {
  console.log("on scrolling2");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log("topfunc");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
