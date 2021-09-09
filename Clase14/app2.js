
let id = 1

$('#siguiente').on('click', ()=>{

    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (res) => {

    
        $('.poke-info').html(`
            <h2>${res.name}</h2>
            <img src=${res.sprites.front_default} alt=""/>
        `)
    })
    id++

})

// $('#btn-buscar').on('click', () => {
//     const busqueda = $('#input-busqueda').val()

//     $.get(`https://pokeapi.co/api/v2/pokemon/${busqueda}`, (res) => {
    
        // $('.poke-info').html(`
        //     <h2>${res.name}</h2>
        //     <img src=${res.sprites.front_default} alt=""/>
        // `)

//         id= res.id
//     })
// })


// FETCH 

$('#btn-buscar').on('click', () => {
    const busqueda = $('#input-busqueda').val()

    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        .then((res) => res.json())
        .then((data) => {
            
            $('.poke-info').html(`
                <h2>${data.name}</h2>
                <img src=${data.sprites.front_default} alt=""/>
            `)
    
            id = data.id
        })

})
