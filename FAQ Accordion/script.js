function toggle(id){
    elm = document.getElementById(id)
    elm.nextElementSibling.classList.toggle('display')
    elm.getElementsByTagName('img')[1].classList.toggle('display')
}