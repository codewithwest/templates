import { displayHandler } from "./constFunctions.js"
export const display_handler = new displayHandler()

// import { cash_cont } from "./gamelogic.js"
import { card_mes_list } from "./global.js"

export let game_cont, cards, blanks,
  lit_cards, die_roll, die_val, lit_card
game_cont = document.querySelector('.cover-cont')
cards = document.querySelector('.landing-cards')
die_roll = document.querySelector('.die-roll')
die_val = document.querySelector('.die-val')


blanks = [11, 18, 33, 32, 8, 9, 10,
  23, 31, 29, 30, 14, 7, 6, 13, 28,
  36, 41, 43, 48, 55, 50, 52, 45, 59,
  40, 47, 54]
let coun = 0
game_cont.innerHTML += `<div class="landing-cards card-land-1 green">Start</div>`
for (let x = 0; x < 61; x++) {
  if (blanks.includes(x))
    game_cont.innerHTML +=
      `<div class="landing-cards par-bg no-box"></div>`
  else {
    coun++
    game_cont.innerHTML +=
      `<div class="landing-cards steps card-land${coun} card-bg">${""}</div>`
  }
}

game_cont.innerHTML += `<div class="landing-cards card-land34 blue">Finish</div>`
document.querySelectorAll('.no-box').forEach(elem => elem.style.boxShadow = "none")
lit_cards = document.querySelectorAll('.steps')
lit_cards.forEach(element => {
  element.addEventListener('click', (e) => {
    // Checks game has started to display card pop
    sessionStorage.getItem('game-state') < 1 || element.innerHTML.length < 1
      ? e.preventDefault() :
      display_handler.displayFlex('pop-up')
  })
});

// Collapses the game on tap display modal
document.querySelector('.collapse-mes').addEventListener('click', () => {
  display_handler.displayNone('pop-up')
})


// Handles The Rolling of the die
die_roll.addEventListener('click', () => {
  // Generates a random value between 0 and 7
  let r = Math.floor((Math.random() * 6) + 1)
  if (sessionStorage.getItem('game-state') == 0) for (let pi = 0; pi < lit_cards.length; pi++) {
    lit_cards[pi].innerHTML = ""
  }
  else setTimeout(() => movePlayer(r), 1000)
  die_val.innerHTML = r
})
sessionStorage.setItem('position', 0)

// The function takes in the number of steps to be taken
// Also Facilitates the movement of the prop
function movePlayer(no_of_stps) {
  // Checks if the no of steps equal to six
  if (no_of_stps == 6) {
    // Rewards Player with 40 points
    let res = parseInt(parseInt(document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '')) + 40)
    // Updades the new cash total
    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${res}</h2>`
  }
  // Gets the current position from the session storage value
  let nxt_step = parseInt(sessionStorage.getItem('position'))
  // Gets all the available cards to land on
  lit_card = document.querySelectorAll('.steps')
  // Changes the starting position inner html to start
  document.querySelector('.card-land-1').innerHTML = 'Start'
  // Checks if the total number of step plus the current location is 
  // not over the allowed total steps
  if ((nxt_step + no_of_stps) < lit_card.length + 1) {
    // Finds the car that had the prop and sets its innerhtml to ""
    for (let pi = 0; pi < lit_card.length; pi++) {
      lit_card[pi].innerHTML = ""
    }
    // Defines all the cards that don't make up the maze
    let multArr =
      [
        [8, 11], [9, 17], [10, 16],
        [11, 15], [12, 10], [13, 9],
        [14, 8], [15, 14], [16, 13],
        [17, 12], [21, 24], [22, 27],
        [23, 30], [24, 31], [25, 32],
        [26, 28], [27, 25], [28, 21],
        [29, 22], [30, 23], [31, 26],
        [32, 29]
      ]
    // Calculates the final position
    let tot = nxt_step + no_of_stps
    // Pops up the card message at the tot value point
    document.querySelector('.card-mes').innerHTML = `
    <button class="d-flex center-content collapse-mes">X</button>
    <div class="fill center-content">
    <h1 class'm-auto'> ${card_mes_list[tot][0]}<h1>
    </div>
    <div class="text text-center m-auto">
    <h3 class'm-auto'> ${card_mes_list[tot][1]}<h3>
    </div>
    <div class="text m-auto center-content">
    <h2 class'm-auto'>R${card_mes_list[tot][2]}<h2>
    </div>
    `
    // Gets the cost and calculate the difference in money and card cost
    let res = document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '') - card_mes_list[nxt_step + no_of_stps][2]
    //  Updates the remaining coin amount  
    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${res}</h2>`
    // Hamdles the pop up message collapse
    document.querySelector('.collapse-mes').addEventListener('click', () => {
      display_handler.displayNone('pop-up')
    })
    // Pops up the display message on puppet land
    display_handler.displayFlex('pop-up')
    // Updates the storageitem position
    sessionStorage.setItem('position', tot)
    let k = []
    let l = []
    multArr.forEach(element => {
      k.push(element[0])
      l.push(element[1])
    });
    // get the original position of the prop
    k.indexOf(tot) !== -1 && l.includes(tot) ? tot = l[k.indexOf(tot)] : tot
    // drops the prop on the right card
    document.querySelector(`.card-land${tot}`).innerHTML += `
  <div class="plyng-box d-flex  center-content">
                  <div class="box-cont d-flex center-content">
                      <div class="top"></div>
                      <div class="front"></div>
                      <div class="back"></div>
                      <div class="left"></div>
                      <div class="right"></div>
                  </div>

              </div>`
    l.indexOf(tot) !== -1 && k.includes(tot) ? tot = k[l.indexOf(tot)] : tot
  }
  else if ((nxt_step + no_of_stps) === 34) {
    for (let pi = 0; pi < lit_card.length; pi++) {
      lit_card[pi].innerHTML = ""
    }
    document.querySelector(`.card-land${34}`).innerHTML += `
    <div class="plyng-box d-flex  center-content">
                    <div class="box-cont d-flex center-content">
                        <div class="top"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>`

    setTimeout(() => alert('Ýou win'), 2000)
  }
  else {
    alert('roll again')
    return
  }

  let card_check = document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '')
  if (card_check < card_mes_list[nxt_step + no_of_stps][2]) {
    sessionStorage.setItem('game-state', 0)
    display_handler.displayFlex('play-game')
    display_handler.displayNone('die-val')
    display_handler.displayNone('die-roll')
    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${0}</h2>`
    display_handler.displayNone('pop-up')

    for (let pi = 0; pi < lit_card.length; pi++) {
      lit_card[pi].innerHTML = ""
    }
    alert('ýou lose')
  }

}


