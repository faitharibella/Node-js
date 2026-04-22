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
// Simple request time logger
// app.use((req,res,next) => {
//   console.log("A new request recieved at " + Date.now())

// // This function call tells that more processing is
// // //  required for the current request n the next middleware
// // function/route handler.
// next();
// })

app.use(express.urlencoded({extended:false}))
app.use(expressSession({
  secret:"secret",
  resave: false,
  saveUninitialized: false,
}))

app.use(express.static(path.join(__dirname,'public')))

// Simple request time logger for a specific route
app.use('/hobbies',(req,res,next)=>{
  console.log("A new request recieved at " + Date.now());
  next();
})

// 5. Routes
// Routing
// Structure of a Route
// app.method('path', handler)
// app.get('/', (req, res) => {
//   res.send('Homepage! Hello world.');
// });

app.get("/about", (req, res) => {
  res.send("This is some information about me. Am a 21 year old engineer");
});

app.get("/hobbies", (req, res) => {
  res.send(
    "These are my hobbies and the first one is supporting BTS plus JavaScript",
  );
});

app.get("/contact", (req, res) => {
  res.send("Contact me via email at someemail@gmail.com");
});

app.post("/about", (req, res) => {
  res.send("Welcome to the about page");
});

app.post("/contact", (req, res) => {
  res.send("Thank you for contacting me");
});

app.post("/coding", (req, res) => {
  res.send("Welcome to the coding side of the universe");
});

app.post("/tech", (req, res) => {
  res.send("Hope you are ready to code");
});

app.post("/quotes", (req, res) => {
  res.send("The best way to predict the future is to create it");
});

app.put("/coding", (req, res) => {
  res.send("Welcome to the coding side of the universe");
});

app.delete("/holiday", (req, res) => {
  res.send("Get off ur ass and get back to work");
});

// Path parameters
app.get('/students/:firstname', (req, res) => {
  res.send('My first name is '+ req.params.firstname);
} )

// querry strings/parameters
app.get('/dog/:origin', (req,res) => {
  res.send('I am looking for a dog from '+ req.params.origin + ' which is a ' +req.query.breed + ' and is ' +req.query.color + ' in color ')
})

app.get('/dog', (req,res) => {
  res.send('I am looking for a dog from '+ req.query.origin + ' which is a ' +req.query.breed + ' and is ' +req.query.color + ' in color ')
})
// Serving HTML files

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + '/index.html')
//})

app.get('/register', (req,res) => {
  res.sendFile(__dirname + '/registration.html')
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/html/index1.html')
})
app.get('/login',(req,res) =>{
  res.sendFile(__dirname + '/html/login.html')
})
app.get('/stock',(req,res)=>{
  res.sendFile(__dirname + '/html/stock-reg.html')
})
app.post('/stock',(req,res)=>{
  console.log(req.body)
})


//This is the second last chunk of code in this file, its used to handle 404 errors
app.use((req, res) => res.status(404).send("Opps!Route Not found"));

// 6.Bootstrapping Server
// this should be the last line of code in every file
app.listen(port, () => console.log(`listening on port ${port}`));
