// models/Pago.js
import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  apartamento: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  estado: {
    type: String,
    enum: ['adelantado', 'retrasado'],
    required: true
  }
});

export default mongoose.model('Pago', pagoSchema);

