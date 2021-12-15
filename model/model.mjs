import { sequelize } from "../sequelize.mjs";
import pkg from 'sequelize'
import { tblQyteti } from "./qyteti.mjs";
import { tblSeksi } from "./seksi.mjs";
import { tblKombesia } from "./kombesia.mjs";
import { tblBashkeshorti } from "./bashkshorti.mjs";
import { tblGjCivile } from "./gjendjaCivile.mjs";
import { tblLidhja } from "./lidhja.mjs";
const {DataTypes,Model} = pkg
export class tblLista extends Model {}

tblLista.init({
    ID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    EmriRegj:{
        type:DataTypes.STRING,
        allowNull:false
    },
 NrRegj:{
     type:DataTypes.STRING,
 },
NrFletes:{
    type:DataTypes.INTEGER
}, 
Adresa:{
    type:DataTypes.STRING
},
 NrBaneses:{
     type:DataTypes.INTEGER
 },
Emer:{
    type:DataTypes.STRING
}, 
Mbiemer:{
    type:DataTypes.STRING
},
Atesi:{
    type:DataTypes.STRING
},
Amesi:{
    type:DataTypes.STRING
},
IdSeksi:{
    type:DataTypes.INTEGER
},
IdLidhja:{
    type:DataTypes.INTEGER
}, 
Dtlindja:{
    type:DataTypes.STRING
}, 
Vlindja:{
    type:DataTypes.STRING
}, 
IdQyteti:{
    type:DataTypes.INTEGER
}, 
IdGjCivile:{
    type:DataTypes.INTEGER
},
IdKombesia:{
    type:DataTypes.INTEGER
},
KryefId:{
    type:DataTypes.STRING
}
},{sequelize,modelName:'tblLista'})

tblLista.hasOne(tblQyteti,{ foreignKey: 'IdQyteti' })
tblLista.hasOne(tblSeksi,{ foreignKey: 'IdSeksi' })
tblLista.hasOne(tblKombesia,{foreignKey:'IdKombesia'})
tblLista.hasOne(tblBashkeshorti,{foreignKey:' '}) // 
tblLista.hasOne(tblGjCivile,{foreignKey:'IdGjCivile'}) // 
tblLista.hasOne(tblLidhja,{foreignKey:'IdLidhja'}) // 

sequelize.sync({alter:true})