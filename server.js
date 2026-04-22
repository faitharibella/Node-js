// 1.Dependencies
const express = require("express");
const expressSession = require('express-session')
const path = require('path')

// 2. Instantiations
const app = express();
const port = 3000;

// 3. Configurations
//set the templating engine to pug
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'))

// 4. Middleware
 app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(expressSession({
  secret:"secret",
  resave: false,  // we dont want to save this session
  saveUninitialized: false,
}))

// 5. Routes
app.use('/', require('./routes/indexRoutes'))
app.use('/',require('./routes/stockRoutes'))
app.use('/',require('./routes/stockRegRoutes'))


//This is the second last chunk of code in this file, its used to handle 404 errors
app.use((req, res) => res.status(404).send("Opps!Route Not found"));

// 6.Bootstrapping Server
// this should be the last line of code in every file
app.listen(port, () => console.log(`listening on port ${port}`));
