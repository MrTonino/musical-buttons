//Detecting button press
var noOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAnimation(btnInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "A":
      var pat1 = new Audio("music/patobasi1.mp3");
      pat1.play();
      break;
    case "B":
      var pat2 = new Audio("music/patobasi2.mp3");
      pat2.play();
      break;
    case "C":
      var pat3 = new Audio("music/patobasi3.mp3");
      pat3.play();
      break;
    case "D":
      var pat4 = new Audio("music/patobasi4.mp3");
      pat4.play();
      break;
    default:
      alert("Wrong key pressed");
  }
}
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
}
