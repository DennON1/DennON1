  let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "Firefox-Logo.wine.png") {
    myImage.setAttribute("src", "ritchie.jpg");
  } else {
    myImage.setAttribute("src", "Firefox-Logo.wine.png");
  }
});