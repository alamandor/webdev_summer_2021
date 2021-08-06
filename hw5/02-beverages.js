const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

let drinkBox = document.getElementById("drinkContainer");
let loading = document.querySelector("#loading");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

let createDrinkBox = (data) => {
  // Create div
  // Append following to div:
  // -- fullName
  // -- title
  // -- Image
  let div = createNode("div");
  div.setAttribute("class", "charBox p-2 m-2 rounded");
  let name = createNode("p");
  let title = createNode("p");
  let img = createNode("img");
  img.src = data.strDrinkThumb;
  img.style.height = "200px";
  img.style.width = "200px";
  name.innerHTML = data.strDrink;
  // name.setAttribute("class", "charName");
  // title.setAttribute("class", "charTitle");

  // title.innerHTML = data.title;

  append(div, img);
  append(div, name);
  append(div, title);
  append(drinkBox, div);
};

let app = document.querySelector("#results");

async function fetchData(url) {
  // Fetches an array of objects, each object is a drink
  const data = fetch(url)
    .then((response) => response.json())
    .then((drinkArray) => drinkArray.drinks);

  return data;
}

fetchData(url).then((drinks) => {
  console.log(drinks);
  drinks.forEach((element) => {
    createDrinkBox(element);
  });
  loading.parentElement.removeChild(loading);
});
