export default function initCalc() {}

// const that get all input and show values
const inputTotalPrice = document.getElementById("input-initial");
const getShowTotalPrice = document.getElementById("showTotalPrice");
const getShowTotalDiscounts = document.getElementById("showTotaldiscount");
const getPeople = document.getElementById("input-people");

// function that active all events
const getValueTotalPrice = (event) => {
  // first event is to show the value in the span
  const getValueOFInput = +event.target.value;
  getShowTotalPrice.innerHTML = "R$ " + getValueOFInput;

  // case not occur the action in the button's discounts occur the division
  const getValueOfPeople = document.getElementById("input-people");

  const initDivisionOfPeople = (event) => {
    const getPeopleValue = +event.target.value;
    getShowTotalPrice.innerHTML =
      "R$ " + (getValueOFInput / getPeopleValue).toFixed(2);
  };
  getValueOfPeople.addEventListener("change", initDivisionOfPeople);

  // case occur the action in the button's of discounts
  // creat a object to access the methods case occur the event of click
  // in the buttons, each method makes your update in the total value because
  // each method have a value of discount and show total value and the show value
  // of discount
  // case occur the division each method makes your division and show value's division
  const discountsMethods = {
    cincoPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (getValueOFInput - 0.05 * getValueOFInput);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (getValueOFInput * 0.05).toFixed(2);

      // case occur the discount and division of people start this code
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          ((getValueOFInput - 0.05 * getValueOFInput) / getPeopleValue).toFixed(
            2
          );
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    dezPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (getValueOFInput - 0.1 * getValueOFInput);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (getValueOFInput * 0.1).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          ((getValueOFInput - 0.1 * getValueOFInput) / getPeopleValue).toFixed(
            2
          );
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    quinzePorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (getValueOFInput - 0.15 * getValueOFInput);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (getValueOFInput * 0.15).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          ((getValueOFInput - 0.15 * getValueOFInput) / getPeopleValue).toFixed(
            2
          );
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    vinteCincoPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (getValueOFInput - 0.25 * getValueOFInput);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (getValueOFInput * 0.25).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          ((getValueOFInput - 0.25 * getValueOFInput) / getPeopleValue).toFixed(
            2
          );
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    cinquentaPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (getValueOFInput - 0.5 * getValueOFInput);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (getValueOFInput * 0.5).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          ((getValueOFInput - 0.5 * getValueOFInput) / getPeopleValue).toFixed(
            2
          );
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
  };

  // case occur click in the button of discounts start this action
  const getInputOFDiscounts = document.querySelectorAll("#discounts input");

  const initValueDiscounts = (event) => {
    const nameOfInput = event.target.name;
    discountsMethods[nameOfInput]();
  };

  getInputOFDiscounts.forEach((input) => {
    input.addEventListener("click", initValueDiscounts);
  });
};
/* first event that active other events */
inputTotalPrice.addEventListener("change", getValueTotalPrice);

// event to clean the values
const getClearButton = document.querySelector('[data-button="clean"]');

const onClearValues = () => {
  getShowTotalPrice.innerHTML = `R$ 00,00`;
  getShowTotalDiscounts.innerHTML = `R$ 00,00`;
  inputTotalPrice.value = "";
  getPeople.value = "";
};

getClearButton.addEventListener("click", onClearValues);
