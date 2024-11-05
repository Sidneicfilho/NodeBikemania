import {Request, Response} from 'express'

import { createMenuObject } from '../helpers/createMenuObjects'

//importando a model
import {Bike} from '../models/Bike'



export const home = (req:Request, res:Response)=>{
    let list = Bike.getAll()
    res.render('pages/pages',{
        menu:createMenuObject('todos'),

        banner :{
            title:'Todos os itens',
            background:'banner.home.webp'
        },
        list
    })
}
export const bicicleta = (req:Request, res:Response)=>{
    let list = Bike.getFromType('Bicicleta')
    res.render('pages/pages',{

        menu:createMenuObject('bicicleta'),

        banner :{
            title:'Todas as bicicletas',
            background:'banner.bike.jpeg'
        },
        list
    })
    
}
export const acessorios = (req:Request, res:Response)=>{
    let list = Bike.getFromType('Acessorios')
    res.render('pages/pages',{
        menu:createMenuObject('acessorios'),

        banner :{
            title:'Todos os acessórios',
            background:'banner.acessorios.jpg'
        },
        list
    })
}
export const componentes = (req:Request, res:Response)=>{
    let list = Bike.getFromType('Componente')
    res.render('pages/pages',{

        menu:createMenuObject('componentes'),

        banner :{
            title:'Todos os componentes',
            background:'banner.componentes.jpg'

            
        },
        list
    })
}
