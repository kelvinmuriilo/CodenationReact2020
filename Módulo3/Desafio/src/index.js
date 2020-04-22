'use strict'
const fibonacci = () => {

    let lista =[];
    for(let i = 0;  ;i++){
        if(i < 2){
            lista.push(i);
        }else{
            break;
        }
    }

    let elemento = 0;
    for(let i = 2; ; i++){
        elemento = lista[(i-1)] + lista[(i-2)];
        if(elemento < 350){
            lista.push(elemento);
        }else{
            break;
        } 
    }

    return lista;
}

const isFibonnaci = (num) => {
    let lista = fibonacci();
    return lista.some(element => element == num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
