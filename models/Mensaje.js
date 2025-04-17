import mongoose from 'mongoose';

const mensajeSchema = new mongoose.Schema({
  remitente: {
    type: String,
    required: true,
  },
  receptor: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);

export default Mensaje;
