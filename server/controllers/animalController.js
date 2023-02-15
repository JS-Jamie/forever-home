import asyncHandler from 'express-async-handler';
import Animal from '../models/animalModel.js';

//@desc   Fetch all animals
//@route   GET / api/animals

const getAnimals = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  res.json({ animals, page, pages: Math.ceil(count / pageSize) });
});

//@desc   Fetch single animal
//@route   GET / api/animals/:id
const getAniamlById = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id);

  if (animal) {
    res.json(animal);
  } else {
    res.status(404);
    throw new Error('Animal not found');
  }
});
