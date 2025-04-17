import mongoose from 'mongoose';

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
  residentes: [{
    nombre: String,
    tipoDocumento: String,
    documento: String,
    telefono: String,
  }],
});

const Apartamento = mongoose.model('Apartamento', apartamentoSchema);

export default Apartamento;
