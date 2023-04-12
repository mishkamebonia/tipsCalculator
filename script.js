const inputValue = document.getElementById("calc-input")
const outputValue = document.getElementById("calculated")
const personInputValue = document.getElementById("people-input")
const personOutputValue = document.getElementById("calculated-per-person")
const btnValue = document.getElementById("custom-input")
const calcBtn = document.querySelectorAll(".calc-btn")

calcBtn.forEach(btnEl => {
  btnEl.addEventListener('click', function() {
    document.querySelector('.active')?.classList.remove('active')
    btnEl.classList.add('active')
  })
})

const calcPerc = function(num) {
  const slashNum = ((inputValue.value * num) / 100).toFixed(2)
  outputValue.innerHTML = slashNum + "$"

  const perPersonSlash = (slashNum / personInputValue.value).toFixed(2)
  personOutputValue.innerHTML = perPersonSlash + "$"

  if(personInputValue.value == 0) {
    personOutputValue.innerHTML = "0.00$"
    
    if(inputValue.value == 0) {
      outputValue.innerHTML = "0.00$"
    }
  }
}

const calcCustom = function() {
  const slashNum = (inputValue.value * btnValue.value) / 100
  const perPersonSlash = slashNum / personInputValue.value

  if(btnValue.value > 100 || btnValue.value == 0) {
    outputValue.innerHTML = "0.00$"
    personOutputValue.innerHTML = "0.00$"
  }else if(btnValue.value < 100) {
    outputValue.innerHTML = slashNum.toFixed(2) + "$"
    personOutputValue.innerHTML = perPersonSlash.toFixed(2) + "$"

    if(personInputValue.value == 0) {
      personOutputValue.innerHTML = "0.00$"
    }
  }
}

const removeCalc = function() {
  inputValue.value = ""
  outputValue.innerHTML = "0.00$"

  personInputValue.value = ""
  personOutputValue.innerHTML = "0.00$"

  btnValue.value = ""
}

const changeIcon = function(icon) {
  icon.classList.toggle('fa-xmark')
}