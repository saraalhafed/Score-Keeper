const winscoreValue =document.getElementById("winscore").value;
const score_player1 = document.getElementById("scor-player1");
const score_player2 = document.getElementById("scor-player2");
const btn_player1 = document.getElementById("btn-player1");
 const btn_player2= document.getElementById("btn-player2");
const btn_reset = document.getElementById("btn-reset");

let winscoreCount =winscoreValue ;
let scoreplayer1 = 0;
let scoreplayer2 = 0;

btn_player1.addEventListener("click",()=>{

 if(scoreplayer1 < winscoreValue){
    scoreplayer1 += 1;
    score_player1.textContent =scoreplayer1;
}else{
    btn_player1.disabled=true;
    btn_player2.disabled=true;
    score_player1.style.color="green";
    score_player2.style.color="red";
}
});

btn_player2.addEventListener("click",()=>{

    if(scoreplayer2 < winscoreValue){
       scoreplayer2 += 1;
       score_player2.textContent =scoreplayer2;
   }else{
       btn_player1.disabled=true;
       btn_player2.disabled=true;
       score_player2.style.color="green";
       score_player1.style.color="red";
   }
   });

   
btn_reset.addEventListener("click",()=>{
     scoreplayer1 = 0;
     scoreplayer2 = 0;
     score_player1.textContent =0;
     score_player2.textContent =0;
    btn_player1.disabled=false;
    btn_player2.disabled=false;
    score_player1.style.color="black";
    score_player2.style.color="black";
   
   });