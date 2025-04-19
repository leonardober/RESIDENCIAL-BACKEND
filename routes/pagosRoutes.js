import express from 'express';
import {
  crearPago,
  obtenerPagos,
  obtenerPagoPorId,
  actualizarPago,
  eliminarPago
} from '../controllers/pagosController.js';

const router = express.Router();

router.post('/', crearPago);
router.get('/', obtenerPagos);
router.get('/:id', obtenerPagoPorId);
router.put('/:id', actualizarPago);
router.delete('/:id', eliminarPago);

export default router;
