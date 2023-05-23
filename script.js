const listacontactos = [];

function añadircontacto (contacto){
    listacontactos.push(contacto);
}

añadircontacto("Juan Pablo Cespdes");
añadircontacto("Olga Diaz")
añadircontacto("Francisco Diaz")
añadircontacto("Miguel Rubiano")
console.log(listacontactos)

function eliminarcontacto (nombre) {
    const indice= listacontactos.indexOf(nombre);
    listacontactos.splice(indice,1);
}

eliminarcontacto("Francisco Diaz")

console.log(listacontactos);