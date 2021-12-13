import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblGjCivile extends Model {}

tblGjCivile.init({
    IdGjCivile:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }, 
    GjCivile:{
        type:DataTypes.STRING
    }, 
},{sequelize,modelName:'tblGjCivile'})