$(document).ready(()=>{
    $('#input-tarea').trigger('focus')
})



$('#boton-form').click((event)=>{
    event.preventDefault()
    console.log("Boton clickeado")
    $('#form-tareas').trigger('submit')
})

$('#input-tarea').on('input', (e)=>{

    const valor = e.target.value.trim()
    
    if (valor.length <= 3) {
        $('#input-tarea').addClass('invalido')
        $('#input-tarea').removeClass('valido')
    } else {
        $('#input-tarea').addClass('valido')
        $('#input-tarea').removeClass('invalido')
    }
})


let contadorTarea = 0

$('#form-tareas').submit((e)=>{
    e.preventDefault()

    const valor = $('#input-tarea').val().trim()

    if (valor.length > 3) {
        contadorTarea++

        $('#listado').append(`
            <li>
                <h4>${valor}</h4>
                <button id="eliminar-${contadorTarea}">Eliminar</button>
            </li>
        `)

        // $(`#eliminar-${contadorTarea}`).click( function () {
        //     this.parentElement.remove()
        // })
        
        // $(`#eliminar-${contadorTarea}`).click((e) => {
        //     e.target.parentElement.remove()
        // })

        $(`#eliminar-${contadorTarea}`).click(() => {
            $(`#eliminar-${contadorTarea}`).parent().remove()
        })

        $('#input-tarea').val('')
        $('#input-tarea').removeClass('valido')
        $('#input-tarea').trigger('focus')
    }
})