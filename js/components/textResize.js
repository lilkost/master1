export const textResize = () => {
    const textResizeNode = document.querySelectorAll(".text-resize");

    // if(textResizeNode.length === 0) return;


    const setText = () => {
        textResizeNode.forEach(node=> {
            const textDesktop = String(node.getAttribute("data-desk-text"));
            const textMobile = String(node.getAttribute("data-mob-text"));

            if(window.innerWidth <= 568) {
                node.innerHTML = textMobile
            }
            if(window.innerWidth > 568) {
                node.innerHTML = textDesktop
            }
        })
    }

    setText();
    let debounceTimeout;

    function handleResize() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            setText();
        }, 200);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
}