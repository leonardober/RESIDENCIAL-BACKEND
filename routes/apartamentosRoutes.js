import express from 'express';
import {
  crearApartamento,
  obtenerApartamentos,
  obtenerApartamentoPorId,
  actualizarApartamento,
  eliminarApartamento,
} from '../controllers/apartamentosController.js';

const router = express.Router();

router.post('/', crearApartamento);
router.get('/', obtenerApartamentos);
router.get('/:id', obtenerApartamentoPorId);
router.put('/:id', actualizarApartamento);
router.delete('/:id', eliminarApartamento);

export default router;
