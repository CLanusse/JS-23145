
$('#abrir').click(()=>{
    $('h2').show()
})

$('#cerrar').click(()=>{
    $('h2').hide()
})

$('#fadein').click(()=>{
    $('h2').fadeIn(2000)
})

$('#fadeout').click(()=>{
    $('h2').fadeOut(2000)
})

// ============== 

// const titilar = () => {
//     $('h3').fadeToggle(200,()=>{
//         titilar()
//     })
// }

// titilar()

$('#acordeon').click(()=>{
    $('#acordeon p').slideToggle(500)
})


// =============

// $('.texto').css('color', 'rgba(0, 0, 0, 0.5)')
// $('.texto').css('font-weight', '700')

// $('.texto').css({
//     "color": 'red',
//     'font-weight': '700',
//     'font-size': '32px'
// })

$('#random').click(()=>{
    let a = Math.round( Math.random() * 255 )
    let b = Math.round( Math.random() * 255 )
    let c = Math.round( Math.random() * 255 )
    
    $('body').css('background-color', `rgb(${a}, ${b}, ${c})`)
})

$('.texto')
    .animate({
        "opacity": "1",
        "font-size": "80px"
    }, 1000)
    .animate({
        "font-size": "16px"
    }, 1000)
    .slideUp(200)
    .delay(1000)
    .slideDown(200)
    .delay(1000)
    .slideUp(200)
    .delay(1000)
    .slideDown(200)
    .delay(1000)
    


// ================= 


$('#irRandom').click(()=>{
    $('html, body').animate({
        scrollTop: $("#random").offset().top  
    }, 2000);
})


//  SWEET ALERT 

$('#sweetalert').click(()=>{

    Swal.fire({
        icon: 'success',
        title: 'Aguante Yo!',
        text: 'Estás usando Sweet Alert 2'
      })

})