
// const url = "https://jsonplaceholder.typicode.com/posts"

let datos = []

$.get("https://jsonplaceholder.typicode.com/posts", (response) => {

    datos = response
    console.log(datos)

    datos.forEach( (el) => {
    
        $('ul').append(`
            <li>${el.title}</li>
        `)
    })
})

const post = {
    nombre: 'Lautaro',
    bebida: 'Té de menta'
}

$.post("https://jsonplaceholder.typicode.com/posts", post, (response) => {

    console.log(response)
})

$.get('./tutores.json', (tutores) => {

    console.log(tutores)

    tutores.forEach((tutor)=>{

        $('ul').append(`
            <li>
                <h2>${tutor.nombre}</h2>
                <p>ID: ${tutor.id}</p>
            </li>
        `)
    })

})



console.log(datos)

