function creatCard() {
  return `
  <div class="Cards">
          <h2>24/11 <span>Quinta</span></h2>
          <ul>
            <li>
              <img src="./assets/icon-brazil.svg" alt="Bandeira do Brasil" />
              <strong>16:00</strong>
              <img src="./assets/icon-servia.svg" alt="Bandeira da Sérvia" />
            </li>
          </ul>
        </div>
    `
}
document.querySelector("#app").innerHTML = `

  <header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main class="card">
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
      </main>
`
