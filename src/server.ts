import express from 'express';
import { CategoryRoute } from './routes/CategoryRoutes';

const app = express();

app.use(express.json())
app.use('/categories',CategoryRoute)

app.listen(3333, () => {
    console.log('Server listening on port 3333');
});