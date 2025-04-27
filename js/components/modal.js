const modal = () => {
    // массив всех модалок на странице
    // 1. Кнопка/Кнопки открытия
    // 2. Модальное окно
    // 3. Кнопка скрытия
    // 4. Активный класс
    // Кнопку/Кнопки открытия задавать через querySelectorAll
    const node = [
        [
            document.querySelectorAll('.btn-open-modal-new'), 
            document.querySelector(".modal-news"), 
            document.querySelector(".modal-news__close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.btn-open-modal-price'), 
            document.querySelector(".modal-prices"), 
            document.querySelector(".modal-prices__close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.btn-open-modal-interest'), 
            document.querySelector(".modal-interest"), 
            document.querySelector(".modal-interest__close"), 
            "is-open",
        ],
        [
            document.querySelectorAll(".filter__mobile-btn"),
            document.querySelector(".filter-modal"),
            document.querySelector('.filter-modal__close-btn'),
            "is-open"
        ],
        [
            document.querySelectorAll('.one-click-btn'), 
            document.querySelector(".modal-one-click "), 
            document.querySelector(".modal-one-click__close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.quest-click-btn'), 
            document.querySelector(".modal-quest-click"), 
            document.querySelector(".modal-quest-click__close"), 
            "is-open",
        ],
        [
            document.querySelectorAll('.lot-modal-btn'), 
            document.querySelector(".modal-lot"), 
            document.querySelector(".modal-lot__close"), 
            "is-open",
        ],
    ];

    // функция открытия модального окна
    const openModal = (modal, toggleClass) => {
        modal.classList.add(toggleClass);
    }
    // функция закрытия модального окна
    const closeModal = (modal, toggleClass) => {
        modal.classList.remove(toggleClass);
    }

    // функция для создания событий у элементов модального окна
    const changeStateModal = (arr, isHidden = false) => {
        // деструктуризация входного массива
        // ===========
        // 1. Кнопка/Кнопки открытия
        // 2. Модальное окно
        // 3. Кнопка скрытия
        // 4. Активный класс
        // 5. Не обязательный параметр
        // ===========
        const [btnOpen, modal, btnClose, activeClass] = arr;

        // открытие окна
        if(btnOpen) {
            btnOpen.forEach(btn=> {
                btn.addEventListener("click", ()=>openModal(modal, activeClass));
            });
        }
        // закрытие окна
        if(btnClose) {
            btnClose.addEventListener("click", ()=>closeModal(modal,activeClass));
        }
        
        // проверка параметра для выполнения функционала скрытия модального окна при клике вне него, и при нажатии кнопки ESC
        if(!isHidden) return;
        // скрытие при клике вне блока
        window.addEventListener("click", (event)=> {
            // проверка при клике в любое место на странице
            // если корневой эл. или тот по которому было нажатие соответсвует классу аккордеона
            // тогда оставлять класс, в противном случае класс удаляется
            if(event?.target?.classList?.value?.includes('modal-parent')) modal.classList.remove(activeClass);
        });
        // скрытие блока по нажатию на кнопку ESC
        window.addEventListener("keydown", (event)=> {
            if(event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                modal.classList.remove(activeClass);
            }
        });


    }

    // вызов функции для навешивания событий на элементы модального окна
    node.forEach(arr=> changeStateModal(arr, true));
}

export default modal;