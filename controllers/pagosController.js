import Pago from '../models/Pago.js';

export const crearPago = async (req, res) => {
  try {
    const nuevoPago = new Pago(req.body);
    await nuevoPago.save();
    res.status(201).json(nuevoPago);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al registrar el pago', error });
  }
};

export const obtenerPagos = async (req, res) => {
  try {
    const pagos = await Pago.find();
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener pagos', error });
  }
};

export const obtenerPagoPorId = async (req, res) => {
  try {
    const pago = await Pago.findById(req.params.id);
    if (!pago) {
      return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    res.json(pago);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el pago" });
  }
};


export const actualizarPago = async (req, res) => {
  try {
    const pagoActualizado = await Pago.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(pagoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar pago', error });
  }
};

export const eliminarPago = async (req, res) => {
  try {
    await Pago.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Pago eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar pago', error });
  }
};
