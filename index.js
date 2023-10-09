var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

   
  })
}

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key){
    case "w":
      var highTom = new Audio("./sounds/crash-cymbal.mp3");
      highTom.play();
      break;

    case "a":
      var highHats = new Audio("./sounds/hi-hat.mp3");
      highHats.play();
      break;

    case "s":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var highTom = new Audio('./sounds/high-tom.mp3');
      highTom.play();
      break;
    
    case "j":
      var rideCymbal = new Audio("./sounds/ride-cymbal.mp3");
      rideCymbal.play();
      break;

    case "k":
      var midTom = new Audio("./sounds/mid-tom.mp3");
      midTom.play();
      break;

    case "l":
      var floorTom = new Audio("./sounds/floor-tom.mp3");
      floorTom.play();
      break;

    case "spc":
      var kickBass = new Audio("./sounds/kick-bass.mp3");
      kickBass.play();
      break;

      default: console.log(key);

  };
}

function buttonAnimation(currentKey){

  if (currentKey === " "){
    var activeButton = document.querySelector(".spc");
    var kickBass = new Audio("./sounds/kick-bass.mp3");
    kickBass.play();
  }

  else{
    var activeButton = document.querySelector("."+ currentKey);
  }
  

  activeButton.classList.add("pressed");

  setTimeout(function (){
    activeButton.classList.remove("pressed");
  })
}