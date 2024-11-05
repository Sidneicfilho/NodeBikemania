/*Precisaremos de 3 funções diferentes
 
    1- PEGAR TODOS OS ITENS
    2- FILTRAR POR TIPO
    3= FILTRAR ITENS PELO NOME*/
    
    type bikemaniaType = 'Bicicleta' | 'Acessorios' | 'Componente'
 
    type Bike = {
        type: bikemaniaType,
        image: string,
        name: string,
        price: number
    }
 

 
    const data: Bike[] = [
        { 
            type: 'Bicicleta', 
            image: 'b1.webp',
            name: 'Trek Domane SL5', 
            price: 11.500
        },
     { 
            type: 'Componente', 
            image: 'gta_hidraulico.webp',
            name: 'GTA hidraulico', 
            price: 100.00
        }, 
    { 
            type: 'Bicicleta', 
            image: 'b5.webp',
            name: 'Look 586', 
            price: 9.000
        }, { 
            type: 'Componente', 
            image: 'mesa_avanco.webp',
            name: 'Mesa de avanço', 
            price: 310.00
        }, { 
            type: 'Componente', 
            image: 'pedivela.webp',
            name: 'Pedivela', 
            price: 500.00
        }, { 
            type: 'Bicicleta', 
            image: 'b8.webp',
            name: 'Cannondale Supersix Evo', 
            price: 13.390
        }, { 
            type: 'Acessorios', 
            image: 'luvassss.jpg',
            name: 'Luva Ciclismo', 
            price: 60.00
        }, { 
            type: 'Componente', 
            image: 'coroa.webp',
            name: 'Coroa', 
            price: 250.00
        }, { 
            type: 'Acessorios', 
            image: 'capacete.webp',
            name: 'Capacete', 
            price: 90.00
        }, { 
            type: 'Bicicleta', 
            image: 'b4.webp',
            name: 'Merida Ride 93 Comp', 
            price: 4.500
        }, { 
            type: 'Componente', 
            image: 'bombaDePneu.webp',
            name: 'Bomba de Pneu', 
            price:  60.00
    
        }, { 
            type: 'Bicicleta', 
            image: 'b6.webp',
            name: 'Trek Supercaliber 9.7', 
            price: 9.600
        }, { 
            type: 'Bicicleta', 
            image: 'b3.webp',
            name: 'Focus Cayo', 
            price: 7.000
        },
    
    
   
    ]
 
    export const Bike = {
        /*VAMOS RETORNAR TODOS OS ITENS PARA EXIBIR NA PÁGINA PRINCIPAL ESSA FUNÇÃO VAI RETORNAR DATA QUE É ONDE TÃO NOSSOS ITENS*/
        getAll: () =>{
            return data
        },
        getFromType: (type: bikemaniaType): Bike[]=>{
            return data.filter(item =>{
                //Se o item type for igual ao type que eu recebi no meu parametro (IATYPE)
                //ENTAO RETORNE TRUE PARA ESSE ITEM
                if(item.type == type){
                    return true
                }else{
                    return false
                }
            })
        },
        getFromName:(name: string): Bike[]=>{
            return data.filter(item=>{
                if(item.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
                    return true
                }else{
                    return false
                }
            })
        }
 
    }