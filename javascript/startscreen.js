//Start Screen Logic

let init = function () {
  const startBtn = document.querySelector("#startButton");
  const mainBrd = document.querySelector("#mainBoard");
  const srtScreen = document.querySelector("#startScreen");
  const rstArea = document.querySelector("#resultArea");
  const btnSelection = document.querySelector("#buttonSelection");

  if ((startBtn.style.display = "inline-block;")) {
    srtScreen.classList = "hide";
    srtScreen.removeAttribute("id");
    rstArea.style.display = "none";
    btnSelection.style.display = "none";
    mainBrd.removeAttribute("id");
    window.setTimeout(function () {
      mainBrd.classList = "mainBoardTwo";
    }, 2100);
    window.setTimeout(function () {
      rstArea.style.display = "flex";
      btnSelection.style.display = "flex";
    }, 3000);
  }

  var str =
      "<h2 class='title'><span style='color:yellow;'>Rock</span> - <span style='color:rgba(163, 214, 255, 0.74);'>Paper</span> - <span style='color:red;'>Scissors</span></h2>",
    i = 0,
    isTag,
    text;

  (function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById("typewriter").innerHTML = text;

    var char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    if (isTag) return type();
    setTimeout(type, 60);
  })();
};