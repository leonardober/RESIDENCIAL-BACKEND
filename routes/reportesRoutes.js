import express from 'express';
import {
  crearReporte,
  obtenerReportes,
  eliminarReporte
} from '../controllers/reportesController.js';

const router = express.Router();

router.post('/', crearReporte);
router.get('/', obtenerReportes);
router.delete('/:id', eliminarReporte);

export default router;
