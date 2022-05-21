// On cible nos éléments dans le DOM 
const listeIngredients = document.getElementById("ingredients");

// On créé les différents éléments de notre liste
let h2 = document.createElement("h2");
let ul = document.createElement("ul");
ul.setAttribute("id", "listOfIngredients");

// On injecte dans notre HTML la liste 
listeIngredients.appendChild(ul);
listeIngredients.prepend(h2);
h2.innerText = "Ingrédients";


// On crée notre data d'ingrédients
let ingredients = [
    "1,2 kg de pommes de terre",
    "600 g de tomme fraîche de Cantal ou de Salers",
    "40 g de Saindoux (ou 20 g de beurre + 2 cuillères à soupe d’huile d’olive)",
    "3 gousses d’ail",
    "1 pincée de sel",
    "1 pincée de poivre",
    "16 tranches fines de jambon cru d’Auvergne Maison Loste",
    "1 cuillère à café de persil pour la déco"
];

let listOfIngredients = document.querySelector("#listOfIngredients");

// On affiche nos ingrédients
for(let i = 0; i < ingredients.length; i++){
    let li = document.createElement("li");
    li.innerText = ingredients[i];
    listOfIngredients.appendChild(li);
}


