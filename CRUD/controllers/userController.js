exports.home = (req,res) =>{
    res.send('Hello World');
}
exports.createUser=async(req,res) => {
    // extract info
    try{
      const {name,email}=req.body
      await User.create({
        name,
        email
      })
       res.status(201).json({
        success:true,
        message:"User created Successfully",
        user
       })
    }catch(error) {
      console.log(error);
      res.status(400).json({
        success:false,
        message:error.message,
        user
    })
}
}