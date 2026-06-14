/** @format */

function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  
//build the API URL
  let ingredientsInput = document.querySelector("#user-ingredients");
  let apiKey = "ef3aab353f2ado9faa8tccd552b00647";
  let prompt = `User instructions: Generate a recipe based on the ingredients the user has on hand. ${ingredientsInput.value}.`;
  let context =
    "You are a chef who creates simple recipes based on the ingredients the user has on hand. Your mission is to generate a recipe that is easy to follow, simple and delicious. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "Your recipe is being put togehter...";
  
    console.log("generating recipe...");
    console.log("Prompt: ${prompt}");
    console.log("Context: ${context}");
// call to the API with axios
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);

let input = document.querySelector("#user-ingredients");
let hint = document.querySelector(".hint");

input.addEventListener("input", function () {
  if (input.value.length > 0) {
    hint.style.display = "none";
  } else {
    hint.style.display = "inline-block";
  }); 