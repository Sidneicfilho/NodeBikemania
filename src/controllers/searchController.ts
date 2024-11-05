import {Request, Response} from 'express'

import { Bike } from '../models/Bike'
import { createMenuObject } from '../helpers/createMenuObjects'




export const search = (req:Request, res:Response)=>{
    let query: string = req.query.q as string
    let list = Bike.getFromName(query)
    res.render('pages/pages',{
        menu:createMenuObject(''),
        list
    })
    
}