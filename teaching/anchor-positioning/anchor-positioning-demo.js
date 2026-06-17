const anchorBtn = document.querySelector("#anchorBtn");
const fallbackToggle = document.querySelector("#fallbackToggle");
const demoArea = document.querySelector(".demo-area");
const positionButtons = document.querySelectorAll("[data-position]");
const tooltip = document.querySelector("#tooltip");
const sideButtons = document.querySelectorAll("[data-side]");

let fallbacksEnabled = true;

fallbackToggle.addEventListener("click", () => {
  fallbacksEnabled = !fallbacksEnabled;

  document.body.classList.toggle("no-fallbacks", !fallbacksEnabled);

  fallbackToggle.textContent = fallbacksEnabled
    ? "Disable Fallbacks"
    : "Enable Fallbacks";
});

sideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tooltip.classList.remove("top", "bottom", "left", "right");
    tooltip.classList.add(button.dataset.side);
  });
});

positionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const position = button.dataset.position;
    const areaWidth = demoArea.clientWidth;
    const areaHeight = demoArea.clientHeight;

    if (position === "top") {
      anchorBtn.style.top = "20px";
      anchorBtn.style.left = `${areaWidth / 2 - anchorBtn.offsetWidth / 2}px`;
    }

    if (position === "bottom") {
      anchorBtn.style.top = `${areaHeight - 70}px`;
      anchorBtn.style.left = `${areaWidth / 2 - anchorBtn.offsetWidth / 2}px`;
    }

    if (position === "left") {
      anchorBtn.style.top = `${areaHeight / 2}px`;
      anchorBtn.style.left = "10px";
    }

    if (position === "right") {
      anchorBtn.style.top = `${areaHeight / 2}px`;
      anchorBtn.style.left = `${areaWidth - anchorBtn.offsetWidth - 10}px`;
    }
  });
});

const rect = button.getBoundingClientRect();

tooltip.style.top = rect.top - 40 + "px";
tooltip.style.left = rect.left + "px";