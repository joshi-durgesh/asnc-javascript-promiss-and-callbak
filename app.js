const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
      console.log(posData);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Timmer done!");
  }, 0);
  console.log("getting position...");
}

button.addEventListener("click", trackUserHandler);
// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
