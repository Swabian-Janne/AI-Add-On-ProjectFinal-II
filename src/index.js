/** @format */

function displayRecipe(response) {
  let recipeElement = document.querySelector("#recipe-result");
  recipeElement.innerHTML = response.data.answer;
}

function generateRecipe(event) {
  event.preventDefault();

  //build the API URL
  let ingredientsInput = document.querySelector("#user-ingredients");
  let apiKey = "ef3aab353f2ado9faa8tccd552b00647";
  let prompt = `Generate a recipe based on these ingredients:${ingredientsInput.value} Format the recipe exactly like this:
            🍽️ Recipe Name

            📝 Ingredients:
                 - ingredient 1
                - ingredient 2

            👨‍🍳 Instructions:

                🥣 Step 1: ...
                🥄 Step 2: ...
                🔥 Step 3: ...
                ✅ Step 4: ...

        Use HTML line breaks <br> between sections.`;
  let context =
    "You are a chef who creates simple recipes based on the ingredients the user has on hand. Your mission is to generate a recipe that is easy to follow, simple and delicious. Do not use Markdown.Do not use ###, ** or * symbols. Use emojis and HTML line breaks <br> for formatting.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-result");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = "Your recipe is being put togehter...";

  console.log("generating recipe...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
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
  }
});
