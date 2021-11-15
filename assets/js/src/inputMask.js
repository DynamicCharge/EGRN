$(document).ready(function() {
    $('body').on('input', '.header__wrapper__input', function(){
        this.value = this.value.replace(/[^0-9\^а-яё\s]/g, '');
    });
});