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
    const { id } = req.params;

    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee wasn't found" });
    }
    return res.status(200).json({ employee });
  } catch (error) {
    return res
      .status(500)
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
    const { firstName, lastName, age, address } = req.body;
    const user = req.user;

    if (!firstName || !lastName || !age || !address) {
      return res.status(400).json({
        message: 'Please, fill in all the fields',
      });
    }

    const employee = await prisma.employee.create({
      data: {
        address,
        age,
        firstName,
        lastName,
        userId: user.id,
      },
    });
    res.status(200).json({
      message: 'Employee was successfuly created',
      employee,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Some problems with creating new employee' });
  }
};

/*
  @route Delete /api/employees/:id
  @desc Delete  employee
  @access Private
*/
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee wasn't found" });
    }

    const isOwner = employee.userId === user.id;

    if (!isOwner) {
      return res
        .status(404)
        .json({ message: 'Employee was created by another user' });
    }

    await prisma.employee.delete({
      where: {
        id,
      },
    });

    return res.status(204).json({
      message: `Employee ${employee.firstName} with ${employee.id} was deleted`,
    });
  } catch (error) {
    return res
      .status(500)
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
    const { id } = req.params;
    const user = req.user;
    const employee = await prisma.employee.findUnique({
      where: {
        id,
      },
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee wasn't found" });
    }
    const isOwner = employee.userId === user.id;

    if (!isOwner) {
      return res
        .status(404)
        .json({ message: 'Employee was created by another user' });
    }

    console.log(isOwner);
    await prisma.employee.update({
      where: {
        id,
      },
      data: {
        ...req.body,
      },
    });

    return res.status(201).json({
      message: `Employee ${employee.firstName} with ${employee.id} was updated`,
    });
  } catch (error) {
    return res
      .status(500)
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
