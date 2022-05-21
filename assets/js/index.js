// On cible nos éléments dans le DOM
const listeIngredients = document.getElementById("ingredients");
const step = document.getElementById("step");

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
  "1 cuillère à café de persil pour la déco",
];

let listOfIngredients = document.querySelector("#listOfIngredients");

// On affiche nos ingrédients
for (let i = 0; i < ingredients.length; i++) {
  let li = document.createElement("li");
  li.innerText = ingredients[i];
  listOfIngredients.appendChild(li);
}

// On créer une liste  non ordonnée
let ulStep = document.createElement("ul");
ulStep.setAttribute("id", "listOfSteps");
step.appendChild(ulStep);
let listOfSteps = document.getElementById("listOfSteps");

// On crée notre data d'étape
let steps = [
  "Épluchez les pommes de terre, lavez-les et tranchez-les en rondelles d’environ 3 mm d’épaisseur. Essayez de les faire bien régulières pour une cuisson homogène. Coupez la tommes fraîche en tranches fines (elles fondront ainsi plus vite).",
  "Mettez 20 g de Saindoux dans une cocotte en fonte à chauffer (ou 20 g de beurre + 1 cuillère à soupe d’huile). Quand c’est chaud, faites-y dorer vos lamelles de pommes de terre à feu vif pendant 10 minutes. Remuez régulièrement pour que les pommes de terre n’attachent pas.",
  "Au bout de 10 minutes, ajoutez à nouveau 20 g de Saindoux ou 1 cuillère à soupe d’huile, diminuez le feu, couvrez et laissez cuire 15 minutes.  Puis, ajoutez les gousses d’ail épluchées, dégermées et pressées. Salez et poursuivez la cuisson de 5 minutes.",
  "Il ne vous reste plus qu’à ajouter les tranches de tomme fraîche et à laisser fondre en mélangeant. Comptez à peu près 5 minutes à feu moyen. Le mélange doit filer. Goûtez, salez si besoin et servez, saupoudré d’un peu de persil pour la fraîcheur (l’alibi :D).",
  "Accompagnez de délicieuses tranches de jambon d’Auvergne Maison Loste. Comme elles sont fines, je compte 2 tranches par personne.",
];

// on affiche nos étapes
for (let i = 0; i < steps.length; i++) {
  // On créer un sous titre h3 pour chacune des étapes
  let h3 = document.createElement("h3");
  h3.setAttribute("id", `step${i + 1}`);
  h3.innerText = ` * Etape ${i + 1}`;
  let li = document.createElement("li");
  li.innerText = steps[i];
  ulStep.appendChild(h3);
  ulStep.appendChild(li);
}
