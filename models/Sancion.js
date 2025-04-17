import mongoose from 'mongoose';

const sancionSchema = new mongoose.Schema({
  apartamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Apartamento',
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
});

const Sancion = mongoose.model('Sancion', sancionSchema);

export default Sancion;
