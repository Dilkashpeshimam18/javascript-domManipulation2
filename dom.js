console.log(document.domain)
console.log(document.URL)

console.log(document.title)
console.log(document.all[10])

document.all[10].textContent='Item Cart'

console.log(document.forms)
let headerTitle= document.getElementById("header-title")
let headerBottom=document.getElementById('main-header')
headerTitle.textContent='Hello'
headerTitle.innerText='Cart'

headerBottom.style.borderBottom='solid 3px #000'

let addItem= document.getElementsByClassName('title')
console.log(addItem)
addItem[0].style.color='green'
addItem[0].style.fontWeight='bold'
addItem[1].style.color='blue'


