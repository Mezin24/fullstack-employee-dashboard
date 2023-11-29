const { prisma } = require('../prisma/prisma-client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/*
  @route GET /api/employees/
  @desc Get all employees
  @access Private
*/
const getAll = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Some problems with fetching employees' });
  }
};

/*
  @route GET /api/employees/:id
  @desc Get  employee
  @access Private
*/
const getEmployee = async (req, res) => {
  try {
    // const employees = await prisma.employee.findMany();
    // res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Some problems with fetching employees' });
  }
};

/*
  @route Post /api/employees/
  @desc Post  employee
  @access Private
*/
const addEmployee = async (req, res) => {
  try {
    // const employees = await prisma.employee.findMany();
    // res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Some problems with fetching employees' });
  }
};

/*
  @route Delete /api/employees/:id
  @desc Delete  employee
  @access Private
*/
const deleteEmployee = async (req, res) => {
  try {
    // const employees = await prisma.employee.findMany();
    // res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Some problems with fetching employees' });
  }
};

/*
  @route Put /api/employees/:id
  @desc Put  employee
  @access Private
*/
const updateEmployee = async (req, res) => {
  try {
    // const employees = await prisma.employee.findMany();
    // res.status(200).json(employees);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Some problems with fetching employees' });
  }
};

module.exports = {
  getAll,
  getEmployee,
  addEmployee,
  deleteEmployee,
  updateEmployee,
};
