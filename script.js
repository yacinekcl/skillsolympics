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

//form validation inscription
const form1 = document.getElementById('form1');
if (form1) {
  form1.addEventListener('submit', function(e) {
  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const age = document.getElementById('age').value.trim();
  const specialite = document.getElementById('specialite').value;
  const email = document.getElementById('email').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const checkbox = document.getElementById('checkbox').checked;

  const namePattern = /^[A-Za-zÀ-ÿ\s\-]+$/;
  const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
  const ageNum = parseInt(age, 10);

  if (!nom || !namePattern.test(nom)) {
    alert('Veuillez entrer un nom valide.');
    e.preventDefault();
    return;
  }

  if (!prenom || !namePattern.test(prenom)) {
    alert('Veuillez entrer un prénom valide.');
    e.preventDefault();
    return;
  }

  if (!age || isNaN(ageNum) || ageNum < 16 || ageNum > 100) {
    alert('Veuillez entrer un âge valide entre 16 et 100.');
    e.preventDefault();
    return;
  }

  if (!specialite) {
    alert('Veuillez choisir une spécialité.');
    e.preventDefault();
    return;
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    alert('Veuillez entrer une adresse e-mail valide.');
    e.preventDefault();
    return;
  }

  if (!numero || !phonePattern.test(numero)) {
    alert('Veuillez entrer un numéro de téléphone valide.');
    e.preventDefault();
    return;
  }

  if (!checkbox) {
    alert('Vous devez accepter les termes et conditions.');
    e.preventDefault();
    return;
  }

  // If all validations pass → form submits
});
}

//form validation contact
document.getElementById('form2').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email2').value.trim();
  const message = document.getElementById('message').value.trim();

  const namePattern = /^[A-Za-zÀ-ÿ\s\-]+$/;

  if (!name || !namePattern.test(name)) {
    alert('Veuillez entrer un nom valide.');
    e.preventDefault();
    return;
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    alert('Veuillez entrer une adresse e-mail valide.');
    e.preventDefault();
    return;
  }

  if (!message || message.length < 10 || message.length > 1000) {
    alert('Le message doit contenir entre 10 et 1000 caractères.');
    e.preventDefault();
    return;
  }

  // If all validations pass → form submits
});