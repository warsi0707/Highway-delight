const mongoose = require('mongoose')
const { MONGO_URL } = require('./Config')

const ConnectDB =async()=>{
    try{
        await mongoose.connect(MONGO_URL).then(()=>{
            console.log("Database conected")
        }).catch((err)=>{
            console.error("Connection failed with ", err)
        })
    }catch(error){
        console.error("Connection failed")
    }
}
module.exports = ConnectDB