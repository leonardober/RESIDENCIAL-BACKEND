import mongoose from 'mongoose';

const parqueaderoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    enum: ['carro', 'moto'],
    required: true,
  },
  placa: {
    type: String,
    required: true,
    unique: true,
  },
  visitante: {
    type: String,
    required: true,
  },
  apartamento: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  }
});

const Parqueadero = mongoose.model('Parqueadero', parqueaderoSchema);
export default Parqueadero;
