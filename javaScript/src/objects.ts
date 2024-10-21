interface Producto {
  nombre: string;
  precio: number;
  disponible?: boolean;
  imagen?: string;
  showInfo: () => void;
}

//Object Literal
const producto: Producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  showInfo(){
    console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
  }
}

// Object.freeze(producto); // No se puede modificar el objeto

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

// Destructuring
const { nombre, precio } = producto;
console.log(nombre);
console.log(precio);

producto.showInfo();
/*
function newProduct (nombre: string, precio: number): {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}*/

console.log(Object.keys(producto)); // Devuelve las llaves del objeto
console.log(Object.values(producto)); // Devuelve los valores del objeto
console.log(Object.entries(producto)); // Devuelve las llaves y valores del objeto
