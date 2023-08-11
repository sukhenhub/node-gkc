const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
let bodyParser = require('body-parser');
dotenv.config();

// Server Port
var port = process.env.PORT || '3100'




app.use((req, res, next) => {
  if (req.originalUrl === '/webhook') {
    next(); // Do nothing with the body because I need it in a raw state.
  } else {
    bodyParser.json()(req, res, next);  // ONLY do express.json() if the received request is NOT a WebHook from Stripe.
  }
});

// /////////////////////  App Request Handaling /////////////////////
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(cors());
////////////////////////// END ///////////////////////////////////


////////////////// Load Multiple Module Routes /////////////////////



////////////////// Routes Load End ////////////////////////////////

const server = app.listen(port, () => {
    console.log(`Microservice serever start http://localhost:${port}`)
  });




app.use('/',(req,res)=>{
    res.send("App Started")
})