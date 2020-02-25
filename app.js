const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path'); 
const nodemailer = require('nodemailer');

const app = express();

// View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.render('contact')
});

app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h4>Contact Details:</h4>
    <ul>
        <li>Name: ${req.body.contactName}</li>
        <li>Company: ${req.body.contactCompany}</li>
        <li>Email: ${req.body.contactEmail}</li>
        <li>Phone: ${req.body.contactPhone}</li>
    </ul>
    <h4>Message:</h4>
    <p>${req.body.contactMessage}</p>
    `;
});

 app.listen(3000, () => console.log('Server started...'));