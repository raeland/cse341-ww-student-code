/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./data/database')
const app = express();
 

const port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Conrol-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Z-Key'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  next()
})

app.use('/', require('./routes'))

/* ***********************
 * Express Error Handler
 * Place after ALL other middleware
 *************************/
app.use(async (err, req, res, next) => {
  message =`Oh NO! There was a crash. Maybe try a different route? ${req.status} - ${err.message}`
  //let nav = await utilities.getNav()
  //console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  res.send (message)
  console.error(message)
  /*res.render("errors/error", {
    title: err.status || 'Server Error',
    message,
    nav
  }) */
})

mongodb.initDb((err) => {
  if(err) {
    console.log(err)
  } else {
    app.listen(port, () => {console.log(`Database is listening and node is Running on port ${port}`)})
}
})

/*app.get('/', (req, res) => {
  res.send("Hello World");
});

 
app.listen(process.env.PORT || 8080, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});
*/