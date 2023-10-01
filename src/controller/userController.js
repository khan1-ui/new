exports.create = (req,res) =>{
res.status(200).json({
    status:"Success",data:"It is creating data from userController"
})
}
exports.read = (req,res)=>{
    res.status(200).json({
        status:"Success",data:"It is reading data from userController"
    })
}
exports.update =(req,res)=>{
    res.status(200).json({
        status:"Success",data:"It is updating data from userController"
    })
}
exports.delete=(req,res)=>{
    res.status(200).json({
        status:"Success",data:"It is deleting data from userController"
    })
}