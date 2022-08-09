const gameBtnOne = document.querySelector('.btn-one')
const gameBtnTwo = document.querySelector('.btn-two')
const gameOne = document.querySelector('.frm-left')
const gameTwo = document.querySelector('.frm-left-two')


gameBtnOne.addEventListener('click', (e) => {
    e.preventDefault()
    gameOne.style.display = `flex`
    gameTwo.style.display = `none`
})

gameBtnTwo.addEventListener('click', (e) => {
    e.preventDefault()
    gameTwo.style.display = `flex`
    gameOne.style.display = `none`
})
