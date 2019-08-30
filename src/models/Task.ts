import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    min: 6
  },
  date: {
    type: Date,
    default : Date.now
  }
});

export default model('Task', taskSchema);
