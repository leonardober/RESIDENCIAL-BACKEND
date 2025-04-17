import mongoose from 'mongoose';

const residenteSchema = new mongoose.Schema({
  nombre: String,
  tipoDocumento: String,
  documento: String,
  telefono: String,
});

const apartamentoSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
    unique: true,
  },
  piso: {
    type: String,
    required: true,
  },
  propietario: {
    nombre: String,
    tipoDocumento: String,
    documento: String,
    telefono: String,
  },
  residentes: [residenteSchema],
});

const Apartamento = mongoose.model('Apartamento', apartamentoSchema);

export default Apartamento;
