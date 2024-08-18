import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from '../config/config.js';
import { dbConnection } from '../db/connection.js';
import productRoutes from '../routes/productos.routes.js';
import userRoutes from '../routes/users.routes.js';
import buyRoutes from '../routes/buy.routes.js';
import saleRoutes from '../routes/sale.routes.js';
import cartRoutes from '../routes/cart.routes.js';

class Server {
  constructor() {
    this.app = express();
    this.port = PORT;
    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  async dbConnect() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api/test', (req, res) => {
      res.send('API is running');
    } );
    this.app.use('/api/products', productRoutes);
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/buy', buyRoutes);
    this.app.use('/api/sales', saleRoutes);
    this.app.use('/api/cart', cartRoutes);
    this.app.use('*', (req, res) => {
      res.status(404).json({
        message: 'Route not found'
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}

export default Server;