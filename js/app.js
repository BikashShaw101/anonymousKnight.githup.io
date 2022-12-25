$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass: 'dots', 
    })

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let link = document.querySelector('.link');
    let link1 = document.querySelector('.link1');
    let link2 = document.querySelector('.link2');
    let link3 = document.querySelector('.link3');
    let link4 = document.querySelector('.link4');
    let link5 = document.querySelector('.link5');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link1.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link2.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link3.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link4.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

    link5.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });

})  