const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const insuranceRoutes = require('./src/routes/insuranceRoutes');

const app = express();
const port = 3000;

// Set static folder
app.use(express.static('public'));

// Setup Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup Handlebars Middleware to use .hbs files
// Ensure no default layout is enforced
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: false }));
app.set('view engine', 'hbs');
app.set('views', './views');

// Use the insuranceRoutes for API endpoints
app.use('/api', insuranceRoutes);

// Simple route to render the home page without expecting a layout
app.get('/', (req, res) => {
    // Directly render 'home.hbs' without using a layout file
    res.render('home', { layout: false });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
