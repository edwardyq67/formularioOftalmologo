const catchError = require('../utils/catchError');
const Paciente = require('../models/Paciente');
const {Op} =require("sequelize")
const getAll = catchError(async(req, res) => {
    const {name,lastName}=req.query;
    const where={}
   
    if(name) where.name={[Op.iLike]:`%${name}%`}
    if(lastName) where.lastName={[Op.iLike]:`%${lastName}%`}
    const results = await Paciente.findAll({where:where});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Paciente.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Paciente.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Paciente.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Paciente.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}