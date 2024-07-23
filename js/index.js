let burger = document.querySelector('.ham-burger')
let cross = document.querySelector('.cross')
let sub_nav = document.querySelector('.sub-nav')
let accordian = document.getElementsByClassName('accordian')
let panel = document.getElementsByClassName('panel')
let check = document.querySelector('.peer')
let monthly = document.querySelector('.monthly')
let year = document.querySelector('.yearly')


burger.addEventListener('click', () => {
    sub_nav.classList.toggle(['hidden'])
})

cross.addEventListener('click', () =>{
    sub_nav.classList.toggle('hidden')
})


for (let i=0; i < accordian.length;i++ ){
   accordian[i].addEventListener('click', ()=>{
    panel[i].classList.toggle('hidden')
   })
}


check.addEventListener('click', ()=>{
    if (check.checked == true){
        monthly.classList.remove('flex')
        monthly.classList.add('hidden')

        year.classList.remove('hidden')
        year.classList.add('flex')
    }
    else{
        year.classList.remove('flex')
        year.classList.add('hidden')

        monthly.classList.remove('hidden')
        monthly.classList.add('flex')
    }
})



