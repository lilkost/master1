export const modal = () => {
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
        // [
        //     document.querySelectorAll(".header__cutalog-btn"),
        //     document.querySelector(".modal-catalog"),
        //     document.querySelector(".modal-catalog__close"),
        //     "is-open",
        // ]
    ];

    // функция открытия модального окна
    const openModal = (modal, toggleClass, btn) => {
        if (!modal) return;
        modal?.classList.add(toggleClass);

        if (btn) {
            const dataAttrCatalog = btn.hasAttribute("data-catalog-open");
            dataAttrCatalog && changeStateCatalogModal();
        }
    }
    // функция закрытия модального окна
    const closeModal = (modal, toggleClass) => {
        if (!modal) return;
        modal?.classList.remove(toggleClass);
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
        if (btnOpen) {
            btnOpen.forEach(btn => {
                btn.addEventListener("click", () => openModal(modal, activeClass, btn));
            });
        }
        // закрытие окна
        if (btnClose) {
            btnClose.addEventListener("click", () => closeModal(modal, activeClass));
        }

        // проверка параметра для выполнения функционала скрытия модального окна при клике вне него, и при нажатии кнопки ESC
        if (!isHidden) return;
        // скрытие при клике вне блока
        window.addEventListener("click", (event) => {
            // проверка при клике в любое место на странице
            // если корневой эл. или тот по которому было нажатие соответсвует классу аккордеона
            // тогда оставлять класс, в противном случае класс удаляется
            if (event?.target?.classList?.value?.includes('modal-parent') && modal) closeModal(modal, activeClass);
        });
        // скрытие блока по нажатию на кнопку ESC
        window.addEventListener("keydown", (event) => {
            if (event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                modal.classList.remove(activeClass);
            }
        });
    }

    // вызов функции для навешивания событий на элементы модального окна
    node.forEach(arr => changeStateModal(arr, true));
}

export const modalSearch = () => {
    const inputSearch = document.querySelector(".header__form-input");
    const modalBackPage = document.querySelector(".back-page");
    const modalResult = document.querySelector(".result-search-modal");
    const header = document.querySelector(".header");
    const mobileMenu = document.querySelector(".mobile-menu");
    const modalCatalog = document.querySelector(".modal-catalog");

    if (!inputSearch && !modalBackPage && !header) return;

    function modalChangeStateOpen() {
        const val = inputSearch.value.length;
        header.classList.add("is-modal-open");

        if (val === 0) {
            modalBackPage.classList.add("is-open");
            header.classList.add("is-modal-open")
            modalResult.classList.remove("is-open");
            mobileMenu.classList.add("is-modal-open")
            
            document.querySelector("[data-btn-open='old-page']").classList.add("is-active");
        } else {
            modalResult.classList.add("is-open");
            document.querySelector("[data-btn-open='old-page']").classList.remove("is-active");
        }
    }

    function closeModal() {
        modalBackPage.classList.remove("is-open");
        modalResult.classList.remove("is-open");
        header.classList.remove("is-modal-open");

        document.querySelector("[data-btn-open='old-page']").classList.remove("is-active");
        document.querySelector(".mobile-menu").classList.remove("is-modal-open")
        mobileMenu.classList.remove("is-modal-open")
    }

    // Обработчик события фокуса
    inputSearch.addEventListener('focus', () => {
        modalChangeStateOpen();
        modalCatalog.classList.remove("is-open");
    });
    // Обработчик события потери фокуса
    inputSearch.addEventListener('blur', () => modalChangeStateOpen());
    // Обработчик события ввода текста
    inputSearch.addEventListener('input', () => {
        modalChangeStateOpen();
        modalCatalog.classList.remove("is-open");
    });

    // функционал закрытия всех окон
    const buttonsCloseModal = [
        document.querySelector(".back-page__close-btn"),
        document.querySelector(".result-search-modal__button")
    ];

    buttonsCloseModal.forEach(btn => {
        btn.addEventListener("click", () => closeModal());
    })
}