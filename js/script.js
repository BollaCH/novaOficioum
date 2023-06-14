const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const formEl = document.querySelector(".form__wrapper");
const contatoBtn = document.querySelector("#faleconosco");
const formLink = document.querySelector(".form-ref");
const formClose = document.querySelector(".icon-close-form")
const formBtn = document.querySelector(".form-btn")
const form = document.querySelector(".form")
const formS = document.querySelector(".form__success")
const sucessAlert = document.querySelector("#alert")



function remove() {
  headerEl.classList.remove("nav-open")
}

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.querySelectorAll('.nav-bar__navigation--link').forEach(item => {
  item.addEventListener('click', event => {
    remove()
  })
})

contatoBtn.addEventListener("click", function () {
  formEl.classList.toggle("form-open");
});
formLink.addEventListener("click", function () {
  formEl.classList.toggle("form-open");
});
formClose.addEventListener("click", function () {
  formEl.classList.remove("form-open")
})
form.addEventListener("submit", () => {
  formEl.classList.remove("form-open")
})
form.addEventListener("submit", () => {
  sucessAlert.classList.add("show")
})

const allLinks = document.querySelectorAll(".scroll-nav");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});