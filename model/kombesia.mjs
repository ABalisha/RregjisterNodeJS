 import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblKombesia extends Model {}

tblKombesia.init({
    IdKombesia:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }, 
    Kombesia: {
        type:DataTypes.STRING
    } 
},{sequelize,modelName:'kombesia'})