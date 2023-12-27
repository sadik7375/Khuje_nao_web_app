const express = require('express');
const cors = require('cors'); //cors help to connect and res req proccess two diiferent server
const app = express();
const db = require('./database-connection/dbconnection');

const router = require('./router/routes')
const port = 8000;
app.use(express.json());


app.use(cors({

    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
})); //enbale cors  //cors block then check localhostport

//--------------API Routes---------------
app.use('/api', router);






app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})