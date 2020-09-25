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
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  //begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        const h2 = document.createElement('h2')
        h2.textContent = movie.director

        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300)
        p.textContent = `${movie.description}...`

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
