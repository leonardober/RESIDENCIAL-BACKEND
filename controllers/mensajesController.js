import Mensaje from '../models/Mensaje.js';

export const crearMensaje = async (req, res) => {
  try {
    const nuevoMensaje = new Mensaje(req.body);
    await nuevoMensaje.save();
    res.status(201).json(nuevoMensaje);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear mensaje', error });
  }
};

export const obtenerMensajes = async (req, res) => {
  try {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener mensajes', error });
  }
};

export const eliminarMensaje = async (req, res) => {
  try {
    await Mensaje.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Mensaje eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar mensaje', error });
  }
};
