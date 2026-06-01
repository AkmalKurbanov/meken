const selects = document.querySelectorAll(".select-js");

selects.forEach((select) => {
  const selected = select.querySelector(".select__selected-wrap");
  const dropdown = select.querySelector(".select__dropdown");
  const hiddenInput = select.querySelector(".select__input");
  const options = select.querySelectorAll(".select__option");

  selected.addEventListener("click", (e) => {
    e.stopPropagation();

    selects.forEach((otherSelect) => {
      if (otherSelect !== select) {
        otherSelect.classList.remove("is-open");
      }
    });

    select.classList.toggle("is-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();

      const value = option.getAttribute("data-val");
      const text = option.textContent;

      hiddenInput.value = value;
      selected.textContent = text;

      options.forEach((opt) => opt.classList.remove("is-selected"));
      option.classList.add("is-selected");

      select.classList.remove("is-open");
    });
  });
});

document.addEventListener("click", () => {
  selects.forEach((select) => {
    select.classList.remove("is-open");
  });
});
