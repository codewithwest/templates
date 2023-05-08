function element(parent, elements, divid, divclass) {
    var par = document.getElementById(parent);
    var div = document.createElement(`${elements}`);
    div.setAttribute('id', `${divid}`)
    div.setAttribute('class', `${divclass}`);
    par.appendChild(div);
}

//Resume Cont
element('content', 'div', 'resume', 'resume')
element('content', 'div', 'gallery', 'gallery')

// side and body div
element('resume', 'div', 'leftCont', 'leftCont')
element('resume', 'div', 'rightCont', 'rightCont')

//Working on the left Cont
//Image
element('leftCont', 'div', 'imageCont', 'imageCont')
element('imageCont', 'div', 'image', 'image')
document.getElementById('image').style.backgroundImage = "url(./assets/west.jpg)"

//Contacts
element('leftCont', 'div', 'contactsCont', 'contactsCont')
element('contactsCont', 'div', 'contacts', 'contacts')
element('contacts', 'p', 'contacts-p', 'contacts-p')
document.getElementById('contacts-p').appendChild(document.createTextNode('CONTACT'))
//email,location,linkedIn,gitHub
var contactList = ['jonaslekgau@gmail.com', 'Johannesburg,South Africa', 'Jonas Lekgau', 'Live Profile']
let contactLinks = ['mailto:jonaslekgau@gmail.com', '', 'https://www.linkedin.com/in/jonas-lekgau-w1327/', 'https://codewithwest.github.io/templates/profile-101/']
for (let co = 0; co < contactList.length; co++) {
    element('contacts', 'div', `contacts-d${co}`, 'contacts-d')
    element(`contacts-d${co}`, 'div', `contacts-d-icon${co}`, 'contacts-d-icon')
    document.getElementById(`contacts-d-icon${co}`).style.backgroundImage = `url(./assets/contacts${co}.png)`

    element(`contacts-d${co}`, 'a', `contacts-d-link${co}`, 'contacts-d-link')
    document.getElementById(`contacts-d-link${co}`).appendChild(document.createTextNode(contactList[co]))
    document.getElementById(`contacts-d-link${co}`).setAttribute('href', contactLinks[co])
}


// Skills
element('leftCont', 'div', 'skillsCont', 'skillsCont')
element('skillsCont', 'p', 'skills-p', 'skills-p')
document.getElementById('skills-p').appendChild(document.createTextNode('SKILLS'))
//ProgressBar divs
var skillsList = [
    ['HTML, CSS, BOOTSTRAP, SCSS', 95],
    ['JAVASCRIPT, JSON, REST API', 95],
    ['REACT, REACT-NATIVE', 85],
    ['PYTHON, PHP, NODE JS', 90],
    ['DART(FLUTTER)', 90],
    ['FIREBASE,MONGO, MYSQL', 85],
    ['C, C#', 60],
    ['GIT, GITHUB, CI/CD', 95],
    ['FIGMA', 85],
    ['DOCKER', 50],
    ['DEBUGGING', 95]]

for (let pb = 0; pb < skillsList.length; pb++) {
    element('skillsCont', 'div', `skills${pb}`, 'skills')
    document.getElementById(`skills${pb}`).appendChild(document.createTextNode(skillsList[pb][0]))

    element(`skills${pb}`, 'progress', `progress${pb}`, 'progress')
    document.getElementById(`progress${pb}`).setAttribute('type', 'progress')
    document.getElementById(`progress${pb}`).setAttribute('min', '0')
    document.getElementById(`progress${pb}`).setAttribute('max', '100')

    document.getElementById(`progress${pb}`).setAttribute('value', `${skillsList[pb][1]}`)

}

// right container
element('rightCont', 'div', 'right', 'right')
element('right', 'div', 'nameCont', 'nameCont')
element('nameCont', 'div', 'name', 'name')
element('name', 'p', 'name-p', 'name-p')
document.getElementById(`name-p`).appendChild(document.createTextNode('MANKGA TEBOGO JONAS LEKGAU'))
element('nameCont', 'div', 'line', 'line')

element('nameCont', 'div', 'title', 'title')
element('title', 'p', 'title-p', 'title-p')
document.getElementById(`title-p`).appendChild(document.createTextNode('WEB | SOFTWARE DEVELOPER'))

element('right', 'div', 'summaryCont', 'summaryCont')
element('summaryCont', 'div', 'summary-h', 'summary-h')
element('summary-h', 'p', 'summary-p', 'summary-p')
document.getElementById(`summary-p`).appendChild(document.createTextNode('SUMMARY'))
//element('summaryCont', 'div', 'line', 'line')

element('summaryCont', 'div', 'summary', 'summary')
element('summary', 'p', 'summary-text', 'summary-text')

document.getElementById(`summary-text`).appendChild(document.createTextNode('Solution/Test Driven web developer focused on but not limited to contributing to highly collaborative work environment and finding solutions. Proven project displayed experience developing websites using HTML,CSS,Node,Json,React, React-Native and JavaScript. Good knowledge of the best practices for web design, user experience, and speed.'))

// Projects Section
element('right', 'div', 'projectCont', 'projectCont')
element('projectCont', 'div', 'project-h', 'project-h')
element('project-h', 'p', 'project-p', 'project-p')
document.getElementById(`project-p`).appendChild(document.createTextNode('PROJECTS'))

// Mini projects div
element('projectCont', 'div', `project`, 'project')

var projects = [
    ['Velocity VI', 'Nov - Dec 2022', 'A masterpiece full stack ecommerce web platform, built using, bootstrap on the front end and PHP, jQuery and Ajax for MYSQL database calls.With best practices(MVC) built in the code.The payment process is completed with a world-wide payment gateway API',
        'https://velocityvi.000webhostapp.com/', 'https://github.com/codewithwest/templates/tree/master/velocity_vi_php'
    ],
    ['Connex Store clone', 'Jan 2023 - Current', "A Front-end design clone of the Connex store, clones only the landing page with drop downs, the project was use to demonstrate the manipulation of the DOM using pure JavaScript.",
        'https://codewithwest.github.io/templates/connex_clone/', 'https://github.com/codewithwest/templates/tree/master/connex_clone'],

]
for (let pc = 0; pc < projects.length; pc++) {
    element(`project`, 'div', `project-name-div${pc}`, 'project-name-div')
    element(`project-name-div${pc}`, 'div', `project-name${pc}`, 'project-name')
    document.getElementById(`project-name${pc}`).appendChild(document.createTextNode(projects[pc][0]))
    element(`project-name-div${pc}`, 'div', `project-date${pc}`, 'project-date')
    element(`project-date${pc}`, 'p', `project-date-p${pc}`, 'project-date-p')
    document.getElementById(`project-date-p${pc}`).appendChild(document.createTextNode(projects[pc][1]))
    element(`project`, 'div', `project-desc${pc}`, 'project-desc')
    element(`project-desc${pc}`, 'p', `project-desc-l${pc}`, 'project-desc-l')
    //element(`project-desc-l${pc}`, 'p', `project-desc-p${pc}`, 'project-desc-p')
    document.getElementById(`project-desc-l${pc}`).appendChild(document.createTextNode(projects[pc][2]))

    //Live Site Link
    //element(`project`, 'a', `project-site${pc}`, 'project-link')
    element(`project`, 'div', `project-links${pc}`, 'project-links')
    element(`project-links${pc}`, 'a', `project-site${pc}`, 'project-site')
    document.getElementById(`project-site${pc}`).appendChild(document.createTextNode('live site'))
    document.getElementById(`project-site${pc}`).setAttribute('href', projects[pc][3])
    element(`project-links${pc}`, 'a', `project-git${pc}`, 'project-git')
    document.getElementById(`project-git${pc}`).appendChild(document.createTextNode('github link'))
    document.getElementById(`project-git${pc}`).setAttribute('href', projects[pc][4])

}

element('right', 'div', 'educationCont', 'educationCont')
element('educationCont', 'div', `education`, 'education')
element('education', 'div', 'education-h', 'project-h')
element('education-h', 'p', 'education-p', 'project-p')
document.getElementById(`education-p`).appendChild(document.createTextNode('EDUCATION'))


var education = [
    ['Web Development Learnership', 'Sep-2022 - Current', 'Sci-Bono', 'Web development learnership with HTML,CSS,PHP, Python'],
    ['Mobile Apps Development with React-Native', 'Mar-Nov 2022', 'MTN Business App Academy', 'Full Stack Nqf Level 5 certificate programming in react-and react-native.Firebase as a backend technology, also problem solving,presentation, presentation planning,front-end design and math  '],
    ['Matric', '2017', 'Millennium Combined School', 'High school diploma with Math and Science.'],

]

for (let pc = 0; pc < education.length; pc++) {
    element(`education`, 'div', `education-name-div${pc}`, 'education-name-div')
    element(`education-name-div${pc}`, 'div', `education-name${pc}`, 'education-name')
    document.getElementById(`education-name${pc}`).appendChild(document.createTextNode(education[pc][0]))
    element(`education-name-div${pc}`, 'div', `education-date${pc}`, 'education-date')
    element(`education-date${pc}`, 'p', `education-date-p${pc}`, 'education-date-p')
    document.getElementById(`education-date-p${pc}`).appendChild(document.createTextNode(education[pc][1]))
    element(`education`, 'div', `education-local${pc}`, 'education-local')
    element(`education-local${pc}`, 'p', `education-site${pc}`, 'education-site')
    document.getElementById(`education-site${pc}`).appendChild(document.createTextNode(education[pc][2]))
    element(`education`, 'div', `education-desc${pc}`, 'education-desc')
    element(`education-desc${pc}`, 'p', `education-desc-l${pc}`, 'education-desc-l')
    //element(`education-desc-l${pc}`, 'p', `education-desc-p${pc}`, 'education-desc-p')
    document.getElementById(`education-desc-l${pc}`).appendChild(document.createTextNode(education[pc][3]))

}

//Gallery
element('gallery', 'div', 'imgCont', 'imgCont')

element('imgCont', 'div', `imgs`, 'imgs')
document.getElementById(`imgs`).style.backgroundImage = `url(./assets/slides/slide${0}.jpg)`

let sl = 0;
setInterval(() => {

    if (sl < 9) {
        document.getElementById(`imgs`).style.backgroundImage = `url(./assets/slides/slide${sl}.jpg)`
        sl++
    } else {
        sl = 0
    }
}, 6000)

