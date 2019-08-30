import { Router, Request, Response } from 'express';
import Task from '../models/Task';
const router = Router();

router.get('/all', async (req: Request, res: Response) => {
  await Task.find({})
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err));
});
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findById(id)
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err));
});
router.post('/add', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTask = new Task({
    title,
    description
  });
  await newTask
    .save()
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err));
});
router.put('/edit/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = {
    title,
    description
  };
  await Task.findByIdAndUpdate(id, task)
    .then(result => res.status(200).send('OK'))
    .catch(err => console.log(err));
});
router.delete('/remove/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id)
    .then(() => res.status(200).send('OK'))
    .catch(err => console.log(err));
});

export default router;
