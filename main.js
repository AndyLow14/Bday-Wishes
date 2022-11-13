function displayAdeline() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "Adeline";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    '"Don\'t give up on your dreams, go back to sleep."' +
    "<br>" +
    "<br>" +
    "<u>" +
    "Skills" +
    "</u>" +
    "<br>" +
    " CSS/HTML 56/100" +
    "<br>" +
    "Java 89/100" +
    "<br>" +
    "C 0/100" +
    "<br>" +
    "RGB Keyboard +500 HP" +
    "<br>" +
    "<br>" +
    "<u>" +
    "Projects" +
    "</u>" +
    "<br>" +
    "| Walorant | Tesla Hacking |" +
    "<br>" +
    "| Nasa Artemis 1 | MYKI Alert App |";

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./res/sprite-ad.png";
}

function changeBlue() {
  var y = document.getElementById("summary-title");
  y.style.backgroundColor = "#7F8DE2";

  var x = document.querySelectorAll("button");
  x.forEach((button) => {
    if (button.id != "selector" && button.id != "button-ad") {
      button.style.backgroundColor = "#7F8DE2";
    }
  });
}

function changePink() {
  var y = document.getElementById("summary-title");
  y.style.backgroundColor = "#ee959e";
  var x = document.querySelectorAll("button");
  x.forEach((button) => {
    if (button.id != "selector" && button.id != "button-ad") {
      button.style.backgroundColor = "#ee959e";
    }
  });
}

function changeGreen() {
  var y = document.getElementById("summary-title");
  y.style.backgroundColor = "#77DD77";
  var x = document.querySelectorAll("button");
  x.forEach((button) => {
    if (button.id != "selector" && button.id != "button-ad") {
      button.style.backgroundColor = "#77DD77";
    }
  });
}

// Used to check if any name is selected
function selected() {
  // Adds borders to character card
  const title = document.getElementById("summary-title");
  title.style.borderBottom = "solid 4px var(--black)";
  title.style.borderRight = "solid 4px var(--black)";
  title.style.borderTopRightRadius = "0px";

  const body = document.getElementById("summary-body");
  body.style.borderRight = "solid 4px var(--black)";
  body.style.paddingTop = "90px";

  const hidden = document.getElementById("hidden");
  hidden.style.borderRight = "solid 4px var(--black)";

  // Removes image
  const image = document.getElementById("cat-photo");
  image.style.display = "none";

  // Displays your sprite
  const summary = document.querySelector(".summary-img");
  summary.style.display = "block";

  // Displays the select button
  const selectCharacter = document.getElementById("characterSelect");
  selectCharacter.style.display = "block";
}