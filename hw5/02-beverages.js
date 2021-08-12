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
  let div = createNode("div");
  div.setAttribute("class", "figure p-2 m-2 rounded");
  let name = createNode("p");
  let img = createNode("img");
  img.src = data.strDrinkThumb;
  img.style.height = "200px";
  img.style.width = "200px";
  name.innerHTML = data.strDrink;

  append(div, img);
  append(div, name);
  append(drinkBox, div);
};

let app = document.querySelector("#results");

async function fetchData(url) {
  // Fetches an array of objects, each object is a drink
  const data = await fetch(url)
    .then((response) => response.json())
    .then((drinkArray) => drinkArray.drinks)
    .catch((e) => {
      console.log(e);
      let errorElement = createNode("p");
      errorElement.innerHTML = "An error occured. Please try again.";
      drinkBox.appendChild(errorElement);
      loading.parentElement.removeChild(loading);
    });

  return data;
}

fetchData(url).then((drinks) => {
  console.log(drinks);
  drinks.forEach((element) => {
    createDrinkBox(element);
  });
  loading.parentElement.removeChild(loading);
});
