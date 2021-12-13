import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblQyteti extends Model {}

tblQyteti.init({
    IdQyteti:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }, 
    Qyteti:{
        type:DataTypes.STRING
    }, 
    Popullsia: {
        type:DataTypes.INTEGER
}
},{sequelize,modelName:'tblQyteti'})