document.querySelector('.footer-comment').addEventListener('input', function() {
    const maxLength = this.cols;
    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength - 3) + '...';
    }
});
