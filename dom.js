
//add item to list
let submitForm=document.getElementById('addForm')
let ulList=document.getElementById('items')
submitForm.addEventListener('submit',addForm)

function addForm(e){
    e.preventDefault()
    let inputValue=document.getElementById('inputVal').value
    console.log(inputValue.value)
    let li=document.createElement('li')
    li.className='list-group-item'

    let liText=document.createTextNode(inputValue)

    li.appendChild(liText)
  let Btn=document.createElement('button')
  
 Btn.className='btn btn-danger btn-sm float-right delete'

 Btn.appendChild(document.createTextNode('X'))
  li.appendChild(Btn)
    ulList.appendChild(li)

}


//delete item

ulList.addEventListener('click',removeItem)
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement
            ulList.removeChild(li)
        }
    }
}