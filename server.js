const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

app.get('/itemslist/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`./public/database/database${page}.json`, 'utf8', (err, data) => {
        if (err !== null) {
            res.statusCode = 404;
            res.send('{ "data": []}');
        } else {
            res.send(data);
        }
    })
});

app.post('/message', (req, res) => {

    const filePath = './public/database/messages.json';

    fs.readFile(filePath, 'utf8', (err, data) => {
        const messages = JSON.parse(data || '[""]');
        let message = req.body;
        messages[0] = message;
        fs.writeFile(filePath, JSON.stringify(messages), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(messages);
        })
    })
});