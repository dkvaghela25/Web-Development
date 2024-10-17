function verify() {
    let email = document.getElementById('email').value
    let regex = new RegExp(/\S+@\S+\.\S+/)

    let isValid = regex.test(email)

    if (!isValid) {
        document.querySelector('.error').innerHTML = 'Please Provide a valid email address'
        document.getElementsByTagName('input')[0].style.border = '1px solid red'
    }
    else {
        document.querySelector('.error').innerHTML = ''
        document.getElementsByTagName('input')[0].style.border = 'none'
        window.location = 'index.html'
    }

    event.preventDefault();

}