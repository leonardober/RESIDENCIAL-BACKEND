import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  apartamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartamento',
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  fechaPago: {
    type: Date,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['adelantado', 'retrasado'],
    required: true,
  },
});

const Pago = mongoose.model('Pago', pagoSchema);

export default Pago;
