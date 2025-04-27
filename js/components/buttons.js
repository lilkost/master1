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
    });
}

export const mobileMenuButtonFn = () => {
    const mobButtons = document.querySelectorAll(".mobile-menu__item");
    const parent = document.querySelector(".mobile-menu__old-page");
    const oldPage = document.querySelector(".mobile-menu__old-page");
    const p = document.querySelector(".mobile-menu");

    if(!mobButtons) return;

    let btnOpenOldPage;

    mobButtons.forEach(btn=>{
        const attrBtn = String(btn.getAttribute("data-btn-open")).trim();

        if(attrBtn === "old-page") btnOpenOldPage = btn;
    });

    if (btnOpenOldPage instanceof Node && oldPage) {
        btnOpenOldPage.addEventListener("click", ()=>{
            oldPage.classList.add("is-open");
            btnOpenOldPage.classList.add("is-active");
        });
        
        const btnClose = oldPage.querySelector(".mobile-menu__old-page-btn");

        btnClose.addEventListener("click", ()=>{
            oldPage.classList.remove("is-open");
            btnOpenOldPage.classList.remove("is-active");
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