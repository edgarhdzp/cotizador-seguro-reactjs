//* obtener la diferencia entre el año actual
export function ObtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//* calcular el porcentaje dependiedo la marca
export function calcularMarca(marca){
    
    let incremento;
    
    switch(marca){
        case 'europeo':
            incremento = 1.30;
            break;

        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break; 

        default: ;
    }
    return incremento;
}

//*calcular dependiendo el plan
export function obtenerPlan(plan){
    return (plan === 'basico') ? 1.20 : 1.50;
}

export function capitalizar(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}