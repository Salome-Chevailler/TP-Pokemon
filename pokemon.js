// ====== Afficher la liste des Pokemon ========

// ====== la fonction qui récupère les Pokemon et les affiche
function getPokemon(event) {
  const url = "https://pokeapi.co/api/v2/pokemon/"; // l’url de la ressource

  let fetchOptions = { method: "GET" }; // les options de l'API fetch

  // exécuter la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      console.log(dataJSON);
      let pokemons = dataJSON.results;
      // tri de la liste par ordre alphabétique des noms
      pokemons.sort((p1, p2) => {
        return p1.name < p2.name;
      });
      // ici le traitement des données …
      // ajouter une <option value="url du pok">name du pok</option> pour chaque pokemon
      let texteHTML = "";
      for (let p of pokemons) {
        texteHTML =
          texteHTML + '<option value = "' + p.url + '">' + p.name + "</option>";
      }
      // pour l'affichage dans le navigateur
      document.getElementById("liste").innerHTML = texteHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}

// Appel de la fonction
getPokemon();

// ====== Afficher la description d'un Pokemon choisi dans la liste =====
// -- gestion de la sélection
// cible : le liste d'id "liste"
// event : change
// action : description du Pokemon
document.getElementById("liste").addEventListener("change", getDescription);

// ====== la fonction qui récupère la description dy Pokemon et l'affiche
function getDescription(event) {
  const url = event.target.value; // l’url de la ressource
  console.log(url);
  let fetchOptions = { method: "GET" }; // les options de l'API fetch

  // exécuter la requête AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      console.log(dataJSON);
      let description = dataJSON;

      // ici le traitement des données …
      let texteHTML = "";

      texteHTML =
        "Le pokemon " +
        description.name +
        " mesure " +
        description.height +
        " cm et pèse " +
        description.weight +
        " kg";

      // pour l'affichage dans le navigateur
      document.getElementById("detail").innerHTML = texteHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}
