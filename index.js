const express = require('express');
const bodyParser = require('body-parser');
const _ = require ('dotenv').config();
const port = process.env.PORT;
const JWTTOKEN = process.env.JWTTOKEN;

app.use(bodyParser.json());
const {sequelize} = require('./sequelize/models');
const app = express()
configure(app);
const connectDb = async () => {
    console.log('Connecting to Database');
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error){
        console.log('Database connection Failed', error);
        process.exit(1);
    }
}
app.use('/', require('./routes/organisation'));
app.use('/', require('./routes/user'));

(async () =>{
await connectDb();
console.log(`Attempting to run server on port ${port}`);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    })
})();
console.log(`run server on port ${port}`);