const express = require('express');
const app = express();
var bodyParser = require('body-parser');
/**
 * 
 * MySql
 */
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3001;

io.on('connection', socket => {
    console.log('A user connected: ' + socket.id);

    socket.on('chatMessage', message => { console.log(message) });
});

server.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
const pool = require('./db/db');
app.use(bodyParser.json());
app.get('/', (req, res) => {

    pool.query(
        //query
        'SELECT M.name as mission_name,U.name as user_name,L.date as date,L.message as message  FROM chat_app.log L,chat_app.user U, chat_app.mission M where L.mission_id=2 AND U.id=L.user_id AND M.id = L.mission_id order by L.id Asc;',
        //function
        function(err, results, fields) {
            if (err) throw error;

            res.status(200).json({
                success: true,
                data: results
            });
        }
    );
});

app.get('/mission', (req, res) => {

    pool.query(
        'SELECT * FROM mission',

        [id],

        (err, results, fields) => {
            if (err) throw err;

            res.status(200).json({
                success: true,
                data: results
            });
        });
});

app.get('/mission/:id', (req, res) => {
    const id = req.params.id;

    pool.query(
        'SELECT L.message as message,L.date as date,U.name as user_name FROM log L, user U WHERE L.mission_id = ? and U.id=L.user_id',

        [id],

        (err, messages, fields) => {
            if (err) throw err;

            pool.query(
                'SELECT name FROM mission WHERE id = ?',

                [id],

                (err, name, fields) => {
                    if (err) throw err;

                    res.status(200).json({
                        success: true,
                        mission: name[0],
                        messages: messages
                    });


                });
        });
});


app.post('/mission/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    pool.query(
        'INSERT INTO log(message,user_id,mission_id)VALUES(?,?,?)',

        [req.body.msg, req.body.user_id, id],

        (err, results, fields) => {
            if (err) throw err;

            res.status(200).json({
                success: true,
                data: results
            });
        });
});

app.listen(4000, () => {
    console.log('The api is running on: http://localhost:4000');
});