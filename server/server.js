const express=require('express');
const bodyParser = require('body-parser');
const app = express()

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {extended: true} ) );

app.use( function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/api", (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({"users":["userOne", "userTwo", "userTree"] })
})

app.get("/api/getUserData", (req, res) => {
    
    try {
        let fname = "Bilbo";
        let lname = "Baggins";
        let data = {
                firstName: fname,
                lastName: lname
        };
        console.log("userData sended");
        res.status(200).send(data);
    } catch {
        console.log("Sth gone wrong");
        res.end();
    }
});

app.listen(5000, () => {console.log("Server started on port 5000");})