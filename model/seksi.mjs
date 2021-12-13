
import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblSeksi extends Model {}

tblSeksi.init({
    IdSeksi:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    }, 
    Seksi: {
        type:DataTypes.STRING
    } 
},{sequelize,modelName:'tblSeksi'})