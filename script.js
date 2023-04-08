const calcPerc = function(num) {
  let inputValue = document.getElementById("calc-input").value
  let outputValue = document.getElementById("calculated")
  const slashNum = ((inputValue * num) / 100).toFixed(2)
  outputValue.innerHTML = slashNum + "$"
}

const calcCustom = function() {
  let inputValue = document.getElementById("calc-input").value
  let outputValue = document.getElementById("calculated")
  let btnValue = document.getElementById("custom-btn").value
  const slashNum = (inputValue * btnValue) / 100

  if(btnValue > 100 || btnValue == 0) {
    return outputValue.innerHTML = "0$"
  }else if(btnValue < 100) {
    outputValue.innerHTML = slashNum + "$"
  }
}

const removeCalc = function() {
  let inputValue = document.getElementById("calc-input")
  let outputValue = document.getElementById("calculated")

  inputValue.value = ""
  outputValue.innerHTML = "0$"
}