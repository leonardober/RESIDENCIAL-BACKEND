import express from 'express';
import {
  crearParqueadero,
  obtenerParqueaderos,
  obtenerParqueaderoPorId,
  actualizarParqueadero,
  eliminarParqueadero
} from '../controllers/parqueaderosController.js';

const router = express.Router();

router.post('/', crearParqueadero);
router.get('/', obtenerParqueaderos);
router.get('/:id', obtenerParqueaderoPorId);
router.put('/:id', actualizarParqueadero);
router.delete('/:id', eliminarParqueadero);

export default router;
