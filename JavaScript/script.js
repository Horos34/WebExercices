console.log("Exercices Web avec Weact");

function multiplicateur(value1, value2) {
  console.log(value1 * value2);
  return value1 * value2;
}

function WeactButton() {
  var smurk = "CAN I GET A HOOOOO YEAAAAAAAAAAH ?";
  alert(smurk);
}

function alertButton() {
  var clic = "L'action a bien été prise en compte";
  alert(clic);
}

function saisieDonnée() {
  var saisie_prenom = document.getElementById("prenom").value;
  var saisie_nom = document.getElementById("Nomdefamille").value;
  alert("Tu t'appelles " + saisie_prenom + " " + saisie_nom);
}

function stringAnalyze(x, y) {
  var parsed = parseInt(x, y);
    if (isNaN(parsed)) {
      return 0;
    }

    alert("l'élément est : " + parsed)

}
