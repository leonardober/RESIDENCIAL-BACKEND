import express from 'express';
import {
  crearParqueadero,
  obtenerParqueaderos,
  actualizarParqueadero,
  eliminarParqueadero
} from '../controllers/parqueaderosController.js';

const router = express.Router();

router.post('/', crearParqueadero);
router.get('/', obtenerParqueaderos);
router.put('/:id', actualizarParqueadero);
router.delete('/:id', eliminarParqueadero);

export default router;
