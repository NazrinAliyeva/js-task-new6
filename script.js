const inputName=document.querySelector('.name')
const inputPrice=document.querySelector('.price')
const inputCount=document.querySelector('.count')
const addName=document.querySelector('.add-name')
const addPrice=document.querySelector('.add-price')
const addCount=document.querySelector('.add-count')
const deleteName=document.querySelector('.delete-name')
const deletePrice=document.querySelector('.delete-price')
const deleteCount=document.querySelector('.delete-count')
const box=document.querySelector('.box')
let name1;
let price;
let count;
addName.addEventListener('click',function(e){
    e.preventDefault()
    name1=document.createElement('p')
name1.className='name1'
    name1.innerHTML=inputName.value
    box.appendChild(name1)
    inputName.value="";
})
deleteName.addEventListener('click',function(e){
    e.preventDefault()
name1.className='name1'
    name1.innerHTML=inputName.value
    inputName.value="";
    box.appendChild(name1)
})
addPrice.addEventListener('click',function(e){
    e.preventDefault()
    price=document.createElement('p')
price.className='price'
    price.innerHTML=inputPrice.value
    box.appendChild(price)
    inputPrice.value='';
})
deletePrice.addEventListener('click',function(e){
    e.preventDefault()
price.className='price'
    price.innerHTML=inputPrice.value
    box.appendChild(price)
    inputPrice.value='';
})
addCount.addEventListener('click',function(e){
    e.preventDefault()
    count=document.createElement('p')
count.className='count'
    count.innerHTML=inputCount.value
    box.appendChild(count)
    inputCount.value='';
})
deleteCount.addEventListener('click',function(e){
    e.preventDefault()
count.className='count'
    count.innerHTML=inputCount.value
    box.appendChild(count)
    inputCount.value='';
})
