function divCreator(parent, elements, divid, divclass) {
    var par = document.getElementById(parent);
    var div = document.createElement(`${elements}`);
    div.setAttribute('id', `${divid}`)
    div.setAttribute('class', `${divclass}`);
    par.appendChild(div);
}

document.getElementById('profilePic').style.backgroundImage="url(../assets/profile.png)"
document.getElementById('postButton').style.backgroundImage="url(../assets/send.png)"


var postsList = [];
let k = 0;

var posts = document.getElementById('posts')


var post = document.getElementById('postButton')
var postTextArea = document.getElementById('currentPost')

// Create The post

function createPost() {
    for (let k = 0; k < postsList.length; k++) {
        divCreator("posts", 'div', `postCover${k}`, `postCover`)
        divCreator(`postCover${k}`, 'p', `postText${k}`, `postText`)
        document.getElementById(`postText${k}`).appendChild(document.createTextNode(postsList[k]))
}
}

post.addEventListener('click',(e)=>{
    posts.querySelectorAll('*').forEach( n => n.remove() );
    e.preventDefault
    if (postTextArea.value.length > 0) {
        postsList.push(postTextArea.value)
        createPost()
        postTextArea.value = ""
        console.log(postsList)
    }
    else{
        alert("hello")
    }
})



