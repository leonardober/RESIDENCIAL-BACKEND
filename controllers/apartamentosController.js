import Apartamento from '../models/Apartamento.js';

// Crear apartamento
const crearApartamento = async (req, res) => {
  try {
    const nuevoApartamento = new Apartamento(req.body);
    await nuevoApartamento.save();
    res.status(201).json(nuevoApartamento);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear apartamento', error });
  }
};

// Obtener todos los apartamentos
const obtenerApartamentos = async (req, res) => {
  try {
    const apartamentos = await Apartamento.find();
    res.json(apartamentos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener apartamentos', error });
  }
};

// Obtener apartamento por ID
const obtenerApartamentoPorId = async (req, res) => {
  try {
    const apartamento = await Apartamento.findById(req.params.id);
    if (!apartamento) {
      return res.status(404).json({ mensaje: 'Apartamento no encontrado' });
    }
    res.json(apartamento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener apartamento', error });
  }
};

// Actualizar apartamento
const actualizarApartamento = async (req, res) => {
  try {
    const { id } = req.params;
    const apartamentoActualizado = await Apartamento.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!apartamentoActualizado) {
      return res.status(404).json({ mensaje: 'Apartamento no encontrado' });
    }
    res.json(apartamentoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el apartamento', error });
  }
};

// Eliminar apartamento
const eliminarApartamento = async (req, res) => {
  try {
    const apartamentoEliminado = await Apartamento.findByIdAndDelete(req.params.id);
    if (!apartamentoEliminado) {
      return res.status(404).json({ mensaje: 'Apartamento no encontrado' });
    }
    res.json({ mensaje: 'Apartamento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar apartamento', error });
  }
};


// ✅ Exportar todo agrupado
export {
  crearApartamento,
  obtenerApartamentos,
  obtenerApartamentoPorId,
  actualizarApartamento,
  eliminarApartamento,
};
