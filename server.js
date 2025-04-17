import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Importar rutas
import apartamentosRoutes from './routes/apartamentosRoutes.js';
import parqueaderosRoutes from './routes/parqueaderosRoutes.js';
import pagosRoutes from './routes/pagosRoutes.js';
import eventosRoutes from './routes/eventosRoutes.js';
import sancionesRoutes from './routes/sancionesRoutes.js';
import mensajesRoutes from './routes/mensajesRoutes.js';
import reportesRoutes from './routes/reportesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/apartamentos', apartamentosRoutes);
app.use('/api/parqueaderos', parqueaderosRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/sanciones', sancionesRoutes);
app.use('/api/mensajes', mensajesRoutes);
app.use('/api/reportes', reportesRoutes);

// Conexión a MongoDB y arranque del servidor
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  });
