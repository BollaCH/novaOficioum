const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const formEl = document.querySelector(".form");
const formBtn = document.querySelector("#faleconosco");
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

formBtn.addEventListener("click", function () {
  formEl.classList.toggle("form-open");
});
