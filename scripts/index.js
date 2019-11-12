const express = require('express');
const database = require('./database');
const fetch = require('node-fetch');
const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);


// database.create();
app.use(express.json());


app.use(express.static("./"))
app.use(express.static(__dirname))

app.get('/', function(req, res) {
    console.log("hi");
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/track_energy', (req, res)=>{


    console.log("hihh");

})

var server = http.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})


fetch('http://127.0.0.1:3000/').then(x=>console.log(x, "pp"))