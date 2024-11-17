// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre : string = "Maria Ines Mendoza";
let edad : number = 26;
let esEstudiante : boolean = true;

console.log("Nombre: ", nombre, "Edad: ", edad, "Es estudiante: ", esEstudiante);


// Ejercicio 2
// Declarar una funci�n que reciba dos n�meros como par�metros y retorne su suma.
// Asegurar que los par�metros y el valor de retorno sean de tipo number.
// Llamar a la funci�n e imprimir el resultado.
// Realizar otra funci�n que reste dos n�meros.
// Realizar otra funci�n que multiplique dos n�meros.

function suma(a: number , b: number): number {
return a + b;
}

console.log("Suma: ", suma(9 , 11));

function resta(a: number , b: number): number{
    return a-b;
}

console.log("resta: ", resta(8 , 15));

function multiplicar(a: number , b: number): number{
    return a*b;
}
console.log("multiplicar: ", multiplicar(8 , 20));

// Ejercicio 3
// Crear un array de n�meros llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada n�mero multiplicado por 2 (usando forEach())

let numeros: number[] = [2, 4, 8, 12, 16];
numeros.forEach(function(numero) {
    console.log(numero * 2);
});

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.

// Declarar la interfaz "Persona"
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
  }
  
  // Crear tres objetos que siguen la estructura de la interfaz
  const persona1: Persona = {
    nombre: 'Carlos',
    edad: 25,
    esEstudiante: true,
  };
  
  const persona2: Persona = {
    nombre: 'María',
    edad: 30,
    esEstudiante: false,
  };
  
  const persona3: Persona = {
    nombre: 'Lucía',
    edad: 20,
    esEstudiante: true,
  };
  console.log(persona1, persona2, persona3);
  

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

let variablenueva: string | number = "Hola";
console.log("Variable: ", variablenueva);

variablenueva = 7;

console.log("Variable: ", variablenueva);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una funci�n que reciba el array y retorne los productos en stock (s�lo en stock). 
// Crear otra funci�n que reciba el array y retorne los productos sin stock (s�lo sin stock). 
// Se puede usar m�todo filter() para esto.


interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

let producto1: Producto = {
    nombre: "Producto1",
    precio: 300,
    enStock: true
}

let producto2: Producto = {
    nombre: "Producto2",
    precio: 500,
    enStock: false
}

let producto3: Producto = {
    nombre: "Producto3",
    precio: 600,
    enStock: true
}

let producto4: Producto = {
    nombre: "Producto4",
    precio: 700,
    enStock: false
}

let producto5: Producto = {
    nombre: "Producto5",
    precio: 1000,
    enStock: true
}

let producto6: Producto = {
    nombre: "Producto6",
    precio: 900,
    enStock: false
}

let productos: Producto[] = [producto1, producto2, producto3, producto4, producto5, producto6];

function productosEnStock(productos: Producto[]): Producto[] {
    return productos.filter(producto => producto.enStock);
}

function productosSinStock(productos: Producto[]): Producto[] {
    return productos.filter(producto => !producto.enStock);
}

console.log("Productos en stock: ", productosEnStock(productos));

console.log("Productos sin stock: ", productosSinStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elecci�n (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una funci�n que reciba el array y retorne los clientes que cumplan una condici�n (segun el booleano que hayamos creado). 
// Crear otra funci�n que reciba el array y retorne los clientes que cumplan la condici�n inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar m�todo filter() para esto.


interface Cliente {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
    provincia: string;
}

let cliente1: Cliente = {
    nombre: "Mary",
    edad: 40,
    esEstudiante: false,
    provincia: "Santa Fe"
}

let cliente2: Cliente = {
    nombre: "Jessi",
    edad: 50,
    esEstudiante: false,
    provincia: "Funes"
}

let cliente3: Cliente = {
    nombre: "Ana",
    edad: 67,
    esEstudiante: true,
    provincia: "Santa Fe"
}

let cliente4: Cliente = {
    nombre: "Marisa",
    edad: 40,
    esEstudiante: true,
    provincia: "Funes"
}

let cliente5: Cliente = {
    nombre: "Barbi",
    edad: 35,
    esEstudiante: true,
    provincia: "Rioja"
}

let cliente6: Cliente = {
    nombre: "Laura",
    edad: 45,
    esEstudiante: false,
    provincia: "Tucuman"
}

let clientes: Cliente[] = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6];

function clientesEstudiantes(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => cliente.esEstudiante);
}

function clientesNoEstudiantes(clientes: Cliente[]): Cliente[] {
    return clientes.filter(cliente => !cliente.esEstudiante);
}

console.log("Clientes estudiantes: ", clientesEstudiantes(clientes));

console.log("Clientes no estudiantes: ", clientesNoEstudiantes(clientes));

//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
interface Productos {
    nombre: string;
    precio: number;
  }
  
  const catalogo: Productos[] = [
    { nombre: "sandalias", precio: 60 },
    { nombre: "Ojotas", precio: 70 },
    { nombre: "Zapatillas", precio: 80},
    { nombre: "Carteras", precio: 200},
  ];
  
  catalogo.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
  });

//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
//Imprimor productosBaratos en la consola.

const productosBaratos = catalogo.filter((producto) => producto.precio < 50);
console.log(productosBaratos);

//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//Imprimir catalogoConDescuento en la consola.
const catalogoConDescuento = catalogo.map(producto => {
    return {
      ...producto,
      precio: producto.precio * 15
      }
  });
  console.log("Catálogo con descuento:", catalogoConDescuento);

//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
//Imprimir en la consola el objeto del usuario encontrado.

interface Usuarios {
    id: number;
    nombre: string;
    activo: boolean;
  }
  
  const usuarios: Usuarios[] = [
    { id: 1, nombre: "Sabri", activo: true },
    { id: 2, nombre: "Jessi", activo: true },
    { id: 3, nombre: "Naty", activo: false },
    { id: 4, nombre: "Laura", activo: true },
    { id: 5, nombre: "Mauri", activo: true },
    { id: 6, nombre: "Jorgelina", activo: true },
  ];
  
  const encontrarUsuario = usuarios.find((usuario) => usuario.id === 3);
  console.log(encontrarUsuario);
  


//Ejercicio 12: Contador de Usuarios Activos - filter y length
//Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
//Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 

const usuariosActivos = usuarios.filter((usuario) => usuario.activo === true);
console.log(usuariosActivos.length);

//Ejercicio 13: Actualización de Estado de Usuarios
//Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
//Imprimir el array usuarios para verificar que todos los usuarios están inactivos.


usuarios.forEach((usuario) => {
    usuario.activo = false;});

console.log(usuarios);

//Ejercicio 14: Formateo de Productos para Mostrar - map
//Usar el array catalogo.
//Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
//Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
//Imprimir el array productosFormato en la consola.


const productosFormato = catalogo.map(producto => `Producto: ${producto.nombre}, Precio: $${producto.precio}`);
console.log(productosFormato);


//Ejercicio 15:
//Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:


interface User {
    name: string;
    age: number;
    occupation: string;
  }
  
  const users: User[] = [
    {
      name: "Federico",
      age: 40,
      occupation: "Taxista",
    },
    {
      name: "Harry",
      age: 21,
      occupation: "Abogado",
    },
  ];
  
  function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
  }
  
  console.log("Users:");
  users.forEach(logPerson);
//Ejercicio 16:
//Vamos a volver a usar la interfaz User del ejercicio anterior.
//Crear una nueva interfaz Admin segun los datos que tenemos.
//Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
//Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

//type Person = User;
//const persons: User[] = [
    //{

    interface Admin {
        name: string;
        age: number;
        role: string;
      }
      
      type Person = User | Admin;
      
      const persons: Person[] = [
        {
          name: "Federico",
          age: 40,
          occupation: "Taxista",
        },
        {
          name: "Harry",
          age: 21,
          role: "Abogado",
        },
        {
          name: "Dana",
          age: 35,
          occupation: "Administrativa",
        },
        {
          name: "Ana Maria",
          age: 64,
          role: "Enfermera ",
        },
      ];
      
      function logPerson2(person: Person) {
        console.log(` - ${person.name}, ${person.age}`);
        if ("occupation" in person) {
          console.log(` Occupation: ${person.occupation}`);
        } else if ("role" in person) {
          console.log(`Role: ${person.role}`);
        }
      }
      
      console.log("Persons:");
      persons.forEach(logPerson2);
      