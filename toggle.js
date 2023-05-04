const body = document.querySelector(
  'body')
const navToggle = document.getElementById(
  'mobile-nav-toggle')
const primaryNav = document.getElementById(
  'primary-navigation')
const overlay = document.querySelector(
  '.overlay')
const primaryForm = document.querySelector(
  '#primary-form')
const primaryFormLabel = document.querySelectorAll(
  '#primary-form label')

const primaryRecords = document.querySelector('#primary-records')

navToggle.addEventListener('click', function() {
  const navVisible =
    primaryNav.getAttribute('data-visible')

  if (navVisible === 'false') {
    primaryNav.setAttribute(
      'data-visible', true
    )
    navToggle.setAttribute(
      'aria-expanded', true
    )
    overlay.setAttribute(
      'data-visible', true
    )
    primaryFormLabel.forEach(
      label => {
        label.style.transition = '11s'
        label.style.color = '#222'
      })
  }
  else if (navVisible === 'true') {
    primaryNav.setAttribute(
      'data-visible', false
    )
    navToggle.setAttribute(
      'aria-expanded', false
    )
    overlay.setAttribute(
      'data-visible', false
    )
    primaryFormLabel.forEach(
      label => {
        label.style.color = 'ghostwhite'
      })
  }
})


// CALCULATOR TOGGLER 
const calculatorToggle =
  document.querySelector("#calculator-toggle")
const primaryCalculator =
  document.querySelector("#primary-calculator")
const calcToggleOff =
  document.querySelector("#primary-calculator-toggle")

function toggleVisibility(arr)
{
  if (arr === "false") {
    primaryCalculator.setAttribute(
      "data-visible", true
    )
  } else if (arr === "true") {
    primaryCalculator.setAttribute(
      "data-visible", false
    )
  }
}

calculatorToggle.addEventListener("click", () => {
  const calcVisible =
    primaryCalculator.getAttribute(
      "data-visible"
    )

  toggleVisibility(calcVisible)
})

calcToggleOff.addEventListener('click', () => {
  const calcVisible = primaryCalculator.getAttribute("data-visible")
  const calcClosed = primaryCalculator.getAttribute("data-closing")

  if (calcClosed === "false") {
    primaryCalculator.setAttribute("data-closing", true)
  } else if (calcClosed === "true") {
    primaryCalculator.setAttribute("data-closing", false)
  }
  toggleVisibility(calcVisible)
})

let openRecords = document.getElementById('records-toggle')
const analysisToggle = document.querySelector('#analysis-toggle')
const addToggle = document.querySelector('#add-toggle')
const notifyToggle = document.querySelector('#notify-toggle')
const settingsToggle = document.querySelector('#settings-toggle')

const navKit = document.getElementById('nav-kits')
const navKitImg = document.querySelectorAll('#nav-kits img')
// primaryRecords = document.querySelector('#primary-records')
const primaryHome = document.querySelector('#primary-home')
const primaryAnalysis = document.querySelector('#primary-analysis')
const primaryActivities = document.querySelector('#primary-activities')

openRecords.addEventListener('click', () => {
  const inseted = body.getAttribute('aria-current')
    body.classList.remove('insetY3')
    body.classList.add('insetY')
    navKit.classList.add('nav-dark')
  if (inseted === 'true') {
    body.setAttribute('aria-current', false)
    navKitImg.forEach(img => {
     // img.style.transition = 'opacity 350ms ease-in-out'
     // img.style.opacity = '0'
    })
    //openRecords.setAttribute('src', '/Restaurant app/icons/assistant_navigation_FILL0_wght400_GRAD0_opsz48.svg')
   // openRecords.style.opacity = '1'
    openRecords.style.scale = '1'
  }
  else if(inseted === 'false'){
    body.setAttribute('aria-current', true)
    navKitImg.forEach(img => {
      img.style.opacity = '1'
    })
    
    
    //openRecords.setAttribute('src', '/Restaurant app/icons/account_balance_wallet_black_24dp.svg')
  }
  const navDot = document.querySelector('#nav-kits .dot')
  navDot.style.opacity = '0'
})

addToggle.addEventListener('click', () => {
      body.classList.remove('insetY')
    navKit.classList.remove('nav-dark')
    body.classList.remove('insetY3')
})

//formBtn.addEventListener('click', () => {
//    formBtn.classList.toggle('clicked')
//})
analysisToggle.addEventListener('click', () => {
    body.classList.add('insetY3')
})

function modify(toggler){
 // Elements 
  // the icon that clicked 
  this.element = toggler;
  // the parent 
  this.parent = toggler.parentElement
// the icon and its immediate icons
  this.elementsArray = [...toggler.parentElement.children]
    // splicing/removing the icon from the array
    this.elementsArray.splice(this.elementsArray.indexOf(this.element), 1)

  this.parent.classList.toggle('expanded')
 
  this.element.classList.add('hovered')
  if (!this.parent.classList.contains('expanded')) {
   this.element.classList.remove('hovered')
  }

  this.elementsArray.forEach(icon =>{
    icon.addEventListener('click', () => {
      if (this.parent.classList.contains('expanded')) {
        this.parent.classList.add('expanded')
      this.element.classList.remove('hovered')
      } else{
        this.parent.classList.remove('expanded')
      this.element.classList.remove('hovered')
      }
    })
  })
}

/*
new modify(reviewToggle)
new modify(settingsToggle)
reviewToggle.addEventListener('click', (e) => {new modify(e.target)})
addToggle.addEventListener('click', (e) => {new modify(e.target)})
notifyToggle.addEventListener('click', (e) => {new modify(e.target)})
settingsToggle.addEventListener('click', (e) => {new modify(e.target)})



reviewToggle.addEventListener('click', () => {
  const visibility = primaryHome.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryAnalysis.setAttribute('data-visible', false)
  primaryActivities.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryHome.setAttribute('data-visible', true)
    navKit.style.background = '#00CFC1'
  }
  else if (visibility === 'true') {
    primaryHome.setAttribute('data-visible', false)
    navKit.style.background = 'var(--nav-bg)'
  }

})
addToggle.addEventListener('click', () => {
addToggle.addEventListener('click', () => {
  const visibility = primaryAnalysis.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryHome.setAttribute('data-visible', false)
  primaryActivities.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryAnalysis.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryAnalysis.setAttribute('data-visible', false)
  }
  navKit.style.background = '#00FFAD'
  navKit.style.background = 'initial'
})
  const visibility = primaryActivities.getAttribute('data-visible')
  primaryRecords.setAttribute('data-visible', false)
  primaryAnalysis.setAttribute('data-visible', false)
  primaryHome.setAttribute('data-visible', false)

  if (visibility === 'false') {
    primaryActivities.setAttribute('data-visible', true)
  }
  else if (visibility === 'true') {
    primaryActivities.setAttribute('data-visible', false)
  }
  navKit.style.background = '#00FAFF'
})
*/


const visibilityTool = document.querySelector('svg[aria-controls="records-all"]')

visibilityTool.addEventListener('click', () => {
  visibility = allRecords.getAttribute('data-visible')
  if (visibility === 'true') {
    allRecords.setAttribute('data-visible', false)
    allRecords.classList.add('none')
  }
  else if (visibility === 'false') {
    allRecords.setAttribute('data-visible', true)
    allRecords.classList.remove('none')
  }
})

const toolsBtn =
  document.querySelector(
    '#tools-btn')
const toolsBox =
  document.querySelector(
    '#tools')

toolsBtn.addEventListener('click', showTools)
function showTools(action){
  visibility = toolsBox.getAttribute('data-visible')
  if (visibility === 'false') {
    toolsBox.setAttribute('data-visible', true)
  } else if (visibility === 'true') {
    toolsBox.setAttribute('data-visible', false)
  }
  if (action === 'hide') {
    toolsBox.setAttribute('data-visible', false)
  }else if(action === 'show'){
    toolsBox.setAttribute('data-visible', true)
  }
}

primaryRecords.addEventListener('scrolldown', (e) => {
  visibility = toolsBox.getAttribute('data-visible')
  if (visibility === 'false') {
    toolsBox.setAttribute('data-visible', true)
  }
  console.log(e.clientY);
})
/* This is an accessable setting
let startingX, startingY, movingX, movingY
primaryRecords.addEventListener('touchstart', (e) => {
  startingX = e.touches[0].clientX
//  console.log(startingX)
  startingY = e.touches[0].clientY
//  console.log(startingY)
})
primaryRecords.addEventListener('touchmove', (e) => {
  movingX = e.touches[0].clientX
 // console.log(movingX)
  movingY = e.touches[0].clientY
//  console.log(movingY)
})
primaryRecords.addEventListener('touchend', (e) => {
  if (startingX + 100 < movingX) {
  //  console.log('right')
    primaryRecords.setAttribute('data-visible', false)
    body.classList.remove('insetY')
  } else if (startingX - 100 < movingX) {
//    console.log('left');
  }
  if (startingY + 100 < movingY) {
 //   console.log('down')
  } else if (startingY - 100 < movingY) {
//    console.log('up');
  }
})

*/
const exitBtn = document.querySelector('#exit-btn')

exitBtn.addEventListener('click', (e) => {
  primaryRecords.setAttribute('data-visible', false)
  toolsBox.setAttribute('data-visible', false)
  body.classList.remove('insetY')
})

//const navImg = document.querySelectorAll('#nav-kits img')

