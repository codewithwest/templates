import { display_handler } from "./global.js"

export {
    loadGamePlay,
    handleActiveCardSteps,
    collapseGameMessage,
    rollADieController,
    movePlayer,
    onButtonClickShowFlex,
    onButtonClickShowGrid,
    onButtonClickCollapse,
    startGame,
    chosenPlayer
}

function loadGamePlay(_blank_cards, _game_cont) {
    let _game_cont_div = document.querySelector(`${_game_cont}`)
    let coun = 0
    _game_cont_div.innerHTML += `<div class="landing-cards card-land-1 green">Start</div>`
    for (let x = 0; x < 61; x++) {
        if (_blank_cards.includes(x))
            _game_cont_div.innerHTML +=
                `<div class="landing-cards par-bg blank-box"></div>`
        else {
            coun++
            _game_cont_div.innerHTML +=
                `<div class="landing-cards steps card-land${coun} card-bg">${coun}</div>`
        }
    }
    _game_cont_div.innerHTML += `<div class="landing-cards card-land34 blue">Finish</div>`
    // set Blanks bg
    document.querySelectorAll('.blank-box').forEach(elem => elem.style.boxShadow = "none")

}
/**
 * 
 */
function handleActiveCardSteps() {
    lit_cards = document.querySelectorAll('.steps')
    lit_cards.forEach(element => {
        element.addEventListener('click', (e) => {
            // Checks game has started to display card pop
            game_state < 1 || element.innerHTML.length < 1
                ? e.preventDefault() :
                display_handler.displayFlex('pop-up')
        })
    });
}

function collapseGameMessage() {
    // Collapses the game on tap display modal
    document.querySelector('.collapse-mes').addEventListener('click', () => {
        display_handler.displayNone('pop-up')
    })
}

function rollADieController(_die_roll, _set_die_value) {
    let die_roll_action = document.querySelector(_die_roll)
    die_roll.addEventListener('click', () => {
        // Generates a random value between 0 and 7
        let r = Math.floor((Math.random() * 6) + 1)
        if (game_state == 0) for (let pi = 0; pi < lit_cards.length; pi++) {
            lit_cards[pi].innerHTML = ""
        }
        else setTimeout(() => movePlayer(r), 1000)
        _set_die_value.innerHTML = r
    })
}

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

function onButtonClickShowFlex(_clicked_button, _div_to_pop_up) {
    // Collapses pops up the any modal
    document.querySelector(`.${_clicked_button}`).addEventListener('click', () => {
        display_handler.displayFlex(_div_to_pop_up)
    })
}
function onButtonClickShowGrid(_clicked_button, _div_to_pop_up) {
    // Collapses pops up the any modal
    document.querySelector(`.${_clicked_button}`).addEventListener('click', () => {
        display_handler.displayGrid(_div_to_pop_up)
    })
}
function onButtonClickCollapse(_clicked_button, _div_to_collapse) {
    // Collapses the game on tap display modal
    document.querySelector(`.${_clicked_button}`).addEventListener('click', (e) => {
        e.preventDefault()
        display_handler.displayNone(_div_to_collapse)
    })
}

function startGame() {
    onButtonClickCollapse('select-player', 'choose-player')

}
function chosenPlayer() {

    setTimeout(() => {
        let all_select_player_btns = document.querySelectorAll('.select-player')
        all_select_player_btns.forEach((el, all_select_player_btns) => {
            el.addEventListener('click', (e) => {
                let avater_name = el.parentElement.children[0].innerHTML
                let say_name = new SpeechSynthesisUtterance(avater_name)
                // .speak(say_name)
                speechSynthesis.speak(say_name)
                game_controller.player_chosen = avater_name
                console.log(game_controller.player_chosen)
            })
        })
    }, 1000)

}