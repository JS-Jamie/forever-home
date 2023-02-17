import asyncHandler from 'express-async-handler';
import Animal from '../models/animalModel.js';

//@desc   Fetch all animals
//@route   GET / api/animals

const getAnimals = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Animal.countDocuments({});
  const animals = await Animal.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ animals, page, pages: Math.ceil(count / pageSize) });
});

//@desc   Fetch single animal
//@route   GET / api/animals/:id
const getAnimalById = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  if (animal) {
    res.json(animal);
  } else {
    res.status(404);
    throw new Error('Animal not found');
  }
});

//@desc Create an animal
//@route POST /api/animals
const createAnimal = asyncHandler(async (req, res) => {
  const animal = new Animal({
    name: 'Sample name',
    breed: 'Mix',
    sex: 'Male',
    age: 'Adult',
    image: '/images.sample.jpg',
    description: 'Sample description',
  });

  const createdAnimal = await animal.save();
  res.status(201).json(createdAnimal);
});

export { getAnimals, getAnimalById, createAnimal };
