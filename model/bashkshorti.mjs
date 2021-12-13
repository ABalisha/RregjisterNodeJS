import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblBashkeshorti extends Model {}

tblBashkeshorti.init({
    Id: {
        type:DataTypes.INTEGER 
    }, 
    BshEmri:{
        type:DataTypes.STRING
    }, 
    BshMbiemri:{
        type:DataTypes.STRING
    }, 
    MbiemriPara:{
        type:DataTypes.STRING
    }, 
},{sequelize,modelName:'tblBashkeshorti'})