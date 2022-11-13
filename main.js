function displayAdeline() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "ADELINE";

  // Insert your details here
  document.getElementById("summary-text").innerHTML =
    '"What do you call poop that looks like turtles?"' +
    "<br>" +
    "<br>" +
    "<u>" +
    "Skills" +
    "</u>" +
    "<br>" +
    "BIOMED H1/100" +
    "<br>" +
    "SLEEPING 100/100" +
    "<br>" +
    "DRY HUMOUR 6.9/100" +
    "<br>" +
    "NINTENDO SWITCH +50 ATK" +
    "<br>" +
    "<br>" +
    "<u>" +
    "Met at" +
    "</u>" +
    "<br>" +
    "Outside Hareruya, Lincoln Square" +
    "<br>" +
    "<br>" +
    "<u>" +
    "Date met" +
    "</u>" +
    "<br>" +
    "Sometime in July 2022." +
    "<br>" +
    "After the Hareruya day we studied tgt and I installed the Anya Cursor, we went to Brunetti's with Calvin and talked about Javier."

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
  
  if (screen.width > 1000) {
  
  // Adds borders to character card only on desktop
  const title = document.getElementById("summary-title");
  title.style.borderBottom = "solid 4px var(--black)";
  title.style.borderRight = "solid 4px var(--black)";
  title.style.borderTopRightRadius = "0px";

  const body = document.getElementById("summary-body");
  body.style.borderRight = "solid 4px var(--black)";
  body.style.paddingTop = "90px";

  const hidden = document.getElementById("hidden");
  hidden.style.borderRight = "solid 4px var(--black)";

  }

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
