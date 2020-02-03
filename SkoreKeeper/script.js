

var scr1 = document.getElementById("scr1");
var scr2 = document.getElementById("scr2");

var player1 = document.getElementById("p1");
var player2 = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var numInput = document.querySelector("input");
var pTill = document.getElementById("gameLimit");

var p1 =0;
var p2 =0;
var playTill = 5;
var gameOver = false;

pTill.textContent=playTill;
    numInput.addEventListener("change",function()
    {
        playTill = numInput.value;
        pTill.textContent = playTill;
    });

    player1.addEventListener("click",function()
    {   if(!gameOver)
        {
        p1++;
        scr1.textContent = p1;
        if(p1 == playTill)
        {
            gameOver= true;
            scr1.style.color="green";
        }
        }
    });
    player2.addEventListener("click",function()
    {
        if(!gameOver)
        {
        p2++;
        scr2.textContent = p2;
        if(p2 == playTill)
        {
            gameOver= true;
            scr2.style.color="green";
        }
        }
    });
    reset.addEventListener("click",function()
    {
        p1 = 0;
        p2 = 0;
        scr1.textContent=0;
        scr2.textContent=0;
        gameOver=false;
        scr1.style.color="black";
        scr2.style.color="black";
    });

