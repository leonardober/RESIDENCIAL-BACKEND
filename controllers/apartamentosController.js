import Apartamento from '../models/Apartamento.js';

export const crearApartamento = async (req, res) => {
  try {
    const nuevoApartamento = new Apartamento(req.body);
    await nuevoApartamento.save();
    res.status(201).json(nuevoApartamento);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear apartamento', error });
  }
};

export const obtenerApartamentos = async (req, res) => {
  try {
    const apartamentos = await Apartamento.find();
    res.json(apartamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener apartamentos', error });
  }
};

export const actualizarApartamento = async (req, res) => {
  try {
    const apartamentoActualizado = await Apartamento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(apartamentoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar apartamento', error });
  }
};

export const eliminarApartamento = async (req, res) => {
  try {
    await Apartamento.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Apartamento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar apartamento', error });
  }
};
