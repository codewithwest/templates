import { home } from "./home.js"

let mainNav, content, title
title = document.querySelector('.title')
// get content div from the indexedDB.html file
content = document.querySelector('.content')
// get the nav links
mainNav = document.querySelectorAll('.nav-a')

mainNav.forEach((el) => {
    console.log(localStorage.tab)
    setContent(localStorage.tab ? localStorage.tab : 'home')

    el.addEventListener('click', async (e) => {
        if (el.style.color == 'green') e.preventDefault()
        else {
            let stripped = el.innerHTML.toString().trim().replace(' ', '').toLowerCase()
            await setContent(stripped)
        }
    })
})
async function setContent(clicked) {
    let cont = await fetch(`./static/views/${clicked}.html`).
        then((c) => c.text()).
        catch(e => e)
    content.innerHTML = ""
    content.innerHTML = cont
    let title = document.querySelector('.title')
    title.innerHTML = clicked.toUpperCase()
    localStorage.setItem("tab", `${clicked}`);

    for (let key = 0; key < mainNav.length; key++) {
        // Look through linns and change ass per below
        let linkTxt = mainNav[key].innerHTML.toString().replace(' ', '').toLowerCase().trim()
        if (linkTxt == clicked) {
            mainNav[key].style.boxShadow = '-2px -2px rgb(5, 229, 5, .5)'
            mainNav[key].style.color = 'green'
            mainNav[key].style.fontWeight = 'bolder'
        }
        else {
            mainNav[key].style.boxShadow = '1px 1px rgb(229, 229, 229, .5)'
            mainNav[key].style.color = 'inherit'
        }
    }
    if (clicked == 'home') home()
}