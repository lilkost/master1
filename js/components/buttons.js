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