const form = document.querySelector('form')
const cl = document.querySelectorAll('input')
const val = new Array()

function prevDef(el){
  el.preventDefault()
}

function composeOrder(client, menu, price){
  newItem = {name: client.value, menu: menu.value,price: price.value}
  return newItem
}
form.addEventListener('submit',
    (e) => { 
      new prevDef(e) 
      composeOrder()
    })

