export const buttonsClickFn = () => {
    const nodesButtons = [
        [document.querySelectorAll(".btn-favorites"), false],
        [document.querySelectorAll(".new__btn-like"), false],
        [document.querySelectorAll(".new__top-save-btn"), false],
        [document.querySelectorAll(".btn-subscribe"), false],
        [document.querySelectorAll(".filter-btn"), true],
        [document.querySelectorAll(".basket__item-buttons-state-btn_fav"), false],
        [document.querySelectorAll(".card-item__favorites-btn"), false],
    ];

    if(nodesButtons.length === 0) return;

    nodesButtons.forEach(arr=> {
        if(arr.length === 0) return;

        const arrBtns = arr[0];
        const isToggleClick = arr[1];

        if(isToggleClick) {
            arrBtns.forEach(btn=>{
                btn.addEventListener("click", ()=>{
                    arrBtns.forEach(b=>b.classList.remove("is-active"));
                    btn.classList.add("is-active");
                })
            })
        }else {
            arrBtns.forEach(b=> {
                b.addEventListener("click",()=>{
                    b.classList.toggle("is-active");
                });
            })
        }
    })

    if(document.querySelector(".card__buttons-time")) {
        document.querySelectorAll(".card__buttons-time").forEach(btn=>{
            btn.addEventListener("click", ()=>{
                btn.classList.toggle("is-show");
            })
        })
    }
}

export const busketFn = () => {
    const parents = document.querySelectorAll(".parent-count");

    if(parents.length === 0) return;

    parents.forEach(parent=> {
        const btnPlus = parent.querySelector(".btn-plus");
        const btnMinus = parent.querySelector(".btn-minus");
        const result = parent.querySelector(".count-result");

        const plus = () => {
            let count = Number(parent.getAttribute('data-count'));
            count += 1;

            result.innerHTML = count;
            parent.setAttribute('data-count', count);
        }

        const minus = () => {
            let count = Number(parent.getAttribute('data-count'));

            if(count <= 1) return;
            count -=1;

            result.innerHTML = count;
            parent.setAttribute('data-count', count);
        }
        if(btnPlus && btnMinus) {
            btnPlus.addEventListener("click", ()=> plus());
            btnMinus.addEventListener("click", ()=> minus());
        }
    });
}

export const sliderBtnToPage = () => {
    const buttons = document.querySelectorAll(".slider-all-link");

    buttons.forEach(btn=> {
        btn.addEventListener("click", ()=>{
            let attrCount = Number(btn.getAttribute("data-count"));
            const attrLink = btn.getAttribute("data-link").trim();

            if(attrCount === 2) {
                window.location.href = attrLink
            }else {
                attrCount+=1;
                btn.setAttribute("data-count", attrCount);
            }
        });
        const parent = btn.closest(".main-slider__arrows");
        const btnPrev = parent.querySelector(".main-slider__arrow_prev");
        
        btnPrev.addEventListener("click", ()=> {
            btn.setAttribute("data-count", 1);
        })
    });
}

export const mobileMenuButtonFn = () => {
    const mobButtons = document.querySelectorAll(".mobile-menu__item");
    const parent = document.querySelector(".back-page");
    const oldPage = document.querySelector(".back-page");
    const p = document.querySelector(".mobile-menu");
    const header = document.querySelector(".header");
    const mobileMenu = document.querySelector(".mobile-menu");

    if(!mobButtons) return;

    let btnOpenOldPage;

    mobButtons.forEach(btn=>{
        const attrBtn = String(btn.getAttribute("data-btn-open")).trim();

        if(attrBtn === "old-page") btnOpenOldPage = btn;
    });

    if (btnOpenOldPage instanceof Node && oldPage) {
        btnOpenOldPage.addEventListener("click", ()=>{
            document.querySelector(".result-search-modal").classList.remove("is-open")
            oldPage.classList.add("is-open");
            btnOpenOldPage.classList.add("is-active");
            header.classList.add("is-modal-open");
            mobileMenu.classList.add("is-modal-open")

            document.querySelector(".modal-catalog").classList.remove("is-open");
            document.querySelector(".header__cutalog-btn").classList.remove("is-active");
            
            document.querySelectorAll(".modal-catalog__section").forEach(i=>i.classList.remove("is-open"));
            document.querySelectorAll(".modal-catalog__section")[0].classList.add("is-open");
            document.querySelector(".modal-catalog").classList.remove("is-animate");
        });
        
        const btnClose = oldPage.querySelector(".back-page__close-btn");

        btnClose.addEventListener("click", ()=>{
            oldPage.classList.remove("is-open");
            btnOpenOldPage.classList.remove("is-active");
            header.classList.remove("is-modal-open")
            mobileMenu.classList.remove("is-modal-open")
        });

        const button = p;
        const footer = document.querySelector('.footer');
        
        window.addEventListener('scroll', () => {
            const footerRect = footer.getBoundingClientRect();
            const buttonRect = parent.getBoundingClientRect();
        
            // Проверяем, достиг ли пользователь футера
            if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
                // Если футер виден, скрываем кнопку
                button.classList.add("is-hidden");
            } else {
                // Если футер не виден, показываем кнопку
                button.classList.remove("is-hidden");
            }
        });
    }
}

export const subscribeButton = () => {
    const buttons = document.querySelectorAll(".btn-subscribe-masster");

    if(!buttons) return;

    buttons.forEach(btn=>{
        btn.addEventListener("click", ()=> {
            btn.classList.toggle("is-active");
            const nodeText = btn.querySelector("span");

            if(!nodeText) return;

            if(btn.classList.contains("is-active")) {
                nodeText.textContent = btn.getAttribute('data-active-text').trim();
            } else {
                nodeText.textContent = btn.getAttribute('data-default-text').trim();
            }
        });
    });
}