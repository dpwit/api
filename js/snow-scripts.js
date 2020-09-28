const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'img/DPW_Skull_Logo_Mask.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

//Create a request variable and assign a new XMLHttpRequest (xhr) object to it.
var request = new XMLHttpRequest()

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api.weatherunlocked.com/api/snowreport/127?app_id=22ed04c9&app_key=0ef57c453a565015c7905509c7a53fbe', true)

request.onload = function () {
  //begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((resort) => {
      const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = resort.resortname

        const h2 = document.createElement('h2')
        h2.textContent = resort.resortcountry

        const p = document.createElement('p')
        p.textContent = resort.conditions

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(h2)
        card.appendChild(p)
      })
  } else {
    const errorMessage = document.createElement('marquee')
      errorMessage.textContent = `It's not working!`
      app.appendChild(errorMessage)
  }
}

//Send request.
request.send()
