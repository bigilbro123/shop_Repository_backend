const express = require('express')
const jwt = require('jsonwebtoken');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./route/index.js')
const connectDB = require('./DB/db.js')
const bodyParser = require('body-parser');


require('dotenv').config()


const app = express()
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser())
app.use(express.json())
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
))
app.use('/api', router)



const port = 8000 || process.env.PORT



connectDB().then(() => {

    app.listen(port, () => {
        console.log(`Server is running in port ${port}`);

    })
})

