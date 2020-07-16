var feedbackBtn = document.querySelector(".feedback-btn");
var feedbackModal = document.querySelector(".feedback-modal");
var overlay = document.querySelector(".overlay");
var closeBtn = document.querySelector(".close-btn");
var feedbackName = document.querySelector("#feedback-name");
var feedbackEmail = document.querySelector("#feedback-email");
var feedbackForm = document.querySelector(".feedback-form");
var sliderBtns = document.querySelectorAll(".slider-pagination-btn");
var sliederItems = document.querySelectorAll(".slider-item")
var pageBody = document.querySelector(".page-body");
var loginBtn = document.querySelector(".user-nav-btn-login");
var cartBtn = document.querySelector(".user-nav-btn-cart");


loginBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
});

cartBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
});

feedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("show-block-bounce");
    overlay.classList.add("show-block");
    feedbackName.focus();
});

closeBtn.addEventListener("click", function () {
    feedbackModal.classList.remove("show-block-bounce");
    overlay.classList.remove("show-block");
});

overlay.addEventListener("click", function () {
    feedbackModal.classList.remove("show-block-bounce");
    overlay.classList.remove("show-block");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && feedbackModal.classList.contains("show-block-bounce")) {
        evt.preventDefault();
        feedbackModal.classList.remove("show-block-bounce");
        overlay.classList.remove("show-block");
    }
});

sliderBtns[0].addEventListener("click", function () {
    pageBody.classList.remove("slide-2");
    pageBody.classList.remove("slide-3");
    pageBody.classList.add("slide-1");

    sliderBtns[1].classList.remove("current");
    sliderBtns[2].classList.remove("current");
    sliderBtns[0].classList.add("current");

    sliederItems[1].classList.remove("current");
    sliederItems[2].classList.remove("current");
    sliederItems[0].classList.add("current");
})

sliderBtns[1].addEventListener("click", function () {
    pageBody.classList.remove("slide-1");
    pageBody.classList.remove("slide-3");
    pageBody.classList.add("slide-2");

    sliderBtns[0].classList.remove("current");
    sliderBtns[2].classList.remove("current");
    sliderBtns[1].classList.add("current");

    sliederItems[0].classList.remove("current");
    sliederItems[2].classList.remove("current");
    sliederItems[1].classList.add("current");
})

sliderBtns[2].addEventListener("click", function () {
    pageBody.classList.remove("slide-1");
    pageBody.classList.remove("slide-2");
    pageBody.classList.add("slide-3");

    sliderBtns[0].classList.remove("current");
    sliderBtns[1].classList.remove("current");
    sliderBtns[2].classList.add("current");

    sliederItems[0].classList.remove("current");
    sliederItems[1].classList.remove("current");
    sliederItems[2].classList.add("current");
})