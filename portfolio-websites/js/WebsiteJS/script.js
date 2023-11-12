const navbar = document.querySelector("#nav");

function animation() {
  const controller = new ScrollMagic.Controller();
  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t1.fromTo(navbar, 0.5, { y: "-10rem" }, { y: 0 });
  t1.fromTo(".label", 0.5, { x: "-5rem", opacity: 0 }, { x: 0, opacity: 1 });
  t1.fromTo(".header", 0.5, { opacity: 0 }, { opacity: 1 });

  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t2.fromTo(".img", 0.5, { x: "-10rem", opacity: 0 }, { x: 0, opacity: 1 });
  t2.fromTo(
    ".home-about-me",
    0.5,
    { x: "5rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  new ScrollMagic.Scene({
    triggerElement: "#homeAbout",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller);

  const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t4.fromTo(
    ".group-ux",
    0.5,
    { y: "5rem", opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.3 }
  );

  new ScrollMagic.Scene({
    triggerElement: "#open",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t4)
    .addTo(controller);

  const t5 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t5.fromTo(
    ".home-contact",
    0.5,
    { y: "-7rem", opacity: 0 },
    { y: 0, opacity: 1 }
  );
  t5.fromTo(".footer", 0.5, { y: "5rem", opacity: 0 }, { y: 0, opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(t5)
    .addTo(controller);

  const t6 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t6.fromTo(".top", 0.5, { y: "-7rem", opacity: 0 }, { y: 0, opacity: 1 });
  new ScrollMagic.Scene({
    triggerElement: "#homeAbout",
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(t6)
    .addTo(controller);
}

animation();
