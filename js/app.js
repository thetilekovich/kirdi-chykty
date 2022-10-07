const burger = document.querySelector('.burgerL')
const menu = document.querySelector('.menuI')
const btn = document.querySelectorAll('.wellcome_btn')
const contact = document.querySelectorAll('.contitle')



let  mode = false
burger.addEventListener("click", () => {
    
    
    if(mode == false){
        menu.style.display = 'block'
        mode = true

    }else{
        menu.style.display = 'none'
        mode = false
    }
})
let test =''
function changer(test){
    test.style.background = '#000'
    test.style.color = '#4CF80F'
    test.style.marginTop = '-10px'
    test.style.boxShadow = '4px 3px 15px 3px #4CF80F'
}


btn[0].addEventListener('click', () => {
    changer(btn[0])
})

btn[1].addEventListener('click', () => {
    changer(btn[1])
})
btn[2].addEventListener('click', () => {
    changer(btn[2])
})

contact[0].addEventListener('click', () => {
    changer(contact[0])
})

contact[1].addEventListener('click', () => {
    changer(contact[1])
})
contact[2].addEventListener('click', () => {
    changer(contact[2])
})

