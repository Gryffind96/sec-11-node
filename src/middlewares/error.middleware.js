module.exports = (err,req,res,next)=>{
    const httpstatus = err.status || 500;
    return res.status(httpstatus).send({
        status:httpstatus,
        message: err.message || "Internal server error"
    })
}