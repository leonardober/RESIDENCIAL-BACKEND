import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Rutas
import apartamentosRoutes from './routes/apartamentosRoutes.js';
import parqueaderosRoutes from './routes/parqueaderosRoutes.js';
import pagosRoutes from './routes/pagosRoutes.js';
import mensajesRoutes from './routes/mensajesRoutes.js';
import reportesRoutes from './routes/reportesRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware CORS con opciones específicas
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // 🟢 Parsear JSON en las solicitudes

// Rutas de la API
app.use('/api/apartamentos', apartamentosRoutes);
app.use('/api/parqueaderos', parqueaderosRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/mensajes', mensajesRoutes);
app.use('/api/reportes', reportesRoutes);

// Conexión a MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch((error) => console.error('❌ Error al conectar con MongoDB Atlas:', error));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});

