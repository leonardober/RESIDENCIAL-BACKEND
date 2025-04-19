import mongoose from 'mongoose';

const parqueaderoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true
  },
  placa: {
    type: String,
    required: true,
    unique: true
  },
  fechaHora: {
    type: Date,
    required: true
  },
  estado: {
    type: String,
    enum: ['ocupado', 'desocupado'],
    required: true
  }
});

export default mongoose.model('Parqueadero', parqueaderoSchema);
