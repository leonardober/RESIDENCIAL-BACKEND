import Parqueadero from '../models/Parqueadero.js';

export const crearParqueadero = async (req, res) => {
  try {
    const nuevoParqueadero = new Parqueadero(req.body);
    await nuevoParqueadero.save();
    res.status(201).json(nuevoParqueadero);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear parqueadero', error });
  }
};

export const obtenerParqueaderos = async (req, res) => {
  try {
    const parqueaderos = await Parqueadero.find();
    res.json(parqueaderos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener parqueaderos', error });
  }
};

export const actualizarParqueadero = async (req, res) => {
  try {
    const parqueaderoActualizado = await Parqueadero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(parqueaderoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar parqueadero', error });
  }
};

export const eliminarParqueadero = async (req, res) => {
  try {
    await Parqueadero.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Parqueadero eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar parqueadero', error });
  }
};
