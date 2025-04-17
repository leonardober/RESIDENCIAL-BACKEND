import express from 'express';
import {
  crearMensaje,
  obtenerMensajes,
  eliminarMensaje
} from '../controllers/mensajesController.js';

const router = express.Router();

router.post('/', crearMensaje);
router.get('/', obtenerMensajes);
router.delete('/:id', eliminarMensaje);

export default router;
