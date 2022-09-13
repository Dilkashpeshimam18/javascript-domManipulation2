console.log(document.domain)
console.log(document.URL)

console.log(document.title)
console.log(document.all[10])

document.all[10].textContent='Item Cart'

console.log(document.forms)

//Get element by id
let headerTitle= document.getElementById("header-title")
let headerBottom=document.getElementById('main-header')
headerTitle.textContent='Hello'
headerTitle.innerText='Cart'

headerBottom.style.borderBottom='solid 3px #000'

//Get element by classname

let addItem= document.getElementsByClassName('title')
console.log(addItem)
addItem[0].style.color='green'
addItem[0].style.fontWeight='bold'
addItem[1].style.color='blue'


let item=document.getElementsByClassName("list-group-item")
console.log(item)
item[2].style.backgroundColor='green'
for(var items of item){
    items.style.fontWeight='bold'
}


let newtag=document.getElementsByTagName('li')
newtag[4].style.backgroundColor='green'
newtag[4].style.fontWeight='bold'

let newItem=document.getElementsByClassName('list-group-newItem')
newItem[0].style.height='50px'
newItem[0].style.padding='15px'
newItem[0].style.listStyle='none'


let getItems=document.querySelector('.list-group')
console.log(getItems)
getItems.children[1].style.backgroundColor='green'
getItems.children[2].style.display='none'

let getAllItem=document.querySelectorAll('.list-group-item')
getAllItem[1].style.color='black'

let odd=document.querySelectorAll('.list-group-item:nth-child(odd)')
console.log(odd)
for(var items of odd){
    items.style.backgroundColor='green'
    items.style.color='black'

}