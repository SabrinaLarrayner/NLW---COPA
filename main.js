function creatGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
      `
}
let delay = -0.4
function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="Cards" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
    `
}
document.querySelector("#app").innerHTML = `

  <header>
        <img class="img1" src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="card">
        ${creatCard(
          "24/11/2022",
          "Quinta",
          creatGame("brazil", "16:00", "servia") +
            creatGame("india", "15:45", "britis") +
            creatGame("camaron", "16:00", "brazil")
        )}
        ${creatCard(
          "28/11/2022",
          "Segunda",
          creatGame("brazil", "13:00", "swit") +
            creatGame("armenia", "22:45", "camaron") +
            creatGame("armenia", "08:35", "swit")
        )}
      </main>
`
