let submitForm=document.getElementById('addForm')
let ulList=document.getElementById('items')
let filter=document.getElementById('filter')
//filter 

filter.addEventListener('keyup',filterItem)
function filterItem(e){
    let text=e.target.value.toLowerCase()
    let items=ulList.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent
        let description=item.childNodes[1].textContent
        console.log(description)

        console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) !=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}


//add item to list
submitForm.addEventListener('submit',addForm)
function addForm(e){
    e.preventDefault()
    let inputValue=document.getElementById('inputVal').value
    let descVal=document.getElementById('descVal').value
    console.log(inputValue.value)
    let li=document.createElement('li')
    li.className='list-group-item'

    let liText=document.createTextNode(inputValue)
     let descText=document.createTextNode(descVal)


    li.appendChild(liText)
    li.appendChild(descText)
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