import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'


const router = Router()

router.get('/',PageController.home)
router.get('/bicicleta',PageController.bicicleta)
router.get('/componentes',PageController.componentes)
router.get('/acessorios',PageController.acessorios)

router.get('/search',searchController.search)



export default router