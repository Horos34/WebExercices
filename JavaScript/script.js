console.log("Exercices Web avec Weact");

multiplicateur(5, 3)

function multiplicateur(value1, value2) {
    console.log(value1 * value2);
    return value1 * value2
}


function alertButton() {
    var clic = "L'action a bien été prise en compte"
    console.log(clic);
    alert(clic)
}

function saisieDonnée() {
  var saisie_prenom = document.getElementById("prenom").value
  var saisie_nom = document.getElementById("Nomdefamille").value
  console.log(saisie_prenom);
  console.log(saisie_nom);
  alert("Tu t'appelles " + saisie_prenom + " " + saisie_nom)
}
