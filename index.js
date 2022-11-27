let bars = document.querySelector('.fa-bars')
let xmark = document.querySelector('.fa-xmark')
let hamburger = document.querySelector('.hamburgerMenu')

function showMenu(){
    console.log(bars)
    hamburger.style.display = "block"
    bars.style.display = "none"
    xmark.style.display = "block"
    console.log('show menu')

}

function hideMenu(){
    console.log(xmark)
    hamburger.style.display = "none"
    bars.style.display = "block"
    xmark.style.display = "none"
    console.log('hide menu')
    
}