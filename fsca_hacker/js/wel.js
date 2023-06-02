let wel_mes, game_ins, ins_btn, info_btn
wel_mes = document.querySelector('.welcome')
game_ins = document.querySelector('.ins-to-play-game')
ins_btn = document.querySelector('.ins-col-btn')
info_btn = document.querySelector('.info')



setTimeout(() => {
    wel_mes.style.display = "none"
    setTimeout(() =>
        game_ins.style.display = "flex"
        // game_ins.setAttribute('class', 'ins-to-play-game flex-col  center-content')
        , 1000)

}, 3000)

ins_btn.addEventListener('click', () => {
    game_ins.style.display = 'none'
    document.querySelector('.welcome-cont').style.display = 'none'
})
info_btn.addEventListener('click', () => {
    game_ins.style.display = 'flex'
    // game_ins.setAttribute('class', 'ins-to-play-game flex-col  center-content')
})

