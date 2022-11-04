function creatGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
      `
}
function creatCard(date, day, games) {
  return `
  <div class="Cards">
          <h2>${date}<span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
    `
}
document.querySelector("#app").innerHTML = `

  <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="card">
        ${creatCard(
          "24/11",
          "Quinta",
          creatGame("brazil", "16:00", "servia") +
            creatGame("india", "15:45", "britis")
        )}
        ${creatCard("28/11", "Segunda", creatGame("brazil", "13:00", "swit"))}
        ${creatCard("12/12", "Sexta", creatGame("camaron", "16:00", "brazil"))}
      </main>
`
