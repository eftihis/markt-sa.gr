document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    const xOffset = window.innerWidth <= 768 ? 50 : 100;
    // Set initial transform origins
    gsap.set("#fleet-underline, .underline_faded, .underline_fleet", {
        transformOrigin: "left"
    });

    //Load Animations
    const loadTl = gsap.timeline();
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
        }, "<0.2");

    // Animate cover images below the header area
    gsap.fromTo(".imag_pair_img_cover",
        {
            autoAlpha: 0,
            y: 40
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.18,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
                trigger: ".image_grid_cover",
                start: "top 85%",
                once: true
            }
        }
    );

    ScrollTrigger.create({
        trigger: ".fleet_services_wrap",
        start: "top 80%",
        once: true,
        onEnter: () => {
            // Keep ScrollTrigger state fresh on Webflow pages with dynamic layout shifts.
            ScrollTrigger.refresh();
        }
    });
   

    // Fleet section animations
    const fleetSections = gsap.utils.toArray(".fleet-section_wrap");
    fleetSections.forEach((section) => {
        const sectionTl = gsap.timeline({ paused: true });
        const title = section.querySelector(".fleet_section_title");
        const sectionBody = Array.from(section.children).filter((child) => {
            return !child.classList.contains("fleet_section_title");
        });
        const underlines = section.querySelectorAll(".underline_fleet");
        const fleetItems = section.querySelectorAll(".fleet-item_wrap");

        if (title) {
            sectionTl.from(title, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
            });
        }

        if (sectionBody.length) {
            sectionTl.from(sectionBody, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
                stagger: { amount: 0.3 }
            }, "<0.2");
        }

        if (underlines.length) {
            sectionTl.from(underlines, {
                scaleX: 0, // Instead of width: 0
                duration: 1,
                ease: "power2.out",
                stagger: { amount: 0.5, from: "random" }
            }, "<0.1");
        }

        if (fleetItems.length) {
            sectionTl.from(fleetItems, {
                opacity: 0,
                x: xOffset,
                duration: 0.8,
                ease: "power2.inOut",
                stagger: { amount: 0.5 }
            }, "<0.2");
        }

        ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            once: true,
            onEnter: () => {
                sectionTl.play();
            }
        });
    });
});