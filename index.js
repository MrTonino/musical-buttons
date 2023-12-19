/*
The code below will achieve thesame result with the one following:

*var clickedButton = document
  .querySelector("button")
  .addEventListener("click", handleClick);
   function handleClick (){
    alert("I got clicked !")
   }


  */
/*var clickedButton = document
  .querySelector("button")
  .addEventListener("click", function () {
    alert("I got clicked");
  }); */

var noOfButtons = document.querySelectorAll(".btn").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    switch (btnInnerHTML) {
      case "First":
        var pat1 = new Audio("music/patobasi1.mp3");
        pat1.play();
        break;
      case "Second":
        var pat2 = new Audio("music/patobasi2.mp3");
        pat2.play();
        break;
      case "Third":
        var pat3 = new Audio("music/patobasi3.mp3");
        pat3.play();
        break;
      case "Fourth":
        var pat4 = new Audio("music/patobasi4.mp3");
        pat4.play();
        break;
      default:
        alert(btnInnerHTML);
    }
  });
}
