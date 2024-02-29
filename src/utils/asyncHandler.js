const asyncHandler = (requestHandler) =>{
    (req,res,next)=>Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}

export {asyncHandler}



/*const asyncHAndler = (fn)=>async(req , res,next)=>{
    try {
        
    } catch (error) {
        res.status(err.code||500).json({
            sucess: false,
            message:err.message
        })
    }
}*/

