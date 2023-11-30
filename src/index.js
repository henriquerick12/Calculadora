import { numbers, operations, simbols } from "./data.js";

const createNumbers = (array) => {
    console.log(array)
  const buttonNumber = document.createElement("button");

  buttonNumber.classList.add("btn");

  array.forEach((element) => {
    //buttonNumber.innerHTML = element;
    console.log(element)
  });

  return buttonNumber;
};

const renderButtons = (array) => {
  const buttons = document.querySelector(".buttons__content");

  buttons.innerHTML = "";

  array.forEach((element) => {
    const button = createNumbers(element);

    buttons.appendChild(button);
  });
};

//renderButtons(numbers)
