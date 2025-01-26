document.addEventListener('DOMContentLoaded', () => {

    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    // Set initial transform origin
    gsap.set('#hero-underline, .underline', {
        transformOrigin: "left"
    });

    let splits = {};

    function initializeSplits() {
        // Create splits for specific elements using IDs
        splits['hero-title'] = new SplitType("#hero-title", {
            types: "words, chars",
            tagName: "span"
        });
        splits['hero-subtitle'] = new SplitType("#hero-subtitle", {
            types: "words, chars",
            tagName: "span"
        });
        splits['about-text'] = new SplitType("#about-text", {
            types: "words",
            tagName: "span"
        });
    }
    // Initialize splits
    initializeSplits();

    // Load Animations
    let loadTl = gsap.timeline();
    loadTl.from("#hero-underline", {
        scaleX: 0,
        duration: 1,
        ease: "power2.out",
    })
        .from(".hero_image_wrap", {
            scale: 0,
            borderRadius: 1000,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
        }, "<0.2")
        .from(splits['hero-title'].words, {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 }
        }, "<0.5")
        .from(splits['hero-subtitle'].words, {
            opacity: 0,
            x: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 }
        }, "<0.2")
        .from("#hero-buttons", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.4");

    // About Text Animating
    let aboutTextTl = gsap.timeline({
        scrollTrigger: {
            trigger: "#about-text",
            start: "top 90%",
            end: "top center",
            scrub: true
        }
    });
    aboutTextTl.from(splits['about-text'].words, {
        opacity: 0.2,
        duration: 0.2,
        ease: "power1.out",
        stagger: { each: 0.4 }
    });

    // Service Animations
    let serviceTl = gsap.timeline({ paused: true });
    ScrollTrigger.create({
        trigger: ".service_items_wrap",
        start: "top 60%",
        onEnter: () => {
            serviceTl.play();
        }
    });
    serviceTl.from(".underline.is-service", {
        scaleX: 0,
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

    // Project Animations - Optimized version with responsive x-offset
    const xOffset = window.innerWidth <= 768 ? 50 : 100;

    gsap.utils.toArray(".project_wrap").forEach((project) => {
        gsap.from(project, {
            opacity: 0,
            x: xOffset,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: project,
                start: "top 95%",
                toggleActions: "play reverse play reverse"
            }
        });
    });

    // Temporarily disable ScrollTrigger during menu toggle
    document.querySelector('.nav_button').addEventListener('click', () => {
        ScrollTrigger.getAll().forEach(st => st.disable());
        setTimeout(() => {
            ScrollTrigger.getAll().forEach(st => st.enable());
        }, 200);
    });

    function createScrollTrigger(triggerElement, timeline) {
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
            }
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 60%",
            onEnter: () => timeline.play()
        });
    }

    //Team Animations
    let mm = gsap.matchMedia();
    mm.add("(min-width: 478px)", () => {
        let teamTl = gsap.timeline();
        ScrollTrigger.create({
            trigger: ".team_cards_wrap",
            start: "top 60%",
            end: "top 45%",
            scrub: true,
            animation: teamTl
        });
        teamTl.from(".team_member_wrap", {
            y: () => (Math.random() * 180 - 60),
            ease: "back.out(2)",
            clearProps: "all"
        });
    });
});