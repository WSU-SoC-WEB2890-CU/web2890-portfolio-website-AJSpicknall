import "bootstrap"

const yearTarget = document.querySelector("[data-year]")
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear()
}

const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelector(".nav-links")

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open")
    navToggle.setAttribute("aria-expanded", String(isOpen))
  })
}
