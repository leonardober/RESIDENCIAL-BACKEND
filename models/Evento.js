import mongoose from 'mongoose';

const eventoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  lugar: {
    type: String,
    required: true,
  },
  participantes: [String],
});

const Evento = mongoose.model('Evento', eventoSchema);

export default Evento;
