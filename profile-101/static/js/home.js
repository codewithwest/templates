

export let home = () => {
    (
        () => {

            let projBtns, projDivs, cardObj, stripEl
            cardObj = {
                web: [
                    ['projects/web/velocityvi',
                        ["Velocity VI", "A masterpiece full stack ecommerce web platform, built using, bootstrap on the front end and PHP, jQuery and Ajax for MYSQL database calls.With best practices(MVC) built in the code.The payment process is completed with a world-wide payment gateway API"],
                        ['php', 'bootstrap', 'mysql'],
                        ['https://velocityvi.000webhostapp.com/', 'https://github.com/codewithwest/templates/tree/master/velocity_vi_php']],
                    ['projects/web/connex',
                        ["Connex Clone", "A Front-end design clone of the <a class='link' href='https://connex.co.za'> Connex store </a>, clones only the landing page with drop downs, the project was use to demonstrate the manipulation of the DOM using pure JavaScript"],
                        ['css', 'js', 'mysql'],
                        ['https://codewithwest.github.io/templates/connex_clone/', 'https://github.com/codewithwest/templates/tree/master/connex_clone']],
                ],
                mobile: [
                    ['projects/mobile/flutter',
                        ["Flutter Helix", "A mobile app, built in flutter of dart. It uses firebase as a data base to pass in data from firestore, allows for ofline addition of posts and syncs on when back online"],
                        ['flutter', 'firebase', 'dart'],
                        ['https://velocityvi.000webhostapp.com/', 'https://github.com/codewithwest/templates/tree/master/velocity_vi_php']],
                    ['projects/mobile/react-native',
                        ["React Cross", "A mobile React-Native App, Uses react-bottom tabs to navigate across tabs to display list off products, it features a login and register screen"],
                        ['react', 'firebase', 'mysql'],
                        ['https://codewithwest.github.io/templates/connex_clone/', 'https://github.com/codewithwest/templates/tree/master/connex_clone']],

                ],
            }
            // console.log(projBtns)

            projBtns = document.querySelectorAll('.btns')
            projDivs = document.querySelectorAll('.proj-divs')
            laycards(cardObj, projBtns, 'web')
            projBtns.forEach((element) => {
                element.addEventListener('click', (e) => {
                    if (element.style.color == 'inherit') e.preventDefault()
                    else {
                        stripEl = element.innerHTML.toString().trim().replace(' ', '').toLowerCase()
                        laycards(cardObj, projBtns, stripEl)
                    }
                })
            });
        })()
}

function laycards(cardDict, navBtns, clickedEl) {
    let projCards = document.querySelector('.proj-overlay')
    projCards.innerHTML = ''
    // console.log(navBtns)
    for (let key = 0; key < navBtns.length; key++) {

        // for (let key in navBtns) {
        let linkTxt = navBtns[key].innerHTML.toString().replace(' ', '').toLowerCase().trim()
        if (linkTxt == clickedEl) {
            navBtns[key].style.boxShadow = '4px 4px rgb(5, 229, 5, .5)'
            navBtns[key].style.color = 'inherit'
            navBtns[key].style.fontWeight = 'bolder'
        }
        else {
            navBtns[key].style.boxShadow = '1px 1px rgb(229, 229, 229, .5)'
            navBtns[key].style.color = 'green'
        }
    }
    cardDict[clickedEl].forEach(element => {

        projCards.innerHTML += Card(element[0], element[1], element[2], element[3])

    })

}
function Card(dsplyImg, cardText, techStacksImgs, gitLink) {
    return `<div class="proj-card">
    <div class="proj-card-inner fill">
        <div class="proj-card-front fill d-flex">
                    <img class="fill" src="static/assets/${dsplyImg}.png" alt="Avatar">
                </div>
                <div class="proj-card-back fill">
                    <div class="card-header fill center-content">
                        <h1>${cardText[0]}</h1>
                    </div>
                    <div class="card-body d-flex center-content">
                        <p class="m-auto">${cardText[1]}.</p>
                    </div>
                    <div class="card-footer d-flex fill">
                        <div class="card-footer-tech d-flex fill">
                            <img src="static/assets/techStacks/${techStacksImgs[0]}.png" alt="">
                            <img src="static/assets/techStacks/${techStacksImgs[1]}.png" alt="">
                            <img src="static/assets/techStacks/${techStacksImgs[2]}.png" alt="">
                        </div>
                        <div class="card-footer-links d-flex fill">
                            <div class="d-flex fill">
                                <a class="links" href=" ${gitLink[0]}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"
                                        class="bi bi-browser-chrome" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                    </svg>
                                </a>
                            </div>
                            <div class="d-flex fill">
                                <a href="${gitLink[1]}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff"
                                        class="bi bi-github" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>`
}