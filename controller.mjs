import {tblLista} from './model/model.mjs'
export const mainController = async (req,res)=> {
    try{
        const res1 = await tblLista.findAll({
            where:{
                Emer:req.body.Emri,
                Mbiemer:req.body.Mbiemri
            }
        })
        console.log(tblLista.associations)
        res.status(201).json({res1})
    }
    catch(e){
        console.log('Error while Searching',e)
    }
}