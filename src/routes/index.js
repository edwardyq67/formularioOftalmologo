const express = require('express');
const routerPaciente = require('./paciente.routes');
const router = express.Router();


router.use('/paciente',routerPaciente)
module.exports = router;