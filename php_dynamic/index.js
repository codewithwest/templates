function elementCreator(paren,element,id,clas) {
    var el = document.getElementById(paren)
    var newEl = document.createElement(element)
    newEl.setAttribute('id', id)
    newEl.setAttribute('class', clas)
    el.appendChild(newEl)

}


elementCreator('content', 'div', 'loginScreen', 'loginScreen')
elementCreator('loginScreen', 'form', 'login', 'login')

elementCreator('login', 'input', 'loginName', 'loginName')
document.getElementById('loginName').setAttribute('type', 'text')

elementCreator('login', 'input', 'loginPassword', 'loginPassword')
document.getElementById('loginPassword').setAttribute('type', 'password')

elementCreator('login', 'button', 'loginButton', 'loginButton')
document.getElementById('loginButton').appendChild(document.createTextNode('Login'))
document.getElementById('loginButton').setAttribute('type', 'submit')





var loginN = document.getElementById('loginName')
var loginP = document.getElementById('loginPassword')
var loginF = document.getElementById('login')
var loginB = document.getElementById('loginButton')

loginN.addEventListener('change',(e)=>{
    e.preventDefault;
    if (loginN.value.length < 4) {
    loginN.style.border="1px solid red"
    }else{
    loginN.style.border="2px solid green"
    }

});

loginP.addEventListener('change',(e)=>{
    e.preventDefault;
    if (loginP.value.length < 4) {
    loginP.style.border="1px solid red"
    }else{
    loginP.style.border="2px solid green"
    }
});


loginB.addEventListener('submit',(e)=>{
    //e.preventDefault()
    loginF.setAttribute('action','./dashboard.php')
})

