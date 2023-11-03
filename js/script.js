let userCount = 0;
let machineCount = 0;
const options = ["piedra", "papel", "tijera"];
let machineElection = "";
let userElection = "";

const btns = document.querySelectorAll(".boton-jugada");
const counterMachineText = document.querySelector("#contador-ordenador");
const counterUserText = document.querySelector("#contador-usuario");
const results = document.querySelector("#resultados");

for (let btn of btns) {
  if (btn.textContent === "Piedra") {
    btn.addEventListener("click", (e) => {
      machineElection = options[Math.floor(Math.random() * options.length)];
      userElection = "piedra";

      if (machineElection === "piedra") {
        results.innerHTML = `<p>Empate</p>`;
      } else if (machineElection === "papel") {
        results.innerHTML = `<p>Ha ganado la máquina</p>`;
        machineCount += 1;
        counterMachineText.textContent = `Puntos de la máquina: ${machineCount}`;
      } else {
        results.innerHTML = `<p>Has ganado!</p>`;
        userCount += 1;
        counterUserText.textContent = `Tus puntos: ${userCount}`;
      }
    });
  } else if (btn.textContent === "Tijera") {
    btn.addEventListener("click", (e) => {
      machineElection = options[Math.floor(Math.random() * options.length)];
      userElection = "tijera";

      if (machineElection === "tijera") {
        results.innerHTML = `<p>Empate</p>`;
      } else if (machineElection === "piedra") {
        results.innerHTML = `<p>Ha ganado la máquina</p>`;
        machineCount += 1;
        counterMachineText.textContent = `Puntos de la máquina: ${machineCount}`;
      } else {
        results.innerHTML = `<p>Has ganado!</p>`;
        userCount += 1;
        counterUserText.textContent = `Tus puntos: ${userCount}`;
      }
    });
  } else {
    btn.addEventListener("click", (e) => {
      machineElection = options[Math.floor(Math.random() * options.length)];
      userElection = "papel";

      if (machineElection === "papel") {
        results.innerHTML = `<p>Empate</p>`;
      } else if (machineElection === "tijera") {
        results.innerHTML = `<p>Ha ganado la máquina</p>`;
        machineCount += 1;
        counterMachineText.textContent = `Puntos de la máquina: ${machineCount}`;
      } else {
        results.innerHTML = `<p>Has ganado!</p>`;
        userCount += 1;
        counterUserText.textContent = `Tus puntos: ${userCount}`;
      }
    });
  }
}
