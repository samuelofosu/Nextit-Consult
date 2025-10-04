
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Initializing GSAP animations")
  initAnimations()
  initMobileMenu()
  initSmoothScrolling()
})

function initAnimations() {
  console.log("[v0] Setting up scroll-triggered animations")

  gsap.to(".header", {
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
    scrollTrigger: {
      trigger: ".hero",
      start: "bottom 90%",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
    },
  })

  gsap.fromTo(
    ".hero-content h1",
    {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    },
  )

  gsap.fromTo(
    ".content-image img",
    {
      opacity: 0,
      x: -100,
      rotation: -5,
    },
    {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        end: "bottom 20%",
      },
    },
  )

  gsap.fromTo(
    ".content-text p",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".content-text",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".core-values h2",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".core-values",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".values-container",
    {
      opacity: 0,
      y: 100,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".values-container",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".value-card",
    {
      opacity: 0,
      y: 50,
      rotation: 10,
    },
    {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".values-container",
        start: "top 70%",
      },
    },
  )

  gsap.fromTo(
    ".vm-card",
    {
      opacity: 0,
      y: 80,
      scale: 0.8,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".vision-mission",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".strategy-content",
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".revenue-strategy",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".strategy-image",
    {
      opacity: 0,
      x: 100,
      rotation: 5,
    },
    {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".revenue-strategy",
        start: "top 80%",
      },
    },
  )
  gsap.fromTo(
    ".services-content",
    {
      opacity: 0,
      x: -80,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".professional-services",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".services-image img",
    {
      opacity: 0,
      scale: 0.8,
      rotation: -3,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".professional-services",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".growth-image",
    {
      opacity: 0,
      x: -100,
      scale: 0.9,
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".growth-section",
        start: "top 80%",
      },
    },
  )

  gsap.fromTo(
    ".growth-content",
    {
      opacity: 0,
      x: 100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".growth-section",
        start: "top 80%",
      },
    },
  )


  gsap.fromTo(
    ".footer-content > *",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%",
      },
    },
  )

  gsap.fromTo(
    ".footer-bottom",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer-bottom",
        start: "top 95%",
      },
    },
  )
  document.querySelectorAll(".value-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })

  document.querySelectorAll(".vm-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    })
  })

  gsap.to(".hero", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
  gsap.to(".value-icon", {
    y: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger: 0.2,
  })
}

function initMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu")
  const nav = document.querySelector(".nav")

  if (mobileMenu && nav) {
    mobileMenu.addEventListener("click", () => {
      nav.classList.toggle("active")
      mobileMenu.classList.toggle("active")

      const spans = mobileMenu.querySelectorAll("span")
      if (mobileMenu.classList.contains("active")) {
        gsap.to(spans[0], { rotation: 45, y: 6, duration: 0.3 })
        gsap.to(spans[1], { opacity: 0, duration: 0.3 })
        gsap.to(spans[2], { rotation: -45, y: -6, duration: 0.3 })
      } else {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 })
        gsap.to(spans[1], { opacity: 1, duration: 0.3 })
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 })
      }
    })
  }
}

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}


ScrollTrigger.batch("img", {
  onEnter: (elements) => {
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
    )
  },
  once: true,
})

let resizeTimer
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh()
  }, 250)
})

window.addEventListener("load", () => {
  console.log("[v0] Page loaded, starting entrance animations")
  gsap.to(".hero", {
    opacity: 1,
    duration: 0.5,
  })

  ScrollTrigger.refresh()
})
