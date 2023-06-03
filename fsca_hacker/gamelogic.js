import {  game_state,  } from "./global.js"

let die_cont, play_game, die_val_in,die_btn, 
start_point,score_cont,cash, cash_cont,score
cash = 0
score = 0
die_cont = document.querySelector('.die-cont')
play_game = document.querySelector('.play-game')
die_val_in = document.querySelector('.die-val')
die_btn = document.querySelector('.die-roll')
start_point = document.querySelector('.card-land-1')
score_cont = document.querySelector('.scoreboard')
cash_cont = document.querySelector('.coins')
score_cont.innerHTML = `<h2>Score<br>${0}</h2>`
cash_cont.innerHTML = `<h2>Cash<br>${0}</h2>`
if (sessionStorage.getItem('game-state') == 0) {
    play_game.style.display='flex'
    
} else {
    
}
play_game.addEventListener('click',()=>{
    sessionStorage.setItem('game-state', 1)
    play_game.style.display='none'
    die_val_in.style.display='flex'
    die_btn.style.display='flex'
    start_point.innerHTML=`<div class="plyng-box d-flex center-content">
    <div class="box-cont d-flex center-content">
        <div class="top"></div>
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
    </div>
</div>`
score_cont.innerHTML = `<h2>Score<br>${0}</h2>`
cash_cont.innerHTML = `<h2>Cash<br>${6000}</h2>`

})



export {die_cont, play_game, die_val_in,die_btn, start_point}
