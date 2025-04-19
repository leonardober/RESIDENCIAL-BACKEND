import express from 'express';
import {
  crearSancion,
  obtenerSanciones,
  actualizarSancion,
  eliminarSancion
} from '../controllers/sancionesController.js';

const router = express.Router();

router.post('/', crearSancion);
router.get('/', obtenerSanciones);
router.put('/:id', actualizarSancion);
router.delete('/:id', eliminarSancion);

export default router;
