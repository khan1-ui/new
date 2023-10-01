exports.create = (req,res)=>{
    res.status(200).json({
        status:"Success", data:"It is creating data from SubAdminController"
    })
}
exports.read = (req,res)=>{
    res.status(200).json({
        status:"Success", data:"It is reading data from SubAdminController"
    })
}
exports.update = (req,res)=>{
    res.status(200).json({
        status:"Success", data:"It is updating data from SubAdminController"
    })
}
exports.delete = (req,res)=>{
    res.status(200).json({
        status:"Success", data:"It is deleting data from SubAdminController"
    })
}