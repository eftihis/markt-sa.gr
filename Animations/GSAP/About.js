document.addEventListener('DOMContentLoaded', () => {
    gsap.set('[gsap-animate]', { autoAlpha: 1 });
    // Set initial transform origins
    gsap.set("#about-underline, #team-underline", {
        transformOrigin: "left"
    });

    //Load Animations
    let loadTl = gsap.timeline();
    loadTl.from("#about-underline, #team-underline", {
        scaleX: 0, // Instead of width: 0
        duration: 1,
        ease: "power2.out",
        stagger: { amount: 0.5 }
    })
        .from("#about-title, #team-title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<0.3")
        .from(".about_tittle_title", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<0.2")
        .from(".about_item_text", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.5 }
        }, "<.2");

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