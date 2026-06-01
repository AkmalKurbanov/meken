const inputBlocks = document.querySelectorAll(".input");

inputBlocks.forEach((block) => {
  const input = block.querySelector("input");

  if (!input) return;

  const checkValue = () => {
    if (input.value.trim() !== "") {
      block.classList.add("is-filled");
    } else {
      block.classList.remove("is-filled");
    }
  };

  input.addEventListener("input", checkValue);
  input.addEventListener("blur", checkValue);

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(checkValue, 100);
  });
});