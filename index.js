function validateEmail() {
    const email = document.querySelector('#email');
    const msgError = document.querySelector('#error');
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailFormat)) {
        email.classList.remove('main__email--error');
        msgError.setAttribute('hidden', "");
        email.value = "";
    } else {
        email.classList.add('main__email--error');
        msgError.removeAttribute('hidden', "");
    }
}