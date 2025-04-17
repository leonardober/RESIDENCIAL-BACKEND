import mongoose from 'mongoose';

const reporteSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'resuelto'],
    default: 'pendiente',
  },
  responsable: String,
});

const Reporte = mongoose.model('Reporte', reporteSchema);

export default Reporte;
