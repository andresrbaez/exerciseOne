const express = require('express');

// Controllers
const {
  getAllRegistrations,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registration.controller');

const registrationRouter = express.Router();

// Registration endpoints
registrationRouter.get('/', getAllRegistrations);

registrationRouter.get('/:id', getRegistrationById);

registrationRouter.post('/', createRegistration);

registrationRouter.patch('/:id', updateRegistration);

registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };
