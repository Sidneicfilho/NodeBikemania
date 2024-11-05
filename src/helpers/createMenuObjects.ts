type menuOptions = '' | 'todos' | 'bicicleta' | 'acessorios' | 'componentes'

export const createMenuObject = (activeMenu:menuOptions)=>{

    let returnObject = {
        todos:false,
        bicicleta:false,
        componentes:false,
        acessorios:false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu]= true
    }
   return returnObject 
}