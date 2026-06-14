let{MongoClient ,ObjectId} = require("mongodb");


let url=process.env.MONGO_URL

let addBooking = (obj,res) =>
    {
    let client = new MongoClient(url);
    let db = client.db("mern");
    let collec = db.collection("events");
    collec.insertOne(obj)
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())
}
let getAllBooking=(res) =>
{
    let client = new MongoClient(url);
    let db = client.db("mern");
    let collec = db.collection("events");
    collec.find().toArray()
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())
}

let updateBooking = (id,data,res)=>
{
    let client = new MongoClient(url);
    let db = client.db("mern");
    let collec = db.collection("events");
    collec.updateOne({_id: new ObjectId(id)},{$set:data})
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())

}
let deleteBooking =(id ,res)=>
{
    let client = new MongoClient(url);
    let db = client.db("mern");
    let collec = db.collection("events");
    collec.find().toArray()
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
    .finally(()=>client.close())

}


module.exports = { addBooking ,getAllBooking,updateBooking};
