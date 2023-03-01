import express from 'express';

const router = express.Router();
import {
  getAnimals,
  getAnimalById,
  createAnimal,
} from '../controllers/animalController.js';

router.route('/').get(getAnimals).post(createAnimal);
router.route('/:id').get(getAnimalById);

export default router;
