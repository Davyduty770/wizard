document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })

        // Close mobile menu after clicking
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
        }
      }
    })
  })

  // Form Submission Handler
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Here you would typically send this data to a server
    console.log("Form submitted:", { name, email, message })

    // Clear form
    contactForm.reset()

    // Show success message (you can customize this)
    alert("Thank you for your message! I will get back to you soon.")
  })

  // Add animation to social buttons on hover
  const socialButtons = document.querySelectorAll(".social-btn")

  socialButtons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "translateY(-3px)"
    })

    button.addEventListener("mouseout", () => {
      button.style.transform = "translateY(0)"
    })
  })
})

