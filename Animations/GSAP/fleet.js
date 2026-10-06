document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    const xOffset = window.innerWidth <= 768 ? 50 : 100;
    // Set initial transform origins
    gsap.set("#fleet-underline, .underline_faded", {
        transformOrigin: "left"
    });

    //Load Animations
    let loadTl = gsap.timeline();
    loadTl.from("#fleet-underline", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out"
    })
        .from("#fleet-title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.3")
        .from("#fleet-subtitle-text", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.2")
        .from(".imag_pair_img_cover", {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power2.out",
            stagger: { amount: 0.35 }
        }, "<0.1");
   

    // Service Animations
    let serviceTl = gsap.timeline({ paused: true });
    ScrollTrigger.create({
        trigger: ".vehicles_wrap",
        start: "top 60%",
        onEnter: () => {
            serviceTl.play();
        }
    });

    serviceTl.from(".underline_fleet", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out",
        stagger: { amount: 0.5, from: "random" }
    })
       
        .from(".fleet_section_title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.4 }
        }, "<.2")
        .from(".fleet_section_content", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.4 }
        }, "<.2")
        .from(".fleet-item_wrap", {
            opacity: 0,
            x: xOffset,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: { amount: 0.5 }
        }, "");
});