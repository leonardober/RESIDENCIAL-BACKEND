import Reporte from '../models/Reporte.js';

export const crearReporte = async (req, res) => {
  try {
    const nuevoReporte = new Reporte(req.body);
    await nuevoReporte.save();
    res.status(201).json(nuevoReporte);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el reporte', error });
  }
};

export const obtenerReportes = async (req, res) => {
  try {
    const reportes = await Reporte.find();
    res.json(reportes);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reportes', error });
  }
};

export const actualizarReporte = async (req, res) => {
  try {
    const reporteActualizado = await Reporte.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(reporteActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el reporte', error });
  }
};

export const eliminarReporte = async (req, res) => {
  try {
    await Reporte.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Reporte eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el reporte', error });
  }
};
