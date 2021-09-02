


const saludoNativo = document.getElementById('saludo')
const itemNativo = document.getElementsByClassName('listado-item')

const saludoQueryJS = document.querySelectorAll('p.saludo')

for (const saludo of saludoQueryJS) {

    console.log(saludo)
}


const saludojQuery = $('#saludo')
const listado = $('.listado')
const item = $('.listado li.listado-item:nth-of-type(2)')

// .innerText
$('#saludo').text('Hola fans de Topa!')

console.log( $('#saludo').text() )


// .innerHTML
const items = $('.listado-item')

items.html(`
    <h3>Item</h3>
    <p>Hola</p>
`)

// listado.before(`<h2>Lista</h2>`)
listado.after(`<h2>Lista</h2>`)

const tutores = [
    {
        nombre: 'Martin',
        rol: 'Tutor',
        musica: 'Topa'
    },
    {
        nombre: 'Lautaro',
        rol: 'Tutor',
        musica: 'Hermética'
    },
    {
        nombre: 'Carlos',
        rol: 'Tutor',
        musica: 'Five'
    },
]

const contenedor = document.getElementById('contenedor')

// const div = document.createElement('div')
// div.innerHTML = `
//             <h4>${obj.nombre}</h4>
//             <p>Rol: ${obj.rol}</p>
//             <p>Música favorita: ${obj.musica}</p>
// `

// contenedor.appendChild(div)

// $('#contenedor').append(div)

for (const tutor of tutores) {

    $('#contenedor').append(`
        <div>
            <h4>${tutor.nombre}</h4>
            <p>Rol: ${tutor.rol}</p>
            <p>Música favorita: ${tutor.musica}</p>
        </div>
    `)
}

// console.log( $('#contenedor')[0] )