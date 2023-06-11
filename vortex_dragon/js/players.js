import { display_handler } from './global.js'

let player_chosen_choices, player_chosen_button, player_chosen_cont,
    choose_player_collapse_button, avater_data
// player_chosen_cont = document.querySelector('')
avater_data = await fetch('./js/characters.json')
    .then(async res => await res.json())
avater_data.forEach(element => {

    document.querySelector('.choose-player-players').innerHTML +=
        `<button class="player-choice ${element.name}">
        <img class="fill" src="./images/${'logo'}.jpg" alt="">
        </button>`
})
player_chosen_choices = document.querySelectorAll('.player-choice')

player_chosen_cont = document.querySelector('.player-chosen')
player_chosen_button = document.querySelector('.collapse-player-chosen-pop-up')
choose_player_collapse_button = document.querySelector('.choose-player-collapse')

let count = 0
player_chosen_choices.forEach(el => {
    let avater_chosen = el.className.split(' ')[1]
    el.addEventListener('click', (e) => {
        player_chosen_cont.children[0].children[0].src = "./images/logo.jpg"
        player_chosen_cont.children[1].children[0].innerHTML = `${avater_chosen}`
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