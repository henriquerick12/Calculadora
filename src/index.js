(function () {
  const screen = document.querySelector(".form__screen");
  const buttons = document.querySelectorAll(".btn");
  const clean = document.querySelector(".clean");
  const equals = document.querySelector(".equals");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equals.addEventListener("click", (e) => {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let response = eval(screen.value);
      screen.value = response;
    }
  });

  clean.addEventListener('click', (e) => {
    screen.value = ""
  })
})();
