class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {return(`${this.nombre} ${this.apellido}`)};
    getBookName() {return(this.libros)};
    countMascotas() {return(this.mascotas.length)}
}

let usuario1 = new Usuario ('Benito', 'Camelas', [{nombre: 'Como cambiar su nombre', autor: 'Debora Meltrozo'}])

console.log(usuario1.getFullName());
console.log(usuario1.getBookName.name());
//console.log(usuario1.countMascotas());