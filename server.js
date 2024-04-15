import express from 'express'
const app = express()
import morgan from 'morgan'

const PORT = process.env.PORT ||  8000


//middlewares

app.use(morgan())


app.use('/', (req, res)=>{
    res.json({
        message:'TODO...'

    })
})


app.listen(PORT, (error)=>{
    error ? console.log(error)
    :
    console.log(`Server running at http://localhost:${PORT}`)
})