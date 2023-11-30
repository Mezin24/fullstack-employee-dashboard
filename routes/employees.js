const express = require('express');
const router = express.Router();
const {
  getAll,
  getEmployee,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} = require('../controllers/employees');
const { auth } = require('../middlewares/auth');

router.get('/', auth, getAll);
router.get('/:id', auth, getEmployee);
router.post('/', auth, addEmployee);
router.delete('/:id', auth, deleteEmployee);
router.put('/:id', auth, updateEmployee);

module.exports = router;
