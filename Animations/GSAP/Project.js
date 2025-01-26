document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    let loadTl = gsap.timeline();
    // Set initial scale-transform-origin for gallery slide
    gsap.set(".gallery_slide_wrap", {
        transformOrigin: "top" // Important for scaleY animation
    });
    loadTl.from(".gallery_slide_wrap", {
        clipPath: "inset(0 0 100% 0)",
        duration: 1,
        ease: "power2.out"
    })
        .from("#project-title", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.5")
        .from("#project-text", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.2")
        .from(".swiper_bullets_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.2")
        .from(".swiper_drag_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.1")
        .from(".swiper_arrows_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.1")
        .from(".btn_main_wrap", {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.1");

    // Service Animations
    let projectInfoTl = gsap.timeline({ paused: true });
    // Set initial transform-origin for underlines
    gsap.set(".underline_faded", {
        transformOrigin: "left" // Important for scaleX animation
    });

    ScrollTrigger.create({
        trigger: ".project_info_wrap",
        start: "top 80%",
        onEnter: () => {
            projectInfoTl.play();
        }
    });

    projectInfoTl.from(".underline_faded", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out",
        stagger: { amount: 0.5 }
    })
        .from(".project_content_subttitle", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.2")
        .from(".project_content_right_wrap", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.2");
});