import mongoose from 'mongoose';

const parqueaderoSchema = new mongoose.Schema({
  tipo: String, // 'carro' o 'moto'
  placa: String,
  visitante: String,
  apartamento: String,
  fecha: Date,
});

const Parqueadero = mongoose.model('Parqueadero', parqueaderoSchema);

export default Parqueadero;
