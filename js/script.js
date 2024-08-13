document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    openSideBar();
    closeSideBar();
    handleScroll();
    backToTop();
    productTextSlice();
    productSearchTest();
});

function openSideBar() {
    document.querySelector("aside").style.display = "block";
}

function closeSideBar() {
    document.querySelector("aside").style.display = "none";
}

function handleScroll() {
    window.addEventListener("scroll", () => {
        const backToTopBtn = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });
}

function backToTop() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    backToTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

function productSearchTest() {
    const productSearch = document.querySelector("main > section.form > form > input");
    addEventListener("submit", (e) => {
        if (productSearch.value = "" || productSearch.length == 0) {
            e.preventDefault();
            alert("검색어를 입력하세요.");
        } else {
            productSearch.submit();
        }
    });
}