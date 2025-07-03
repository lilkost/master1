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
                loop: false,
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 23.5,
    
                // Navigation arrows
                navigation: {
                  nextEl: arrowNext,
                  prevEl: arrowPrev,
                },
                breakpoints: {
                    1367:{
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 23.5,
                    },
                    993:{
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 23,
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 19,
                    },
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    }
                }
            });

            // Обработчик события смены слайда
            sl.on('slideChangeTransitionEnd', function () {
                arrowPrev.classList.add("is-visible")
            });
            sl.on('slideChange', function () {
                let val = sl.activeIndex;
                const btn = slider.querySelector(".slider-all-link");
                console.log(val);

                if(val === 5) {
                    btn.disabled = false;
                    console.log(123)
                }
            });
        });
    })
}

export const resultModalSlier = () => {
    window.addEventListener("DOMContentLoaded", ()=> {
        const sliders = document.querySelectorAll(".result-search-modal__slider");

        if(sliders.length === 0) return;
    
        sliders.forEach(slider=>{
            const parentSlider = slider.closest(".result-search-modal__box")
            const arrowPrev = parentSlider.querySelector(".main-slider__arrow_prev");
            const arrowNext = parentSlider.querySelector(".main-slider__arrow_next");

            const sl = new Swiper(slider, {
                // Optional parameters
                direction: 'horizontal',
                loop: false,
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 17,
    
                // Navigation arrows
                navigation: {
                  nextEl: arrowNext,
                  prevEl: arrowPrev,
                },
                breakpoints: {
                    1367:{
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 17,
                    },
                    993:{
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 21,
                    },
                    768: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 21,
                    },
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    }
                }
            });

            // Обработчик события смены слайда
            sl.on('slideChangeTransitionEnd', function () {
                arrowPrev.classList.add("is-visible")
            });
            sl.on('slideChange', function () {
                let val = sl.activeIndex;
                const btn = slider.querySelector(".slider-all-link");
                console.log(val);

                if(val === 4) {
                    btn.disabled = false;
                    console.log(123)
                }
            });
        });
    })
}

export const cardSlider = () => {
    document.addEventListener("DOMContentLoaded", ()=>{
        if(!document.querySelector(".card-item__slider-min") || !document.querySelector(".card-item__slider-big")) return
        const swiper = new Swiper(".card-item__slider-min", {
            loop: true,
            spaceBetween: 14,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            direction: 'vertical',
            
            breakpoints: {
                1367:{
                    spaceBetween: 11,
                    slidesPerView: 5,
                    direction: 'vertical',
                },
                1366:{
                    direction: 'horizontal',
                    slidesPerView: 5,
                },
                770:{
                    slidesPerView: 5,
                    direction: 'horizontal',
                },
                768:{
                    spaceBetween: 11,
                    slidesPerView: 4,
                    direction: 'horizontal',
                },
                320: {
                    spaceBetween: 6,
                    slidesPerView: 4,
                    direction: 'horizontal',
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
    
    
        const prevButton = document.querySelector('.card-item__slider-min-btn_prev');
        const nextButton = document.querySelector('.card-item__slider-min-btn_next');
    
        // Функция для обновления видимости кнопок
        
        function updateButtonVisibility() {
            const firstClass = swiper2.isBeginning ? 'is-hidden' : 'is-active';
            const secondClass = swiper2.isEnd ? 'is-hidden' : 'is-active';
    
            if(firstClass == 'is-hidden') {
                prevButton.classList.add('is-hidden')
                prevButton.classList.remove('is-active')
            }else{
                prevButton.classList.remove('is-hidden')
                prevButton.classList.add('is-active')
            }
    
            if(secondClass == 'is-hidden') {
                nextButton.classList.add('is-hidden')
                nextButton.classList.remove('is-active')
            }else{
                nextButton.classList.remove('is-hidden')
                nextButton.classList.add('is-active')
            }
            
        }
        // Изначально обновляем видимость кнопок
        updateButtonVisibility();
    
        // Обработчики событий для кнопок
        prevButton.addEventListener('click', () => {
            swiper2.slidePrev();
            updateButtonVisibility(); // Обновляем видимость кнопок после изменения слайда
        });
    
        nextButton.addEventListener('click', () => {
            swiper2.slideNext();
            updateButtonVisibility(); // Обновляем видимость кнопок после изменения слайда
        });
    
        // Обновляем видимость кнопок при изменении слайда
        swiper2.on('slideChange', updateButtonVisibility);
    })
}
export const cardSlider2 = () => {
    if(!document.querySelector(".card-item__slider-min_2") || !document.querySelector(".card-item__slider-big")) return
    const swiper = new Swiper(".card-item__slider-min_2", {
        loop: true,
        spaceBetween: 14,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        
        breakpoints: {
            1367:{
                spaceBetween: 11,
                slidesPerView: 5,
                direction: 'vertical',
            },
            1366:{
                direction: 'horizontal',
                slidesPerView: 5,
            },
            770:{
                slidesPerView: 5,
                direction: 'horizontal',
            },
            768:{
                spaceBetween: 11,
                slidesPerView: 3,
                direction: 'horizontal',
            },
            320: {
                spaceBetween: 6,
                slidesPerView: 4,
                direction: 'horizontal',
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

    const prevButton = document.querySelector('.card-item__slider-min-btn_prev');
    const nextButton = document.querySelector('.card-item__slider-min-btn_next');

    // Функция для обновления видимости кнопок
    
    function updateButtonVisibility() {
        const firstClass = swiper2.isBeginning ? 'is-hidden' : 'is-active';
        const secondClass = swiper2.isEnd ? 'is-hidden' : 'is-active';

        if(firstClass == 'is-hidden') {
            prevButton.classList.add('is-hidden')
            prevButton.classList.remove('is-active')
        }else{
            prevButton.classList.remove('is-hidden')
            prevButton.classList.add('is-active')
        }

        if(secondClass == 'is-hidden') {
            nextButton.classList.add('is-hidden')
            nextButton.classList.remove('is-active')
        }else{
            nextButton.classList.remove('is-hidden')
            nextButton.classList.add('is-active')
        }
        
    }
    // Изначально обновляем видимость кнопок
    // updateButtonVisibility();

    // Обработчики событий для кнопок
    prevButton.addEventListener('click', () => {
        swiper2.slidePrev();
        updateButtonVisibility(); // Обновляем видимость кнопок после изменения слайда
    });

    nextButton.addEventListener('click', () => {
        swiper2.slideNext();
        updateButtonVisibility(); // Обновляем видимость кнопок после изменения слайда
    });

    // Обновляем видимость кнопок при изменении слайда
    swiper2.on('slideChange', updateButtonVisibility);
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
            freeMode: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false,
            navigation: {
                nextEl: mainSlider.querySelector('.card-examples__slider-big_next'),
                prevEl: mainSlider.querySelector('.card-examples__slider-big_prev'),
            },
        });

        // Связываем слайдеры
        mainSwiper.controller.control = thumbsSwiper;
        thumbsSwiper.controller.control = mainSwiper;

        thumbsSwiper.on('click', function (swiper, event) {
            event.stopPropagation(); // Останавливаем всплытие события
        });
    });
}