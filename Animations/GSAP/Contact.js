document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });

    // Set initial transform origins
    gsap.set("#contact-underline", {
        transformOrigin: "left"
    });

    gsap.set(".map_cover", {
        transformOrigin: "top"
    });

    let loadTl = gsap.timeline();
    loadTl.from("#contact-underline", {
        scaleX: 0,
        duration: 1,
        ease: "power2.out"
    })
        .from("#contact-title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.3")
        .from(".contact_left_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 }
        }, "<0.2")
        .from(".contact_right_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 }
        }, "<0.2")
    loadTl.to(".map_cover", {
        clipPath: "inset(0 0 100% 0)", // Using clipPath instead of height
        duration: 1,
        ease: "power2.out"
    });
});