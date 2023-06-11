import {
  chosenPlayer,
  loadGamePlay, onButtonClickShowFlex, onButtonClickShowGrid, startGame
} from "./functions.js"
import { display_handler, game_controller } from "./global.js"

// loadGamePlay()
// Handles The Rolling of the die
// The function takes in the number of steps to be taken
// Also Facilitates the movement of the prop
// Check if there is any game in play if yes play.innerHtml = resume


// document.addEventListener('change', () => {
game_controller.game_state ?
  loadGamePlay() :
  onButtonClickShowFlex('play-game', 'choose-player');
// })


// startGame()

chosenPlayer()

// game_controller.game_state

// Allow user to choose a player
