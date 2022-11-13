function displayAdeline() {
  selected();

  // Insert your full name here
  document.getElementById("summary-title").innerHTML = "ADELINE";

  // Insert stats here
  document.getElementById("summary-text").innerHTML =
    '"What do you call poop that looks like turtles?"' +
    "<br>" +
    "<br>" +
    '<img class="potato" src="./res/potato.jpg" />' +
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
    "After the Hareruya day we studied tgt and I installed the Anya Cursor, we went to Brunetti's with Calvin and talked about Mr. J."

    // Insert stats here
    document.getElementById("bday-card-content").innerHTML = 
    "Now for the actual birthday card ..." +
    "<br>" +
    "<br>" +
    "<br>" +
    "Hey Ad, congrats on becoming a young adult, you're no more a teen but hey, at least you're one step closer to becoming a doctor, a.k.a. med cert supplier." +
    "<br>" +
    "<br>" +
    "I will miss all your dry jokes and all the times our minds would make fun of the same stuff before we even say it. Can't believe I've descended to your level of humour :P. " +
    "Hopefully, we'll get to meet every so often, but probs not as often as before *thank god*" +
    "<br>" +
    "<br>" +
    "Anywayyyys, jokes aside, I am glad to have met you, wish it could've been earlier. May your journey in life be as smooth as your turdles too. Happy Birthday!!!" +
    "<br>" +
    "<br>" +
    "Oh yeah, hope you like the Kirby too, was gonna make a knife for it, but ceebs." +
    "<br>" +
    "<br>" +
    "P.S. Yes, I did make this website green on purpose."

  // Select your sprite by changing the number
  document.getElementById("sprite").src = "./res/sprite-ad.png";
  var y = document.getElementById("bday-card-content");
  y.style.padding = "40px 60px 70px 60px";
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

  const hidden = document.getElementById("bday-card-content");
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

function goToPage() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}