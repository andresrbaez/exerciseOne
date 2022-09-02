// Models
const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registration = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the registration exists before update
    const registration = await Registration.findOne({ where: { id } });

    //  If registration doesn't exist, send error message
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        registration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;

    const newRegistration = await Registration.create({ entranceTime });

    // 201 -> Success and a resource has been created
    res.status(201).json({
      status: 'success',
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { id } = req.params;

    // Check if the registration exists before update
    const registration = await Registration.findOne({ where: { id } });

    //  If registration doesn't exist, send error message
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    // Method 1

    // Method 2
    await registration.update({ exitTime, status: 'out' });

    res.status(200).json({
      status: 'success',
      data: { registration },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the registration exists before delection
    const registration = await Registration.findOne({ where: { id } });

    //  If registration doesn't exist, send error message
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found',
      });
    }

    // If registration exists, remove from db

    //* Method 3: Soft delete
    await registration.update({ status: 'cancelled' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegistrations,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
