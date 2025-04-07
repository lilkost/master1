export const sliderConstructor = () => {
    // массив всех слайдеров
    // для создания простых слайдеров без сложной логики
    const sliders = [
        // пример слайдера
           [
            document.querySelector(".top-slider"),
            {
                direction: 'horizontal',
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: '.top-slider__pagination',
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                },
            }
        ],
    ]
    // функция конструктор для создания сладеров
    const createSlider = (node, options) => {
        if(node && options) {
            const swiper = new Swiper(node, options);
        }
        else {
            console.error("Ошибка генерации слайдера");
        }
    }
    // вызов конструктора для слайдеров
    if(sliders && sliders.length) {
        sliders.forEach(slider=> {
            const sliderNode = slider[0];
            const sliderOptions = slider[1];

            if(sliderNode && sliderOptions) {
                createSlider(sliderNode, sliderOptions);
            }
            else {
                console.error(`Ошибка генерации, нету одной из двух частей слайдера: slider - ${sliderNode}, список опций - ${sliderOptions}`)
            }
        });
    }
}

export const mainsSlider = () => {
    window.addEventListener("DOMContentLoaded", ()=> {
        const sliders = document.querySelectorAll(".main-slider");

        if(sliders.length === 0) return;
    
        sliders.forEach(slider=>{
            const parentSlider = slider.closest(".main-slider-parent")
            const arrowPrev = parentSlider.querySelector(".main-slider__arrow_prev");
            const arrowNext = parentSlider.querySelector(".main-slider__arrow_next");

            const sl = new Swiper(slider, {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                slidesPerView: 4,
                spaceBetween: 32,
    
                // Navigation arrows
                navigation: {
                  nextEl: arrowNext,
                  prevEl: arrowPrev,
                },
                breakpoints: {
                    993:{
                        slidesPerView: 4,
                        spaceBetween: 32,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 19,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    }
                }
            });

            // Обработчик события смены слайда
            sl.on('slideChangeTransitionEnd', function () {
                arrowPrev.classList.add("is-visible")
            });
        });
    })
}

export const cardSlider = () => {
    if(!document.querySelector(".card-item__slider-min") || !document.querySelector(".card-item__slider-big")) return
    const swiper = new Swiper(".card-item__slider-min", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        
        breakpoints: {
            769:{
                spaceBetween: 20,
            },
            320: {
                spaceBetween: 6,
            }
        }
    });
    const swiper2 = new Swiper(".card-item__slider-big", {
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".card-item__slider-btn_next",
            prevEl: ".card-item__slider-btn_prev",
        },
        thumbs: {
            swiper: swiper,
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}

export const cardExamples = () => {
    const mainSliders = document.querySelectorAll('.card-examples__slider-big');
    const thumbsSliders = document.querySelectorAll('.card-examples__slider-min');

    mainSliders.forEach((mainSlider, index) => {
        const thumbsSlider = thumbsSliders[index];

        const mainSwiper = new Swiper(mainSlider, {
            loop: true,
        });

        const thumbsSwiper = new Swiper(thumbsSlider, {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 8,
            slideToClickedSlide: true,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: mainSlider.querySelector('.card-examples__slider-big_next'),
                prevEl: mainSlider.querySelector('.card-examples__slider-big_prev'),
            },
        });

        // Связываем слайдеры
        mainSwiper.controller.control = thumbsSwiper;
        thumbsSwiper.controller.control = mainSwiper;
    });
}