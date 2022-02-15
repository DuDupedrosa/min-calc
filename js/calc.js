export default function initCalc() {}

// const that get all input and show values
const inputTotalPrice = document.getElementById("input-initial");
const getShowTotalPrice = document.getElementById("showTotalPrice");
const getShowTotalDiscounts = document.getElementById("showTotaldiscount");
const getPeople = document.getElementById("input-people");

// function that active all events
const getValueTotalPrice = (event) => {
  // first event is to show the value in the span
  // clean to value of input because was giving NaN because had a ',' in place
  // of '.'
  // that's why use replace to substitute ',' for '.'
  const getValueOFInput = event.target.value;
  const cleanValurOfInput = getValueOFInput.replace(",", ".");
  const transformToNumber = +cleanValurOfInput;
  getShowTotalPrice.innerHTML = "R$ " + getValueOFInput;

  // case not occur the action in the button's discounts occur the division
  const getValueOfPeople = document.getElementById("input-people");

  const initDivisionOfPeople = (event) => {
    const getPeopleValue = +event.target.value;
    getShowTotalPrice.innerHTML =
      "R$ " + (transformToNumber / getPeopleValue).toFixed(2);
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
        "R$ " + (transformToNumber - 0.05 * transformToNumber).toFixed(2);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (transformToNumber * 0.05).toFixed(2);

      // case occur the discount and division of people start this code
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          (
            (transformToNumber - 0.05 * transformToNumber) /
            getPeopleValue
          ).toFixed(2);
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    dezPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (transformToNumber - 0.1 * transformToNumber).toFixed(2);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (transformToNumber * 0.1).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          (
            (transformToNumber - 0.1 * transformToNumber) /
            getPeopleValue
          ).toFixed(2);
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    quinzePorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (transformToNumber - 0.15 * transformToNumber).toFixed(2);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (transformToNumber * 0.15).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          (
            (transformToNumber - 0.15 * transformToNumber) /
            getPeopleValue
          ).toFixed(2);
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    vinteCincoPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (transformToNumber - 0.25 * transformToNumber).toFixed(2);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (transformToNumber * 0.25).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          (
            (transformToNumber - 0.25 * transformToNumber) /
            getPeopleValue
          ).toFixed(2);
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
    cinquentaPorcento() {
      getShowTotalPrice.innerHTML =
        "R$ " + (transformToNumber - 0.5 * transformToNumber).toFixed(2);

      // show discount
      getShowTotalDiscounts.innerHTML =
        "R$ " + (transformToNumber * 0.5).toFixed(2);

      // caso tenha divisao de pessoas vai ocorrer esse código
      const getValueOfPeople = document.getElementById("input-people");

      const initDivisionOfPeople = (event) => {
        const getPeopleValue = +event.target.value;
        getShowTotalPrice.innerHTML =
          "R$ " +
          (
            (transformToNumber - 0.5 * transformToNumber) /
            getPeopleValue
          ).toFixed(2);
      };
      getValueOfPeople.addEventListener("change", initDivisionOfPeople);
    },
  };

  // case occur click in the button of discounts start this action
  const getInputOFDiscounts = document.querySelectorAll("#discounts button");

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
