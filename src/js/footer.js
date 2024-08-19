// Обрезка текста в поле comments
document.querySelector('.footer-comment').addEventListener('input', function() {
    const maxLength = this.cols;
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength - 3) + '...';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const validationMessage = document.getElementById('email-validation');
    
    if (emailInput.checkValidity()) {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        validationMessage.textContent = "Success!";
        validationMessage.classList.remove('error');
        validationMessage.classList.add('success');
    } else {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
        validationMessage.textContent = "Invalid email, try again";
        validationMessage.classList.remove('success');
        validationMessage.classList.add('error');
    }
});