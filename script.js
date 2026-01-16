const container = document.querySelector(".advice-container");
const adviceTxt = document.querySelector(".advice-txt");
const dice = document.querySelector(".dice");
const adviceId = document.querySelector(".advice-id");

// using fetch to get the backend api containg the advice

async function getAdvice() {
  try {
    // this api can return the same advice more than once
    const response = await fetch("https://api.adviceslip.com/advice");

    // converting the data gotten from the backend to a json string
    let text = await response.json();
    console.log(text.slip.advice);

    return {
      adviceTxt: text.slip.advice,
      adviceId: text.slip.id,
    };
  } catch (error) {
    alert("failed to fetch data");
  }
}
getAdvice();

dice.addEventListener("click", async () => {
  try {
    const advice = await getAdvice();

    adviceTxt.textContent = `"${advice.adviceTxt}"`;

    adviceId.textContent = `ADVICE #${advice.adviceId}`;
  } catch (error) {
    console.log("error loading advice");
  }
});
