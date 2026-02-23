const { registrar, leer } = require('./Operaciones'); // Importar operaciones 

// Capturar argumentos de la línea de comandos 
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

// Evaluar qué función ejecutar 
if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no reconocida. Usa 'registrar' o 'leer'.");
}