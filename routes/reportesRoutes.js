import express from 'express';
import {
  crearReporte,
  obtenerReportes,
  actualizarReporte,
  eliminarReporte
} from '../controllers/reportesController.js';

const router = express.Router();

router.post('/', crearReporte);
router.get('/', obtenerReportes);
router.put('/:id', actualizarReporte);
router.delete('/:id', eliminarReporte);

export default router;
