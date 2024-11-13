// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 



// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()



// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.



// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())



// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.



// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.



// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 


// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

/*


Ejercicio 8: Catálogo de Productos - forEach
Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 


Ejercicio 9: Catálogo de Productos - filter
Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
Imprimor productosBaratos en la consola.


Ejercicio 10: Actualización de Inventario - map
Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
Imprimir catalogoConDescuento en la consola.


Ejercicio 11: Búsqueda de Usuario - find
Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
Imprimir en la consola el objeto del usuario encontrado.


Ejercicio 12: Contador de Usuarios Activos - filter y length
Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 


Ejercicio 13: Actualización de Estado de Usuarios
Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
Imprimir el array usuarios para verificar que todos los usuarios están inactivos.


Ejercicio 14: Formateo de Productos para Mostrar - map
Usar el array catalogo.
Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
Imprimir el array productosFormato en la consola.



*/