const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navlist')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)
