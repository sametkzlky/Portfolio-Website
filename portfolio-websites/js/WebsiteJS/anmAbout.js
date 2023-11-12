const about = document.querySelector("#about");
function animation() {
  const controller = new ScrollMagic.Controller();
  const t8 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t8.fromTo(
    ".about-information",
    0.5,
    { x: "-7rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t8.fromTo(
    ".about-profile-me",
    0.5,
    { y: "7rem", opacity: 0 },
    { y: 0, opacity: 1 }
  );
  t8.fromTo(
    ".education",
    0.5,
    { y: "-5rem", opacity: 0 },
    { y: 0, opacity: 1 }
  );
  t8.fromTo(
    ".skills-one",
    0.5,
    { x: "-5rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t8.fromTo(
    ".skills-two",
    0.5,
    { x: "5rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );

  new ScrollMagic.Scene({
    triggerElement: "#about-profile",
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(t8)
    .addTo(controller);
}
animation();
