const express = require('express');
const app = express();
const dbconnect = require('./config/db');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const laptopRoute=require('./routes/laptop')

// Connect to the database
dbconnect();
app.set('view engine', 'ejs')


//Frontend APIS
app.get('/api', (req, res) => {
  res.send('Welcome to the Laptop Store API');  
});

app.get('/laptopDetails', (req, res) => {
  res.json([
     {
    name: "HP EliteBook 840",
    price: "$450",
    specs: "Processor / 4.4G SB",
  },
  {
    name: "Dell Latitude 5400",
    price: "$400",
    specs: "Processor / 4GB",
  },
  {
    name: "Lenovo ThinkPad",
    price: "$420",
    specs: "Processor / 4.SSD",
  },
  {
    name: "Apple MacBook Air",
    price: "$600",
    specs: "Processor / 15SD",
  },
  ]);
}
);

// app.use('/api/laptop', laptopRoute);


//Backend Admin Panel
app.get('/',(req,res)=>{
  res.render("index")
})
app.listen(5000, () => {
  console.log('Server is running on port 5000');
}
);

