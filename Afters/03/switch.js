//Practicamos switch (a veces necesitamos NO usar break)
let animal=prompt("Ingrese el animal").toLowerCase()

switch(animal){
    case "elefante":
    case "vaca":
    case "tortuga":
        alert("Puede subir al arca")
        break
    default:
        alert("No puede subir")
    break
}