const contact = document.querySelector("#contact");
function animation() {
  const controller = new ScrollMagic.Controller();
  const t6 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t6.fromTo(
    ".contact-information",
    0.5,
    { x: "-7rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t6.fromTo(
    ".contact-cover",
    0.5,
    { y: "5rem", opacity: 0 },
    { y: 0, opacity: 1 }
  );

  new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(t6)
    .addTo(controller);
}

animation();
