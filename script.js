const container = document.querySelector(".advice-container");

const dice = document.querySelector(".dice");

// using fetch to get the backend api containg the advice

async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");

  let text = await response.json();
  console.log(text.slip.advice);
  return {
    adviceTxt: text.slip.advice,
    adviceId: text.slip.id
  }
}
getAdvice();

dice.addEventListener("click", async () => {

    const user = await getAdvice()
    if(user){
        const adviceTxt = document.querySelector(".advice-txt");
        adviceTxt.textContent = `"${user.adviceTxt}"`;

        const adviceId = document.querySelector(".advice-id");
        adviceId.textContent = `ADVICE #${user.adviceId}`;
    }
 
 
});
