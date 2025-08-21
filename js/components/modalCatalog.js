export const createModalCatalog = () => {
    const btnOpen = document.querySelector(".header__cutalog-btn");
    const headerNode = document.querySelector(".header");
    const modal = document.querySelector(".modal-catalog")
    const catalogItemsNode = document.querySelectorAll(".modal-catalog__item"); // список элементов
    const catalogSections = document.querySelectorAll(".modal-catalog__section");
    const parentCatalogCategoryTitleNode = document.querySelector(".modal-catalog__sections-top"); // родительский элемент для заголовка
    const catalogCategoryTitleNode = document.querySelector(".modal-catalog__sections-title"); // заголовок
    const catalogCategorySectionsNode = document.querySelectorAll(".modal-catalog__section"); // Секции
    const btnBack = document.querySelector(".modal-catalog__btn-back");
    const sectionItem = document.querySelectorAll(".modal-catalog__section-item");

    function toString(str) {
        return String(str.trim().replaceAll(" ", "").toLowerCase());
    }

    function changeStateCatalogModal() {
        if (document.querySelectorAll(".modal-catalog__item")) {
            document.querySelectorAll(".modal-catalog__item").forEach(i => i.classList.remove("is-active"));
            document.querySelectorAll(".modal-catalog__item")[0].classList.add("is-active");
            document.querySelector(".modal-catalog__sections-title").innerHTML = document.querySelectorAll(".modal-catalog__item")[0].querySelector(".modal-catalog__item-name").textContent;
        }
        if (catalogSections) {
            catalogSections.forEach(i => i.classList.remove("is-open"));
            catalogSections[0].classList.add("is-open");
        }
    }

    btnOpen.addEventListener("click", () => {
        modal.classList.toggle("is-open");
        btnOpen.classList.toggle("is-active");
        headerNode.classList.toggle("is-modal-open");

        if (window.innerWidth <= 480) {
            document.querySelector(".mobile-menu").classList.toggle("is-modal-open");
            document.querySelector(".result-search-modal").classList.remove("is-open");
            document.querySelector(".back-page").classList.remove("is-open");

            if (!btnOpen.classList.contains("is-active")) {
                document.querySelector(".header").classList.remove("is-modal-open")
                document.querySelector(".mobile-menu").classList.remove("is-modal-open");
            } else {
                document.querySelector(".header").classList.add("is-modal-open");
                document.querySelector(".mobile-menu").classList.add("is-modal-open");
            }
        }
        document.querySelectorAll(".mobile-menu__item").forEach(i=>i.classList.remove("is-active"))

    });

    catalogItemsNode.forEach(catItem => {
        catItem.addEventListener("mouseover", () => {
            setActive(catItem);
        }); // событие при наведении
        catItem.addEventListener("mouseout", () => {
            // changeTitle("mouseout", catItem);
            // changeActiveItem("removeAll");
        }); // событие при уводке мыши
        catItem.addEventListener("click", (e) => {
            if(window.innerWidth <= 992) e.preventDefault();
            const isTouchDevice = !!('ontouchstart' in window || navigator.maxTouchPoints);
            if (isTouchDevice) {
                setActive(catItem);
                modal.classList.add("is-animate");
            }
        });
    });
    btnBack.addEventListener("click", () => {
        modal.classList.remove("is-animate");
    });
    //
    function setActive(catItem) {
        const titleNode = catItem.querySelector(".modal-catalog__item-name");
        if (!titleNode) return;
        const titleNodeTextContent = titleNode?.textContent;
        if (!titleNodeTextContent) return;
        changeTitle("mouseover", catItem, titleNodeTextContent);
        const dataId = toString(catItem.getAttribute("data-id"));
        if (!dataId) return;
        changeActiveItem("add", dataId, catItem);
    }
    // функция для работы с заголовком
    function changeTitle(params, node, title = "") {
        switch (params) {
            case "mouseover":
                if (catalogCategoryTitleNode) parentCatalogCategoryTitleNode.classList.remove("is-hidden");
                catalogCategoryTitleNode.innerHTML = title;
                break;
            case "mouseout":
                if (catalogCategoryTitleNode) parentCatalogCategoryTitleNode.classList.add("is-hidden");
                break;
            default:
                break;
        }
    }
    // функция для работы с элеменатми
    function changeActiveItem(params, id = "", currentItem = {}) {
        let currentSection;

        catalogItemsNode.forEach(i => {
            i.classList.remove("is-active");
        });
        catalogCategorySectionsNode.forEach(i => {
            i.classList.remove("is-open");

            if (id.length && params === "add") {
                const dataId = toString(i.getAttribute("data-body-id"));

                if (!dataId) return;

                if (dataId === id) {
                    currentSection = i;
                }
            }
        });

        if (params === "removeAll") return;

        currentItem && currentItem.classList.add("is-active");
        currentSection && currentSection.classList.add("is-open");
    }

    // событие свайпа
    const swipeArea = catalogSections;

    let startX;

    swipeArea.forEach(item => {
        item.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
        });
        item.addEventListener('touchend', (e) => {
            const touch = e.changedTouches[0];
            const endX = touch.clientX;

            const diffX = endX - startX;

            const threshold = 20;

            if (diffX > threshold) {
                modal.classList.remove("is-animate");
            }
        });
    })

    // открытие модального окна с поиском 
    if (sectionItem) {
        console.log(true)
        sectionItem.forEach(item => {
            item.addEventListener("click", (e) => {
                console.log("click 1")
                if (window.innerWidth > 480) return;
                e.preventDefault();
                console.log("click 2")
                modal.classList.remove("is-open");
                btnOpen.classList.remove("is-active");
                document.querySelector(".result-search-modal").classList.add("is-open");

                catalogCategorySectionsNode.forEach(i => i.classList.remove("is-open"));
                catalogCategorySectionsNode[0].classList.add("is-open");
                modal.classList.remove("is-animate");
            });
        })
    }
}