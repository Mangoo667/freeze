const lecteur = document.getElementById("lecteur");
const titreEnCours = document.getElementById("titre-en-cours");
const morceaux = document.querySelectorAll("#playlist li");
const pochette = document.getElementById("pochette");

let numeroActuel = 0;

function jouer(numero) {
  numeroActuel = numero;
  const morceau = morceaux[numero];
  lecteur.src = morceau.dataset.src;
  lecteur.play();
  titreEnCours.textContent = "En cours : " + morceau.textContent;
  pochette.src = morceau.dataset.pochette;
}

morceaux.forEach(function (morceau, numero) {
  morceau.addEventListener("click", function () {
    jouer(numero);
  });
});

lecteur.addEventListener("ended", function () {
  const suivant = numeroActuel + 1;
  if (suivant < morceaux.length) {
    jouer(suivant);
  }
});

const btnPrecedent = document.getElementById("btn-precedent");
const btnSuivant = document.getElementById("btn-suivant");

btnSuivant.addEventListener("click", function () {
  if (numeroActuel + 1 < morceaux.length) {
    jouer(numeroActuel + 1);
  }
});

btnPrecedent.addEventListener("click", function () {
  if (numeroActuel > 0) {
    jouer(numeroActuel - 1);
  }
});

const btnAleatoire = document.getElementById("btn-aleatoire");

btnAleatoire.addEventListener("click", function () {
  if (morceaux.length < 2) {
    return;
  }

  let numero = numeroActuel;
  while (numero === numeroActuel) {
    numero = Math.floor(Math.random() * morceaux.length);
  }

  jouer(numero);
});
