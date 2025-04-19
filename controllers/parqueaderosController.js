import Parqueadero from '../models/Parqueadero.js';

// Crear parqueadero
export const crearParqueadero = async (req, res) => {
  try {
    const nuevo = new Parqueadero(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear parqueadero', error });
  }
};

// Obtener todos
export const obtenerParqueaderos = async (req, res) => {
  try {
    const lista = await Parqueadero.find();
    res.json(lista);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener parqueaderos', error });
  }
};

// Obtener por ID
export const obtenerParqueaderoPorId = async (req, res) => {
  try {
    const p = await Parqueadero.findById(req.params.id);
    if (!p) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(p);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar parqueadero', error });
  }
};

// Actualizar
export const actualizarParqueadero = async (req, res) => {
  try {
    const actualizado = await Parqueadero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar parqueadero', error });
  }
};

// Eliminar
export const eliminarParqueadero = async (req, res) => {
  try {
    await Parqueadero.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Parqueadero eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar parqueadero', error });
  }
};
