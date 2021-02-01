// ====== Afficher la liste des Pokemon ========
// -- gestion du clic sur le bouton
// cible : le bouton d'id "pokemon"
// event : click
// action : liste des Pokemon
document.getElementById("pokemon").addEventListener("click", getPokemon);

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
      // ici le traitement des données …
      // ajouter une <option value="url du pok">name du pok</option> pour chaque pokemon
      let texteHTML = "";
      for (let p of pokemons) {
        texteHTML = texteHTML + "<option value = p.url>" + p.name + "</option>";
      }
      // pour l'affichage dans le navigateur
      document.getElementById("liste").innerHTML = texteHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}
