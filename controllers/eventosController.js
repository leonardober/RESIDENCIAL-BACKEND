import Evento from '../models/Evento.js';

// Crear un nuevo evento
export const crearEvento = async (req, res) => {
  try {
    const { nombre, descripcion, fecha, hora, lugar, participantes } = req.body;

    // Crear el evento con la información proporcionada
    const nuevoEvento = new Evento({
      nombre,
      descripcion,
      fecha,
      hora,
      lugar,
      participantes
    });

    // Guardar el evento en la base de datos
    await nuevoEvento.save();

    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el evento', error });
  }
};

// Obtener todos los eventos
export const obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener eventos', error });
  }
};

// Obtener un evento por su ID
export const obtenerEventoPorId = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ mensaje: "Evento no encontrado" });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el evento', error });
  }
};

// Actualizar un evento
export const actualizarEvento = async (req, res) => {
  try {
    const eventoActualizado = await Evento.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(eventoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar evento', error });
  }
};

// Eliminar un evento
export const eliminarEvento = async (req, res) => {
  try {
    await Evento.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Evento eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar evento', error });
  }
};
