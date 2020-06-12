const randomRecipe = document.getElementById("random-recipe");

console.log(randomRecipe);

if (randomRecipe) {
  randomRecipe.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 1:
        document.location = "recipe-page.html";
        break;
      case 2:
        document.location = "recipe-page2.html";
        break;
      default:
        document.location = "recipe-page3.html";
    }
  });
}

//Recipe-Page Share Button

const shareButton = document.getElementById("share-button");

console.log(shareButton);

if (shareButton) {
  shareButton.addEventListener("click", function() {
    alert("Shared! Thanks for sharing. :)");
    console.log("Shared!");
  });
}
