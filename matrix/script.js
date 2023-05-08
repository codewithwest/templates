let cont, rows, nums, ramd
cont = document.querySelector('.cont')
for (let index = 0; index < 30; index++) {
    cont.innerHTML += `<div class="row"></div>`
}
rows = document.querySelectorAll('.row')
// ramd = 
var vals = [
    'a', 'b', 1, 'd', 'e', 2, 'f', 'g', 'h', 3, 'i',
    'j', 4, 'k', 'l', 5, 'm', 6, 'n', 'o', 7, 'p', 'q',
    'y', 8, 'x', 'w', 9, 'v', 'u', 0, 't', 's', 'r',
    'z']
rows.forEach(element => {
    for (let k = 0; k < 30; k++) {
        element.innerHTML += `<div class="nums">${Math.floor(Math.random() * 35)}</div>`
    }
});

nums = document.querySelectorAll('.nums')
setInterval(() => {
    nums.forEach(el => el.innerHTML = vals[Math.floor(Math.random() * 35)])
}, 100)

console.log(vals.length)