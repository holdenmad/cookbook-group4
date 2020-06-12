document.getElementById("random-recipe").addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      document.location =
        "https://holdenmad.github.io/cookbook-group4/recipe-page.html";
      break;
    case 2:
      document.location =
        "https://holdenmad.github.io/cookbook-group4/recipe-page2.html";
      break;
    default:
      document.location =
        "https://holdenmad.github.io/cookbook-group4/recipe-page3.html";
  }
});

//Recipe-Page Share Button

const shareButton = document.getElementById("share-button");

console.log(shareButton);

if (shareButton) {
  shareButton.addEventListener("click", function() {
    alert(`Shared! Thanks for sharing. :)`);
    console.log("Shared!");
  });
}