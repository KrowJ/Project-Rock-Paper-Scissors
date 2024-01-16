let init = function() {
   const startBtn = document.querySelector("#startButton");
   const mainBrd = document.querySelector("#mainBoard");
   const srtScreen = document.querySelector('#startScreen');
    if (startBtn.style.display = "inline-block;") {
        startBtn.classList = ('hide');
        mainBrd.classList = "mainBoardTwo";
        mainBrd.removeAttribute('id');
        srtScreen.classList = ('hide');
        srtScreen.removeAttribute('id');
    }

    var str = "<h2 class='title'>Let's play | {<span style='color:yellow;font-family:VT323;font-family:VT323;font-size: 40px;'>Rock</span>} - {<span style='color:rgba(163, 214, 255, 0.74);font-family:VT323;;font-family:VT323;font-size: 40px;'>Paper</span>} - {<span style='color:red;font-family:VT323;font-family:VT323;font-size: 40px;'>Scissors</span>}</h2>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 70);
}());
};