import {tblLista} from './model/model.mjs'
export const mainController = async (req,res)=> {
    try{
        const res = await tblLista.findOne({
            where:{
                Emer:req.body.Emri,
                Mbiemer:req.body.Mbiemri
            }
        })
        res.status(201).json({res})
    }
    catch(e){
        console.log('Error while Searching',e)
    }
}