const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
$(document).ready(function () {
  const loading = $("#loading");

  let createDrinkBox = (data) => {
    // Create div

    let name = $("<p>").text(data.strDrink);
    let img = $("<img />", {
      src: data.strDrinkThumb,
    });
    img.width(200);
    img.height(200);

    let div = $("<div>")
      .addClass("figure p-2 m-2 rounded")
      .append(img)
      .append(name);
    $("#drinkContainer").append(div);
  };

  async function fetchData(url) {
    // Fetches an array of objects, each object is a drink
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: (data) => {
        console.log(data);
        data.drinks.forEach((element) => {
          createDrinkBox(element);
        });
      },
      error: (error) => {
        console.log(error);
        let errorElement = $("<p>").text("An error occured. Please try again.");
        $("#drinkContainer").append(errorElement);
        // loading.parentElement.removeChild(loading);
        loading.remove();
      },
    });
  }

  fetchData(url).then(() => {
    // loading.parentElement.removeChild(loading);
    loading.remove();
  });
});
