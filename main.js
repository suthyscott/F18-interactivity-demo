let count = 0
const counterText =  document.querySelector('#counter')

const increase = () => {
    count += 1
    counterText.textContent = count
}

const decrease = () => {
    count -= 1
    counterText.textContent = count
}

const reset = () => {
    count = 0
    counterText.textContent = count
}

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.getElementById('minus-btn')
const resetBtn = document.getElementById('reset-btn')

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

const buttons = document.querySelectorAll('.theme-buttons')

console.log(buttons)

const selectTheme = (event) => {
    const theme = event.target.textContent

    const body = document.querySelector('body')
    const main = document.querySelector('main')

    main.className = theme
    body.className = theme

    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = theme
    }
}


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', selectTheme)
}