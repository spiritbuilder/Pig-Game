

let scores, roundScore, activePlayer, dice;
init(); 

//dice= Math.round((Math.random()*6));

//document.querySelector('#current-'+ activePlayer).textContent = dice;




document.querySelector(".dice").style.display= "none";

document.getElementById('current-0').textContent=0;
document.getElementById("score-0").textContent=0;
document.getElementById("current-1").textContent=0;
document.getElementById("score-1").textContent=0;

document.querySelector(".btn-roll").addEventListener("click", function(){
    let dice= Math.ceil((Math.random()*6));
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display= "block";
    console.log(dice);
    diceDOM.src="dice"+dice+".jpg";
    
if(dice!==1){
    roundScore+=dice;
    document.getElementById("current-"+activePlayer).textContent=roundScore;
}else{
    roundScore=0;
    document.getElementById("current-"+activePlayer).textContent=roundScore;
    activePlayer === 1 ? activePlayer=0 : activePlayer=1;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display= "none";  
    }
    
})
document.querySelector(".btn-hold").addEventListener("click", function(){
  scores[activePlayer]+= roundScore;
console.log(scores);
roundScore=0;
document.getElementById("current-"+activePlayer).textContent=roundScore;
  document.getElementById("score-"+activePlayer).textContent= scores[activePlayer];
if(scores[activePlayer]>=200){
    let playername= activePlayer+1;
    document.querySelector("#name-"+activePlayer).textContent= "PLAYER "+playername+" WINS!";
    document.querySelector(".btn-roll").style.display="none";
}else{nextplayer();}
  
    
})

var nextplayer=()=>{
    activePlayer === 1 ? activePlayer=0 : activePlayer=1;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
}
function init(){
    
    scores=[0,0]
    roundScore=0;
    activePlayer=0;
    document.querySelector(".dice").style.display= "none";

    document.querySelector(".btn-roll").style.display="block";

    document.getElementById('current-0').textContent=0;
    document.getElementById("score-0").textContent=0;
    document.getElementById("current-1").textContent=0;
    document.getElementById("score-1").textContent=0;
    document.getElementById("name-0").textContent="PLAYER 1";
    document.getElementById("name-1").textContent="PLAYER 2";
}
    document.querySelector(".btn-new").addEventListener("click", init);