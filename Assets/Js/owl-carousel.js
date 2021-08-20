// Slider
$('.owl-carousel.slider__owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
})

var dots = $('.owl-carousel.slider__owl-carousel .owl-dots');
dots.css('position','absolute').css('right','16px').css('bottom','0');

var dot = $('.owl-carousel.slider__owl-carousel .owl-dot');
dot.css('zoom','0.8')

var dots = $('.owl-carousel.slider__owl-carousel .owl-dot');
dots.css('outline','none')

// Outstanding place
$(document).ready(function(){
    $('.owl-carousel.outstanding__owl-carousel').owlCarousel({
        loop:false,
        margin:16,
        nav:true,
        navSpeed: 500,
        navText: [`
            <button class="btn slide-control slide-control-left">
                <i class="fas fa-chevron-left"></i>
            </button>`,
            `<button class="btn slide-control slide-control-right">
                <i class="fas fa-chevron-right"></i>
            </button>`],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            740:{
                items:3
            },
            1100:{
                items:5
            }
        }
    })
});

// Suggest place
$(document).ready(function(){
    $('.owl-carousel.suggest__owl-carousel').owlCarousel({
        loop:false,
        margin:16,
        nav:true,
        navSpeed: 500,
        navText: [`
            <button class="btn slide-control slide-control-left suggest__slide-btn">
                <i class="fas fa-chevron-left"></i>
            </button>`,
            `<button class="btn slide-control slide-control-right suggest__slide-btn">
                <i class="fas fa-chevron-right"></i>
            </button>`],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1100:{
                items:3
            },
            1240:{
                items:4
            }
        }
    })
});

// Explore place
$(document).ready(function(){
    $('.owl-carousel.explore__owl-carousel').owlCarousel({
        loop:false,
        margin:16,
        nav:true,
        navSpeed: 500,
        navText: [`
            <button class="btn slide-control slide-control-left">
                <i class="fas fa-chevron-left"></i>
            </button>`,
            `<button class="btn slide-control slide-control-right">
                <i class="fas fa-chevron-right"></i>
            </button>`],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            740:{
                items:2
            },
            1100:{
                items:3
            }
        }
    })
});
