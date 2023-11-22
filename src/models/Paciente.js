const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Patient = sequelize.define('patient', {
    //datos
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //formulario1
    Diabetic: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Retinopathy: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Glaucoma: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    //formuario2
    Proliferative : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
        Mild_DME: {
        type: DataTypes.BOOLEAN,
        allowNull: false
        },
        Moderate_DME: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },Severe_DME : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
      
    //formulario3
    DME: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    OD: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    OS: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    OU: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Macular_Degeneration:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    diabetic_retinopathy:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    stable:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = Patient;