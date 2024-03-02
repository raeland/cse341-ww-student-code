/* ***********************
 * Require Statements
 *************************/
const express = require('express');
const app = express();
 

const port = process.env.PORT || 3000;

app.use("/", require("./routes"))

app.get('/', (req, res) => {
  res.send("Hello World");
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});