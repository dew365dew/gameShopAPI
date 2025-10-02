import express from 'express';
import userRoutes from './users.js';
import categoryRoutes from './categories.js';
import gameRoutes from './games.js';
import purchaseRoutes from './purchases.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/games', gameRoutes);
app.use('/purchases', purchaseRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
