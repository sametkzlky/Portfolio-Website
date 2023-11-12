const project = document.querySelector("#project");
function animation() {
  const controller = new ScrollMagic.Controller();
  const t7 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t7.fromTo(
    ".project-info",
    0.5,
    { x: "-7rem", opacity: 0 },
    { x: 0, opacity: 1 }
  );
  t7.fromTo(".card", 0.5, { y: "-5rem", opacity: 0 }, { y: 0, opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: "#project",
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(t7)
    .addTo(controller);  

}


animation();
