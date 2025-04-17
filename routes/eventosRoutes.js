import express from 'express';
import {
  crearEvento,
  obtenerEventos,
  eliminarEvento
} from '../controllers/eventosController.js';

const router = express.Router();

router.post('/', crearEvento);
router.get('/', obtenerEventos);
router.delete('/:id', eliminarEvento);

export default router;
