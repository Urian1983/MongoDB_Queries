
db.Restaurants.find();


db.Restaurants.find({}, {restaurant_id:1, name:1, borough:1, cuisine:1});


db.Restaurants.find({}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1});


db.Restaurants.find({}, {_id:0, restaurant_id:1, name:1, borough:1, "address.zipcode":1});


db.Restaurants.find({borough:"Bronx"});


db.Restaurants.find({borough:"Bronx"}).limit(5);


db.Restaurants.find({borough:"Bronx"}).skip(5).limit(5);


db.Restaurants.find({"grades.score":{$gt:90}}, {name:1, "grades.score":1});


db.restaurants.find({"grades.score":{$gt:80, $lt:100}}, {name:1, "grades.score":1});


db.Restaurants.find({"address.coord.1":{$lt:-95.754168}}, {name:1, "address.coord":1});


db.Restaurants.find({
  cuisine:{$ne:"American "}, 
  "grades.score":{$gt:70}, 
  "address.coord.0":{$lt:-65.754168}
}, {name:1, cuisine:1, "grades.score":1, "address.coord":1});


db.Restaurants.find({
  cuisine:{$ne:"American "}, 
  "grades.score":{$gt:70}, 
  "address.coord.0":{$lt:-65.754168}
}, {name:1, cuisine:1, "grades.score":1, "address.coord":1});


db.Restaurants.find({
  cuisine:{$ne:"American "}, 
  "grades.grade":"A", 
  borough:{$ne:"Brooklyn"}
}, {name:1, cuisine:1, borough:1, "grades.grade":1, _id:0}).sort({cuisine:-1});


db.Restaurants.find({name:{$regex:/^Wil/}}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});


db.Restaurants.find({name:{$regex:/ces$/}}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});


db.restaurants.find({name:{$regex:/Reg/}}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});


db.Restaurants.find({
  borough:"Bronx", 
  cuisine:{$in:["American ","Chinese"]}
}, {restaurant_id:1, name:1, borough:1, cuisine:1});


db.Restaurants.find({
  borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}
}, {restaurant_id:1, name:1, borough:1, cuisine:1});


db.Restaurants.find({
  borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}
}, {restaurant_id:1, name:1, borough:1, cuisine:1});


db.restaurants.find({"grades.score":{$lte:10}}, {restaurant_id:1, name:1, borough:1, cuisine:1});


db.Restaurants.find({
  $or:[
    {cuisine:{$nin:["American ","Chinese"]}}, 
    {name:{$regex:/^Wil/}}
  ]
}, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});


db.Restaurants.find({
  grades:{$elemMatch:{
    grade:"A", 
    score:11, 
    date:ISODate("2014-08-11T00:00:00Z")
  }}
}, {restaurant_id:1, name:1, grades:1, _id:0});


db.Restaurants.find({
  "grades.1.grade":"A", 
  "grades.1.score":9, 
  "grades.1.date":ISODate("2014-08-11T00:00:00Z")
}, {restaurant_id:1, name:1, grades:1, _id:0});


db.Restaurants.find({
  "address.coord.1":{$gt:42, $lte:52}
}, {restaurant_id:1, name:1, address:1, _id:0});


db.Restaurants.find().sort({name:1});


db.restaurants.find().sort({name:-1});


db.Restaurants.find().sort({cuisine:1, borough:-1});


db.Restaurants.find({"address.street":{$exists:false}}, {address:1, name:1});


db.Restaurants.find({"address.coord":{$type:"double"}}, {name:1, "address.coord":1});


db.Restaurants.find({"grades.score":{$mod:[7,0]}}, {restaurant_id:1, name:1, grades:1, _id:0});


db.Restaurants.find({name:{$regex:/mon/i}}, {name:1, borough:1, "address.coord":1, cuisine:1, _id:0});


db.Restaurants.find({name:{$regex:/^Mad/}}, {name:1, borough:1, "address.coord":1, cuisine:1, _id:0});