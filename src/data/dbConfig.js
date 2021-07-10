const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            }
        )
        console.log('database connected!')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = { connect }

/* require('dotenv').config()
const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGODB_URI

const connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectadas bb no MongoDb Atlas")
    })
    .catch((error)=>{
        console.log("Algo deu errado")
        console.error(error)
    })
}

module.exports = { connect } */
