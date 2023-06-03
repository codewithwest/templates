// import { start_point } from "./gamelogic.js"

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
      `<div class="landing-cards steps card-land${coun} card-bg">${x}</div>`
  }
}

game_cont.innerHTML += `<div class="landing-cards card-land34 blue">Finish</div>`
document.querySelectorAll('.no-box').forEach(elem => elem.style.boxShadow = "none")
lit_cards = document.querySelectorAll('.steps')
lit_cards.forEach(element => {
  element.addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = "flex"
    for (let pi = 0; pi < lit_cards.length; pi++) {
      lit_cards[pi].innerHTML = ""
    }
    element.innerHTML += `
     <div class="plyng-box d-flex  center-content">
                    <div class="box-cont d-flex center-content">
                        <div class="top"></div>
                        <div class="front"></div>
                        <div class="back"></div>
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                </div>`
  })
});


document.querySelector('.collapse-mes').addEventListener('click', () => {
  document.querySelector('.pop-up').style.display = "none"
})

die_roll.addEventListener('click', () => {
  let r = Math.floor((Math.random() * 6) + 1)
  console.log(sessionStorage.getItem('game-state'))
  if (sessionStorage.getItem('game-state') == 0) for (let pi = 0; pi < lit_cards.length; pi++) {
    lit_cards[pi].innerHTML = ""
  }
  else setTimeout(() => movePlayer(r), 1000)
  die_val.innerHTML = r
})
sessionStorage.setItem('position', 0)


function movePlayer(no_of_stps) {
  if (no_of_stps == 6) {
    let res = parseInt(parseInt(document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '')) + 4000)
    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${res}</h2>`
  }
  let nxt_step = parseInt(sessionStorage.getItem('position'))
  console.log(nxt_step)
  lit_card = document.querySelectorAll('.steps')
  document.querySelector('.card-land-1').innerHTML = 'Start'

  if ((nxt_step + no_of_stps) < lit_card.length + 1) {
    for (let pi = 0; pi < lit_card.length; pi++) {
      lit_card[pi].innerHTML = ""
    }
    let multArr =
      [
        [8, 11], [9, 17], [10, 16], [11, 15], [12, 10], [13, 9],
        [14, 8], [15, 14], [16, 13], [17, 12], [21, 24], [22, 27],
        [23, 30], [24, 31], [25, 32], [26, 28], [27, 25], [28, 21],
        [29, 22], [30, 23], [31, 26], [32, 29]
      ]
    // let tot = 0
    let tot = nxt_step + no_of_stps
    console.log(tot)
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
    let res = document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '') - card_mes_list[nxt_step + no_of_stps][2]

    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${res}</h2>`
    document.querySelector('.collapse-mes').addEventListener('click', () => {
      document.querySelector('.pop-up').style.display = "none"
    })
    document.querySelector('.pop-up').style.display = "flex"
    sessionStorage.setItem('position', tot)
    let k = []
    let l = []
    multArr.forEach(element => {
      k.push(element[0])
      l.push(element[1])
    });

    k.indexOf(tot) !== -1 && l.includes(tot) ? tot = l[k.indexOf(tot)] : tot

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
  console.log(card_mes_list[3])
  let card_check = document.querySelector('.coins').children[0].innerHTML.replace('Cash<br>', '')
  if (card_check < card_mes_list[nxt_step + no_of_stps][2]) {
    sessionStorage.setItem('game-state', 0)
    document.querySelector('.play-game').style.display = 'flex'
    document.querySelector('.die-val').style.display = 'none'
    document.querySelector('.die-roll').style.display = 'none'
    document.querySelector('.coins').innerHTML = `<h2>Cash<br>${0}</h2>`
    document.querySelector('.pop-up').style.display = "none"
    for (let pi = 0; pi < lit_card.length; pi++) {
      lit_card[pi].innerHTML = ""
    }
    alert('ýou lose')
  }

}


