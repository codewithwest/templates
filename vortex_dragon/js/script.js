import {
  loadGamePlay, onButtonClickShowGrid, startGame
} from "./functions.js"
import { display_handler, game_controller } from "./global.js"

// loadGamePlay()
// Handles The Rolling of the die
// The function takes in the number of steps to be taken
// Also Facilitates the movement of the prop
// console.log(game_controller.game_state)
// Check if there is any game in play if yes play.innerHtml = resume
game_controller.game_state ?
  console.log('Game already in Progreess') :
  onButtonClickShowGrid('play-game', 'choose-player');

// startGame()

// Allow user to choose a player
