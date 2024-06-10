
const recipes = [
    { name: "Chicken Curry", ingredients: ["chicken", "onion", "garlic", "Ginger"],recipe1:["Saute a diced onion in olive oil until lightly browned. Stir in the seasonings (garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt). Add the chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce the heat, and simmer for 20 to 25 minutes. Remove the bay leaf and stir in the lemon juice and cayenne pepper. Continue simmering for about 5 more minutes."] },
    { name: "Biriyani", ingredients: ["biriyani rice", "carrot", "onion", "beens"],recipe1:["Chicken marinated in a spiced yoghurt is placed in a large pot, then layered with fried onions (cheeky easy sub below!), fresh coriander/cilantro, then par boiled lightly spiced rice  The crowning glory is to finish it off with a drizzle of saffron infused water to give it the signature patches of bright yellow rice, as well as ghee (or melted butter) for buttery richness.The pot is then covered and cooked over a low heat for about 25 minutes during which time the rice absorbs the aromas and flavours of the curry underneath, whilst still being beautifully fluffy "]},
    
    { name: ["fish fry"<br>"fish curry"], ingredients: ["fish", "pepper", "chilly", "ginger"] ,recipe1:["Take all your ingredients for marinating fish. You need chilli powder, turmeric, coriander, garam masala powder, black pepper powder, ginger garlic paste, curry leaves, coriander leaves, lemon juice and salt.I like to use a mix of kashmiri chilli powder and regular chilli powder. kashmiri chilli powder adds colour."]}
];


function searchRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; 

  
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.includes(searchInput))
    );

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement("div");
            recipeItem.textContent = recipe.name;
            recipeList.appendChild(recipeItem);
        });
    } else {
        recipeList.textContent = "No recipes found.";
    }

    // Save search input to localStorage
    //localStorage.setItem("lastSearch", searchInput);
}

// Load last search input from localStorage on page load
//window.onload = function() {
   // const lastSearch = localStorage.getItem("lastSearch");
   // if (lastSearch) {
     //   document.getElementById("searchInput").value = lastSearch;
      //  searchRecipes();
 //   }
//};
function Recipes() {
  
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const recipeList = document.getElementById("recipeList");
    const rrr = document.getElementById("rrr");
    rrr.innerHTML = ""; 

  
    const filteredRecipes = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient => ingredient.includes(searchInput))
    );

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement("div");
            recipeItem.textContent = recipe.recipe1;
            rrr.appendChild(recipeItem);
        });
    } else {
        rrr.textContent = "No recipes found.";
    }

}
