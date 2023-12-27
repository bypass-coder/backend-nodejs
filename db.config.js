const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.PASS}@cluster0.krk0gyq.mongodb.net/?retryWrites=true&w=majority`

exports.dbConfig = () =>{
    mongoose.connect(uri).then(()=>{
        console.log('connected to db...')
    }).catch((err)=>{
        console.log(process.env.PASS)
        console.error(`Error connecting to the db \n${err}`)
    })
}

