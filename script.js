const section = document.querySelector("#expect-scroll");
const stepsWrap = document.querySelector(".expect-steps");
const steps = [...document.querySelectorAll(".step")];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateTimeline() {
  const rect = section.getBoundingClientRect();
  const scrollable = section.offsetHeight - window.innerHeight;
  const scrolled = clamp(-rect.top, 0, scrollable);
  const progress = scrollable ? scrolled / scrollable : 0;
  const activeIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length)
  );

  stepsWrap.style.setProperty("--progress", progress.toFixed(4));

  steps.forEach((step, index) => {
    step.classList.toggle("is-active", index <= activeIndex);
  });
}

updateTimeline();
window.addEventListener("scroll", updateTimeline, { passive: true });
window.addEventListener("resize", updateTimeline);
