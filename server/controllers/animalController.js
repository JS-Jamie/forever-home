import asyncHandler from 'express-async-handler';
import Animal from '../models/animalModel.js';

//@desc   Fetch all animals
//@route   GET / api/animals

const getAnimals = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Animal.countDocuments();
});
