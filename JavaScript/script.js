console.log("Exercices Web avec Weact");

function multiplicateur(value1, value2) {
  console.log(value1 * value2);
  return value1 * value2;
}

function WeactButton() {
  let smurk = "CAN I GET A HOOOOO YEAAAAAAAAAAH ?";
  alert(smurk);
}

function alertButton() {
  let clic = "L'action a bien été prise en compte";
  alert(clic);
}

function saisieDonnée() {
  let saisie_prenom = document.getElementById("prenom").value;
  let saisie_nom = document.getElementById("Nomdefamille").value;
  alert("Tu t'appelles " + saisie_prenom + " " + saisie_nom);
}

function stringAnalyze(x, y) {
  let parsed = parseInt(x, y);
    if (isNaN(parsed)) {
      return 0;
    }

    alert("l'élément est : " + parsed)

}
