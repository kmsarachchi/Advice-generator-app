const adviceid = document.querySelector(".advice-id");
const advicetext = document.getElementById("advice-text");
const advicebtn = document.getElementById("advice-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const {
      slip: { id, advice },
    } = data;
    adviceid.innerText = `#${id}`;
    advicetext.innerText = `"${advice}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}

getAdvice(); // Fetch advice when the page loads

advicebtn.addEventListener("click", getAdvice); // Fetch advice on button click
