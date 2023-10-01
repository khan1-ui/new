exports.create =(req,res) => {
 res.status(200).json({
    status:"Success", data:"It is creating data from postController"
 })
}
exports.read =(req,res) => {
    res.status(200).json({
       status:"Success", data:"It is reading data from postController"
    })
   }
   exports.update =(req,res) => {
    res.status(200).json({
       status:"Success", data:"It is updating data from postController"
    })
   }
   exports.delete =(req,res) => {
    res.status(200).json({
       status:"Success", data:"It is deleting data from postController"
    })
   }