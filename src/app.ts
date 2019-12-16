import express from 'express';
import Router from './router';
import { ErrorHandler } from './shared/middlewares/ErrorHandler';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(Router());

require('./messages');

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
