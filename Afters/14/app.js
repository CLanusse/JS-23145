


const quoteDOM = document.getElementById('quote')
const autorDOM = document.getElementById('autor')
const quoteID = document.getElementById('quote-id')

let contador = 1

const callApiBB = (id) => {

    quoteDOM.innerText = ''
    quoteID.innerText = ''
    autorDOM.innerText = 'CARGANDO...'

    fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
        .then( (response) => response.json() )
        .then( (data) => {

            const {quote, author, quote_id} = data[0]
            
            quoteDOM.innerText = quote
            autorDOM.innerText = author
            quoteID.innerText = `Cita n° ${quote_id}`

            contador++
        })

    // AJAX con jQuery

    // $.get(`https://www.breakingbadapi.com/api/quotes/${id}`, (res) => {
    
    //     // const quote = res[0].quote
    //     // const author = res[0].author
        
    //     const {quote, author, quote_id} = res[0]

        // quoteDOM.innerText = quote
        // autorDOM.innerText = author
        // quoteID.innerText = `Cita n° ${quote_id}`

        // contador++
    // })
}

// callApiBB(contador)

const buttonSiguiente = document.getElementById('boton-siguiente')

// buttonSiguiente.addEventListener('click', () => {
//     callApiBB(contador)
// })

// async function unaFuncion() {

// }

const callApiAsync = async (id) => {

    quoteDOM.innerText = ''
    quoteID.innerText = ''
    autorDOM.innerText = 'CARGANDO...'

    const response = await fetch(`https://www.breakingbadapi.com/api/quotes/${id}`)
    const data = await response.json()

    const {quote, author, quote_id} = data
    
    quoteDOM.innerText = quote
    autorDOM.innerText = author
    quoteID.innerText = `Cita n° ${quote_id}`

    contador++
}

callApiAsync(contador)

buttonSiguiente.addEventListener('click', () => {
    callApiAsync(contador)
})




