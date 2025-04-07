export const inputMask = () => {
    const inputPhone = document.querySelectorAll(".phone-input");

    if(inputPhone.length === 0) return;

    inputPhone.forEach(input=> {
        const element = input;
        const maskOptions = {
            mask: '+{7} (000) - 000 - 00 - 00'
        };
        const mask = IMask(element, maskOptions);
    });

}

export const inputPasswordFn = () => {
    const parentLabel = document.querySelectorAll(".label-password");

    if(parentLabel.length === 0) return;

    parentLabel.forEach(label=> {
        const inputPassword = label.querySelector(".input-password");
        const btnPassword = label.querySelector(".btn-password");

        btnPassword.addEventListener("click", ()=> {
            // Проверяем текущий тип поля
            if (inputPassword.type === 'password') {
                inputPassword.type = 'text'; // Меняем на текст
            } else {
                inputPassword.type = 'password'; // Меняем на пароль
            }
        });
    });
}