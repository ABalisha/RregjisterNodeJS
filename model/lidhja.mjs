import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
const {DataTypes,Model} = pkg
export class tblLidhja extends Model {}

tblLidhja.init({
    IdLidhja:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }, 
  LidhjaKryef: {
      type:DataTypes.STRING
  }, 
},{sequelize,modelName:'tblLidhja'})