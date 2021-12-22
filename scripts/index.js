const menuNode = document.querySelector(".header__menu");
let isMenuHidden = true;

menuNode.addEventListener("click", (event) => {
    const headerNavigationNode = document.querySelector(".header__nav");

    headerNavigationNode.classList.toggle("header__nav--show");
})