exports.create = (req,res) =>{
    res.status(200).json({
        status:"success",data:"It is my creating data from adminController..."
    })
}
exports.read = (req,res) =>{
    res.status(200).json({
        status:"success",data:"It is my reading data from adminController..."
    })
}
exports.update = (req,res) =>{
    res.status(200).json({
        status:"success",data:"It is my updating data from adminController..."
    })
}
exports.delete = (req,res) =>{
    res.status(200).json({
        status:"success",data:"It is my deleting data from adminController..."
    })
}