
import db from "./db.js"

 const getUsers= async (req,res) =>{
    try{
         const query= "SELECT * from users"

   const users= await db.query(query)
   if(users.length===0){
    return res.status(404).json({error: "No users found"})
   }

   res.json({users:users})

    }
    catch(error){
        res.status(500).json({error: `Internal Server Error: ${error.message}`})
    }

  

   
 }

 export default getUsers