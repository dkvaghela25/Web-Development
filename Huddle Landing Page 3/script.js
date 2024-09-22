function validate() {
    let email = document.getElementById('email').value
    let regex = new RegExp(/\S+@\S+\.\S+/)
    
    let isValid = regex.test(email)

    if (!isValid) {
        document.querySelector('.warning').innerHTML = 'Check your email please'
    }
    else {
        document.querySelector('.warning').innerHTML = ''
    }
}