// mobile hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
  
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  });

  // scroll to presentation 

  function scrollToMenu() {
    document.getElementById('presentation').scrollIntoView({ behavior: 'smooth' });
  }

  // podium input
  function updateNames(section) {
    const input1 = document.getElementById(`input1-${section}`).value.trim();
    const input2 = document.getElementById(`input2-${section}`).value.trim();
    const input3 = document.getElementById(`input3-${section}`).value.trim();
  
    if (input1) document.getElementById(`name1-${section}`).textContent = input1;
    if (input2) document.getElementById(`name2-${section}`).textContent = input2;
    if (input3) document.getElementById(`name3-${section}`).textContent = input3;
  }
  

  // scroll to top
  // Get the button
var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}