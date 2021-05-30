const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 4000;
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());


//Connecting database
const db = mysql.createConnection({
    host: "localhost",
    user: "Eric",
    password: process.env.DB_PASSWORD,
    database: "pilsnerprotokollet"
  })

//Setting up Post
app.post("/beer", (req, res) =>{
    const beer = req.body.beer;
    const price = req.body.price;
    const taste = req.body.taste;
    const bottle = req.body.bottle;
    const hipster = req.body.hipster;
    const drink = req.body.drink;
    const favourite = req.body.favourite;

    const sqlInsertTask = 'INSERT INTO rating (beer, price, taste, bottle, hipster, drink, total) VALUES (?,?,?,?,?,?,?)';

    db.query(
        sqlInsertTask,
        [beer, price, taste, bottle, hipster, drink, favourite],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
  })

  //Setting up get req
  app.get('/rating', (req, res)=>{
      
  const sqlGet = `SELECT beer, 
  AVG(price) AS price, 
  AVG(taste) AS taste, 
  AVG(bottle) AS bottle,
  AVG(hipster) AS hipster,
  AVG(drink) AS drink,
  AVG(total) AS total FROM rating GROUP BY beer`;

    db.query(sqlGet, (err, result)=>{
      if(err){
        console.log(err)
      }else{
        res.send(result);
      }
    })
  })


//Setting up a backend server
server.listen(PORT, ()=>{
    console.log('Beerdrinkers! We have a server running on port: ' + PORT);
})

//Setting up the database