export const headerScroll = () => {
    const header = document.querySelector(".header");

    if(!header) return;

    window.addEventListener('scroll', function() {
        const scrollTopPX = window.scrollY || window.pageYOffset;
        
        if(scrollTopPX > 100) {
            header.classList.add("is-scroll")
        }else {
            header.classList.remove("is-scroll")
        }
    });
}