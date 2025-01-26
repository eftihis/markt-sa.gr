document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    // Set initial transform origins
    gsap.set("#service-underline, .underline_faded", {
        transformOrigin: "left"
    });

    //Load Animations
    let loadTl = gsap.timeline();
    loadTl.from("#service-underline", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out"
    })
        .from("#service-title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.3");

    // Service Animations
    let serviceTl = gsap.timeline({ paused: true });
    ScrollTrigger.create({
        trigger: ".service_items_wrap",
        start: "top 60%",
        onEnter: () => {
            serviceTl.play();
        }
    });

    serviceTl.from(".underline_faded", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out",
        stagger: { amount: 0.5, from: "random" }
    })
        .from(".service_title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.3")
        .from(".service_icon", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.2")
        .from(".service_description", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.2");
});