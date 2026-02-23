const fs = require('fs'); // Importar módulo File System 

const registrar = (nombre, edad, animal, color, enfermedad) => {
    // 1. Leer el archivo existente 
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    
    // 2. Crear el nuevo objeto de la cita 
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    // 3. Agregar la nueva cita al arreglo y guardar
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log("Cita registrada con éxito.");
};

const leer = () => {
    // Leer y mostrar todas las citas registradas 
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(citas);
};

// Exportar las funciones para usarlas en index.js
module.exports = { registrar, leer };