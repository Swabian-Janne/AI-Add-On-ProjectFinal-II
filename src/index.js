/** @format */

function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
    loop: false,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "Your recipe is being put togehter...";
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);

let ingredientsInput = document.querySelector("#user-ingredients");
let apiKey = "ef3aab353f2ado9faa8tccd552b00647";
let prompt =
  "User instructions: Generate a recipe based on the ingredients the user has on hand. ${ingredientsInput.value}.";
let context =
  "You are a chef who creates simple recipes based on the ingredients the user has on hand. Your mission is to generate a recipe that is easy to follow, simple and delicious. Make sure to follow the user instructions.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displayRecipe);
