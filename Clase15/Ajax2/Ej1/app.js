
const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

const lista = document.getElementById('lista')
const input = document.getElementById('input-busqueda')
const form = document.getElementById('form')


const llamarAPI = (busqueda, limit) => {

    fetch(`https://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${KEY}&q=${busqueda}`)
        .then( (res) => res.json())
        .then( (data) => {

            const images = data.data
            lista.innerHTML = ''   
            images.forEach( (img) => {
    
                lista.innerHTML += `
                    <li class="card col-3">
                        <img src=${img.images.downsized_medium.url} alt="" />
                    </li>
                `
            })
        })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const limit = $('.radio:checked').val()

    llamarAPI(input.value, limit)
})


