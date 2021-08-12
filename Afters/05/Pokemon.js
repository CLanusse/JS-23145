class Pokemon {
    constructor(nombre, tipo, vidas, ataque, nivel) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidas = vidas;
        this.ataque = ataque;
        this.nivel = nivel;
    }

    get obtenerNombre() {
        return this.nombre;
    }

    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    get obtenerTipo() {
        return this.tipo;
    }

    set cambiarTipo(nuevoTipo) {
        this.tipo = nuevoTipo;
    }

    get obtenerVidas() {
        return this.vidas;
    }

    set cambiarVidas(nuevasVidas) {
        this.vidas = nuevasVidas;
    }

    get obtenerAtaque() {
        return this.ataque;
    }

    set cambiarNombre(nuevoAtaque) {
        this.ataque = nuevoAtaque;
    }

    get obtenerNivel() {
        return this.nivel;
    }

    set cambiarNivel(nuevoNivel) {
        this.nivel = nuevoNivel;
    }

    existir() {
        console.log('El pokemon ' + this.nombre + ' esta existiendo');
    }

    atacar(pokemonAtacar) {
        console.log(this.nombre + ' ataco con un daño de ' + this.ataque + ' al Pokemon ' + pokemonAtacar.obtenerNombre);
        pokemonAtacar.recibirAtaque(this.ataque);
    }

    recibirAtaque(dañoAtaque) {
        this.vidas -= dañoAtaque; //this.vidas = this.vidas - dañoAtaque
        if(this.vidas <= 0 ) {
            console.log('El pokemon ' + this.obtenerNombre + ' a sido derrotado');
        } else {
            console.log('El pokemon '+ this.obtenerNombre + ' sigue vivo');
        }
    }
}