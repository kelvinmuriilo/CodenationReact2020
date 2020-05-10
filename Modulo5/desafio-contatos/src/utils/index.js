function orderByName(contacts){
    return contacts.sort((a,b) => {
        return (a.name > b.name) ? 1 : ((b.name  > a.name)? -1 : 0);
    });
}
function orderByPais(contacts){
    return contacts.sort((a,b) =>{
        return (a.country > b.country)? 1 : ((b.country > a.country)? -1: 0);
    });
}

function orderByEmpresa(contacts){
    return contacts.sort((a,b) =>{
        return (a.company > b.company)? 1 : ((b.company > a.company)? -1: 0);
    });
}

function orderByDepartamento(contacts){
    return contacts.sort((a,b) =>{
        return (a.department > b.department)? 1 : ((b.department > a.department)? -1: 0);
    });
}

function orderByDataAdmissao(contacts){
    return contacts.sort((a,b) =>{
        return (a.admissionDate > b.admissionDate)? 1 : ((b.admissionDate > a.admissionDate)? -1: 0);
    });
}

function filtrarPorValor(contacts, value){
    if(value !== ''){
        return contacts.filter((element) =>{
            return element.name.includes(value)
            
        });
    }
    return [];
    
}
export {
    orderByPais,
    orderByName,
    orderByEmpresa,
    orderByDepartamento,
    orderByDataAdmissao,
    filtrarPorValor
}