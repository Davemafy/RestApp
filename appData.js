  const inputName = document.querySelector('#name')
  const inputOrder = document.querySelector('#menu')
  const inputPrice = document.querySelector('#price')
  const formBtn = document.querySelector('#form-btn')
  const formInputs = document.querySelectorAll("#primary-form-input")
  const warnText = document.querySelectorAll('.warn-text')

  const primaryRecordsUlDisplay = document.querySelector('#display')
  const primaryRecordsEarlier = document.querySelector('#earlier-cards')

  const visibilityBtn = document.querySelector('#visibility-btn')
  const deleteBtn = document.querySelector('#delete-btn')
  const exitAnalysis = document.querySelector('#exit-analysis')
  const quickActions = document.querySelector('#quick-actions')
  const selectedDisplay = document.querySelector('#primary-records .top-bar h1')

  const popUp = document.querySelector('#pop-up')
  const popUpItems = document.querySelector('#pop-up #item')
  const yesBtn = document.querySelector('#yes-btn')
  const noBtn = document.querySelector('#no-btn')
  const navDot = document.querySelector('#nav-kits .dot')
  const dot = document.querySelector('#delete-btn .dot')


  let nameList = document.querySelector('#customers-list')
  let recordedCustomers = ["Tall Boy", "Philip Tailor Neighbor", "Kebbi", "POS Guy Front", "Alhaji", "Kebbi Junior Bro", "Crayfish Man(short)", "Musa", "Kuruma", "Bucher Neighbor(buy meat from)", "Bucher Nieghbour (black)", "Bucher Neighbor(fair)", "Chairman", "Chairman Son", "Chairman last son(takeaway)", "Grinding Woman", "Kuruma Accomplice", "Dye Woman", "Odogwu", "Odogwu Friend", "Tomato Man", "Sani Baiwa", "Takeaway Guy", "Kitchen Woman", "Perfume Baba", "Semo Customer", "Biscuit Woman", "Kitchen Woman Sister", "Bwari Brother", "Always transfer before eat", "Chinedu", "Papa", "Mama", "Tall Boy Girl", "Supremarket", "Extreme End", "Chinedu", "Igbo Meat Seller(left)", "Umar", "Near Takeaway man", "Chukwudi", "Plastic Woman", "Ugwu woman near chairman", "Mummy Twins", "Extreme End left", "Extreme End opposite", "opp takeaway man", "Customer Ate Here", "Daniel Friend", "Egusi Woman", "First Man by Left", "First Man by Right", "Next man after first bucher right", "Grinding Man", "Neighbor doesn't collect money", "Ugwu Woman Neigh", "Hagiya"]
  recordedCustomers.sort()
  let customers
  localStorage.setItem("allCustomers", JSON.stringify(recordedCustomers))

  let ordersId = new Array()
  let storedOrders = JSON.parse(localStorage.getItem("storedOrders"))
  let prices = []
  let cardSelected = []
  const time = new Date()
  const timeStr = time.toLocaleTimeString()
/*  // FirebaseDB realtime setup
  const appSettings = {
    databaseURL: "https://restaurant-4dd1c-default-rtdb.firebaseio.com/"
  }

  window.addEventListener("online", (e) => {
    console.log("online");
    import("https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js").then(async (main) => {
      app = await main.initializeApp(appSettings)
    })

    import("https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js").then(async (db) => {
      database = await db.getDatabase(app)
      ordersDB = db.ref(database, "details")
      db.onValue(ordersDB, function(snapshot) {
        details = Object.values(snapshot.val())
        storedOrders = details
        render(details)
      })
    })
  });

*/


  if (storedOrders) {
    // re-renders the prev records //
    ordersId = storedOrders
    setPrices(storedOrders)
    render(ordersId)
    // change the state of primaryRecords to active //
    document.querySelector('#default').classList.add('none')
    const primaryRecords = document.querySelector('#primary-records')
    primaryRecords.style.opacity = '1'
  }

  function suggest() {
    customers = JSON.parse(localStorage.getItem("allCustomers"))
    if (customers) {
      // CREATE NEW OPTIONS
      let option = ''
      let amount = customers.length
      for (let i = 0; i < amount; i++) {
        option += `<option value="${customers[i]}"></option>`
      }
      nameList.innerHTML += option
    }
    inputName.setAttribute('list', 'customers-list')
  }
  suggest()

  function setPrices(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      prices.push(arr[i].price)
    }
    if (num) {
      prices.push(arr[num].price)
    }
  }

  function reset() {
    inputName.value = ''
    inputOrder.value = ''
    inputPrice.value = ''

  }

  function save(item,storage) {
    if (inputName.value && inputOrder.value && inputPrice.value) {
      let paragraph = ''
      ordersId.push(item)
      //import("https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js").then(async (db) => {
      //  db.push(ordersDB, item)
      //})

      localStorage.setItem("storedOrders", JSON.stringify(ordersId))
      document.querySelector('#default').classList.add('none')
      primaryRecords.style.opacity = '1'
      storedOrders = JSON.parse(localStorage.getItem("storedOrders"))
      // DETECTS A NEW CUSTOMER
      if (!customers.includes(ordersId[ordersId.length - 1].customer)) {
        alert("Hurray! We've got a new customer")
      }
      paragraph = `    <li class="cstm-card">
                          <div class="circle"></div>
                          <div class="card-main">
                            <div class="cstm-title">
                              <h1>${storage[storage.length-1].customer}</h1>
                              <h6><small>28/3/23</small></h6>
                            </div>
                            <p>
                              <span>${storage[storage.length-1].order}</span><span>N${storage[storage.length-1].price}</span>
                            </p>
                          </div>
                        </li>
                  `
      const subTitle = document.querySelector('.sub-title')
      const subVisibility = subTitle.getAttribute('data-visible')

      if (subVisibility === 'false') {
        subTitle.setAttribute('data-visible', true)
      }

      primaryRecordsUlDisplay.innerHTML += paragraph
      formBtn.style.transform = 'translateX(-20%)'
      formBtn.style.background = 'blueviolet'

      formBtn.innerHTML = 'Submited'
      navDot.style.opacity = '1'
      cardsToggle()
      reset()
    }
    //  console.log(`${ordersId[ordersId.length - 1].customer} , Bought ${ordersId[ordersId.length - 1].order}. At The Price Of ${ordersId[ordersId.length - 1].price}`)
    //    else{
    //        formBtn.innerHTML = '🚫'
    //    }
  }


  function render(storage) {
    let paragraph = ''
    ordersId.reverse()
    for (var i = 0; i < storage.length; i++) {
      paragraph += `    <li class="cstm-card">
                          <small></small>
                          <div class="circle"></div>
                          <div class="card-main">
                            <div class="cstm-title">
                              <h1>${storage[i].customer}</h1>
                              <h6><small>${timeStr}</small></h6>
                            </div>
                            <p>
                              <span>${storage[i].order}</span><span>N${storage[i].price}</span>
                            </p>
                          </div>
                        </li>
                  `
    }
    primaryRecordsEarlier.innerHTML = `<h1 class="sub-title">Earlier</h1> ${paragraph}`
    cardsToggle()

  }

  function cardsToggle() {
    let primaryCards = document.querySelectorAll('.cstm-card')
    primaryCards.forEach(card => {
      let display = ''
      card.addEventListener('click', () => {
        new showTools('show')
        card.classList.toggle('angle')
        if (!cardSelected.includes(card)) {
          cardSelected.push(card)

          cardSelected.forEach(item => {
            display += `<div class='cstm-card'>${item.innerHTML}</div>`
          })
          popUpItems.innerHTML = display

          console.log(cardSelected.length)

          card.style.background = '#112'
          card.style.color = 'pink'

          updateDisplay(
            cardSelected.length)
          dot.innerHTML = cardSelected.length
        }
        else if (cardSelected.includes(card)) {
          display = ''
          card.style.background = 'linear-gradient(45deg,pink,skyblue)'
          card.style.color = '#111'

          cardSelected.splice(
            cardSelected.indexOf(card), 1)

          console.log(cardSelected.length)

          cardSelected.forEach(item => {
            display += `<div class='cstm-card'>${item.innerHTML}</div>`
          })

          popUpItems.innerHTML = display
          updateDisplay(
            cardSelected.length)
          dot.innerHTML = cardSelected.length
        }

        if (cardSelected.length === 0) {
          updateDisplay(
            null, 'History')
          card.style.background = 'linear-gradien(45deg,pink,skyblue)'
          new showTools('hide')
          dot.innerHTML = null
        }

        deleteBtn.addEventListener('click', () => {
          cardSelected.forEach(selected => {
            popUp.style.display = 'grid'

            yesBtn.addEventListener('click', () => {
              cardSelected.splice(
                cardSelected.indexOf(selected), 1)
              selected.remove()
              popUp.style.display = 'none'

              updateDisplay(
                cardSelected.length)
              dot.innerHTML = null

              if (cardSelected.length === 0) {
                updateDisplay(null, 'History')
                dot.innerHTML = null
              }
              popUpItems.innerHTML = ''
              selected.style.background = 'none'
            })

            noBtn.addEventListener('click', () => {
              popUp.style.display = 'none'
            })
          })
        })
      })
    })
  }

  function updateDisplay(num, title) {
    selectedDisplay.innerHTML = `${num} selected`
    if (title) {
      selectedDisplay.innerHTML = title
    }
  }


  // EVENT LISTENERS
  const inputs = document.querySelectorAll('input')
  formBtn.addEventListener('click', () => {
    if (inputName.value === '' || inputName.value.length < 3) {
      warnText[0].style.display = 'block'
    }
    if (inputOrder.value === '' || inputOrder.value.length < 3) {
      warnText[1].style.display = 'block'
    }
    if (inputPrice.value === '' || inputPrice.value.length < 2) {
      warnText[2].style.display = 'block'
    }
    let newItem = { customer: inputName.value, order: inputOrder.value, price: inputPrice.value }
    save(newItem, ordersId)
    inputs.forEach(input => {
      if (input.value === 'clear') {
        localStorage.clear()
      }
    })

    setPrices(storedOrders, ordersId)
    //}
    console.log('cliked');
  })

  let defaultBtn = formBtn.innerHTML
  let defaultBtnWidth = formBtn.getBoundingClientRect().width
  formBtn.addEventListener('mouseout', () => {
    setTimeout(() => { warnText.forEach(text => { text.style.display = 'none' }) }, 1000)
    formBtn.innerHTML = defaultBtn
    formBtn.style.transform = 'translateX(0%)'
    formBtn.style.background = ''
    formBtn.style.width = `${defaultBtnWidth}px`
  })
  // deleteBtn.addEventListener('click', () => {}])