
document.querySelectorAll("button").forEach(button =>button.addEventListener("click", function() {
   
    var buttonInnerHTML = this.innerHTML
    switch(buttonInnerHTML){
        case "E":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
            default:
        case "M":
            var tom3 = new Audio("sounds/tom-2.mp3")
            tom3.play();
            break;
        case "A":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "W":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "J":
            var snare = new Audio("sounds/kick-bass.mp3")
            snare.play();
            break;
        case "R":
            var snare = new Audio("sounds/crash.mp3")
            snare.play();
            break;
        
    

    }
   // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  }));
  makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

        document.addEventListener("keypress", function(event) {
            makesound(event.key);

            buttonAnimation(event.key); 
        });
function buttonAnimation(Currentkey) {
    var activeButton = document.querySelector("." + Currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}