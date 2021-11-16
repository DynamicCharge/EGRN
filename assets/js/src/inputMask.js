$(document).ready(function() {
    $('body').on('input', '.main__input', function(){
        this.value = this.value.replace(/[^0-9\^а-яё\s]/g, '');
    });
    $(".phone").mask("+7 (999) 99-99-999");
});