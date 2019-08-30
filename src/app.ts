import express from 'express';
import bodyParser from 'body-parser';
import taskRouter from './routes/task';

export default class App {
  app: express.Application;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  routes() {
    this.app.use('/api/tasks', taskRouter);
  }
  start() {
    this.app.listen(4000, () => console.log('Server started on port 4000'));
  }
}
