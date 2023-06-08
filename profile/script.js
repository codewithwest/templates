let projectImgs, projNav, webapps, websites, desktop, mobile, links

projectImgs = document.querySelectorAll('.proj-link')
projNav = document.querySelectorAll('.proj-nav')
links = {
    websites: ['https://connex-clone.vercel.app/',
        'https://full-stack-101.vercel.app/',
        'https://velocityvi.000webhostapp.com/', ''],
    webapps: ['https://west-dynamics-fp9t.vercel.app/', '', '', ''],
    mobile: ['', '', '', ''],
    desktop: ['', '', '', '']
}
function setBackgrounds(tab) {
    projectImgs.forEach((element, projectImgs, projNav) => {
        element.setAttribute('href', `${links[tab][projectImgs]}`)
        element.children[0].setAttribute('class', 'proj-pic')
        element.children[0].setAttribute('class', 'proj-pic trans')
        // element.children[0].classList.add('')
        element.children[0].setAttribute('src', `assets/${tab}/${projectImgs}.png`)
    });
}
console.log(projNav[0])
projNav[0].style.background = 'red'
setBackgrounds('websites')

projNav.forEach((nav, tabs) => {

    nav.addEventListener('click', (e) => {
        e.preventDefault()

        let tabs = nav.innerHTML.trim().replace(' ', '').toLowerCase()
        nav.setAttribute('active', '')
        setBackgrounds(tabs)
        for (let key in projNav) {
            let linkTxt = projNav[key].innerHTML.trim().replace(' ', '').toLowerCase()
            if (linkTxt == tabs) projNav[key].style.background = 'red'
            else projNav[key].style.background = 'inherit'
        }
    })


});

