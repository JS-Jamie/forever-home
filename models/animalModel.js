import mongoose from 'mongoose';

const animalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    reuqired: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;
