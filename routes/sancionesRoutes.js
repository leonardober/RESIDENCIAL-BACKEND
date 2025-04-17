import express from 'express';
import {
  crearSancion,
  obtenerSanciones,
  eliminarSancion
} from '../controllers/sancionesController.js';

const router = express.Router();

router.post('/', crearSancion);
router.get('/', obtenerSanciones);
router.delete('/:id', eliminarSancion);

export default router;
