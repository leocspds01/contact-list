const listacontactos = [];
console. log (listacontactos);

const contacto1 = {
    id: 1,
    nombres: "Juan Pablo",
    apellidos:"Cespedes",
    telefono: 300235614,
    ubicacion:{ciudad: "Bogota", direccion: "calle 4 # 27-52"}, 
    
   }; 


const contacto2 = {
    id: 2,
    nombres: "Olga",
    apellidos:"Diaz",
    telefono: 300235615,
    ubicacion:("Bogota", "calle 27 # 12-54"),
        
   }; 


const contacto3 = {
    id: 3,
    nombres: "Francisco",
    apellidos:"Diaz",
    telefono: 300235356,
    ubicacion:("Medellin", "calle 9 # 65-23"),
};

const contacto4 = {
    id: 4,
    nombres: "Miguel",
    apellidos:"Rubiano",
    telefono: 300234598,
    ubicacion:("Cali", "calle 16 # 28-98"),
   
};

const contacto5 = {
    id: 5,
    nombres: "Gloria",
    apellidos:"Rodriguez",
    telefono: 300562146,
    ubicacion:("Bogota", "calle 75 # 25-96"),
};

const contacto6 = {
    id: 6,
    nombres: "Ana Maria",
    apellidos:"Rodriguez",
    telefono: 300652364,
    ubicacion:("Manizales", "calle 29 # 32-48"),

};

for(const propiedad in contacto1) {
    console.log(`${propiedad}; ${contacto1[propiedad]}`);
}

console.log(contacto1.ubicacion)

for(const propiedad in contacto2) {
    console.log(`${propiedad}; ${contacto2[propiedad]}`);
}

console.log(contacto2.ubicacion)

for(const propiedad in contacto3) {
    console.log(`${propiedad}; ${contacto3[propiedad]}`);
}

console.log(contacto3.ubicacion)

for(const propiedad in contacto4) {
    console.log(`${propiedad}; ${contacto4[propiedad]}`);
}

console.log(contacto4.ubicacion)

for(const propiedad in contacto5) {
    console.log(`${propiedad}; ${contacto5[propiedad]}`);
}

console.log(contacto5.ubicacion)

for(const propiedad in contacto6) {
    console.log(`${propiedad}; ${contacto6[propiedad]}`);
}

console.log(contacto6.ubicacion)