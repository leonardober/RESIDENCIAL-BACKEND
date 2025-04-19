import Sancion from '../models/Sancion.js';

export const crearSancion = async (req, res) => {
  try {
    const nuevaSancion = new Sancion(req.body);
    await nuevaSancion.save();
    res.status(201).json(nuevaSancion);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear sanción', error });
  }
};

export const obtenerSanciones = async (req, res) => {
  try {
    const sanciones = await Sancion.find().populate('apartamento');
    res.json(sanciones);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener sanciones', error });
  }
};

export const actualizarSancion = async (req, res) => {
  try {
    const sancionActualizada = await Sancion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sancionActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar sanción', error });
  }
};

export const eliminarSancion = async (req, res) => {
  try {
    await Sancion.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Sanción eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar sanción', error });
  }
};
