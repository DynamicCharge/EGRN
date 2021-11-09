Vue.component ('egrn-main-nav', {
    data: function (){
        return {

        }
    },
    template: '<div class="container"><a href="index.html" class="logo"><span class="logo-blue">ЕГРН</span><span class="logo-red">ЕГРН</span></a><ul class="nav__list"><li class="nav__list__item"><a href="" class="nav__list__item__link">Онлайн реестр</a></li><li class="nav__list__item"><a href="" class="nav__list__item__link nav__list__item__link__desktop account">Личный кабинет</a><a href="" class="nav__list__item__link__mobile"><img src="assets/img/account.svg" alt=""></a></li></ul></div>',
});

Vue.component ('egrn-other-nav', {
    data: function (){
        return {

        }
    },
    template: '<div class="container"><a href="index.html" class="logo"><span class="logo-blue">ЕГРН</span></a><ul class="nav__list"><li class="nav__list__item"><a href="" class="nav__list__item__link">Онлайн реестр</a></li><li class="nav__list__item"><a href="" class="nav__list__item__link nav__list__item__link__desktop account">Личный кабинет</a><a href="" class="nav__list__item__link__mobile"><img src="assets/img/account.svg" alt=""></a></li></ul></div>',
});

var app = new Vue({
    el: 'nav',
    data: {

    },
})