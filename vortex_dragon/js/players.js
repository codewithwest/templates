import { display_handler } from './global.js'

let player_chosen_choices, player_chosen_button, player_chosen_cont,
    choose_player_collapse_button
// player_chosen_cont = document.querySelector('')

for (let index = 0; index < 20; index++) {
    document.querySelector('.choose-player-players').innerHTML +=
        `<button class="player-choice">
        <img class="fill" src="./images/${'logo'}.jpg" alt="">
        </button>`
}
player_chosen_choices = document.querySelectorAll('.player-choice')

player_chosen_cont = document.querySelector('.player-chosen')
player_chosen_button = document.querySelector('.collapse-player-chosen-pop-up')
choose_player_collapse_button = document.querySelector('.choose-player-collapse')

player_chosen_choices.forEach(el => {
    el.addEventListener('click', (e) => {
        player_chosen_cont.children[0].children[0].src = "./images/logo.jpg"
        player_chosen_cont.children[1].children[0].innerHTML = `${el.className}`
        display_handler.displayGrid('player-chosen')
    })
}
)

player_chosen_button.addEventListener('click', (e) => {
    display_handler.displayNone('player-chosen')
})
choose_player_collapse_button.addEventListener('click', (e) => {
    display_handler.displayNone('choose-player')
})
// /