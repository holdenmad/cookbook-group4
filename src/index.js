//import "./styles.css";

const shareButton = document.querySelector("#share-button");
const websitePark = "https://park.org/";

document.querySelector("#share-button").addEventListener("click", function () {
    document.location = "https://www.park.org/";
    alert(`Taking you to: ${websitePark}`);
    console.log("Shared!")
});

console.log(document.querySelector("#share-button"));
