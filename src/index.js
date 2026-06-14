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
  let context = `You are a professional chef. Return ONLY valid HTML.

    Use:
    <h2> for recipe title
    <ul> for ingredients
    <p> for instructions

    Do not use markdown.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-result");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `
<div class="loading">
  <img src="images/cooking-pot.gif" alt="Cooking">
  <p>🍳 Your recipe is being put together...</p>
</div>
`;

  console.log("generating recipe...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  // call to the API with axios
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);

let input = document.querySelector("#user-ingredients");

input.addEventListener("input", function () {
  console.log(input.value);
});
