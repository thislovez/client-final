const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.listen(7777);
app.use(cors()); //จะเรียกใช้ผ่านโดเมนอื่นได้
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sport = [],
Id = 1 ;

app.get('/api/sport' , (req,res) => {
res.send(sport);
console.log('Get Sport');
});

app.post('/api/sport', (req,res) =>{

  var name = req.body.name;
  sport.push({
    id:Id++,
    name: name
  });
  res.send(sport);
  console.log('New Sport',name);
});

app.put('/api/sport/:sports_id',  (req,res)=>{
var id = req.params.sports_id,
name = req.body.name;

sport.map(sports => {
if(sports.id == id){
  sports.name = name;
}
});
res.send(sport);
console.log('Update Sport' ,name);
});

app.delete('/api/sport/:sports_id' , (req,res) => {
var id = req.params.sports_id,
tmp = [];

sport.map(sports =>{
if (sports.id != id){
tmp.push(sports);
}
} );
sport = tmp;
res.send(sport);
console.log('Delete Sport' ,id );
});
