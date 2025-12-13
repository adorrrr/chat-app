//Express require
const express = require("express");
const app = express();
//Mongoose require
const mongoose = require("mongoose");
//EJS require
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const Chat = require("./models/chat.js");

//mongoose setup
main().then( () => {
    console.log("connection successful");
}) 
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};


//Index route
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("index.ejs", { chats });
    } catch (err) {
        console.log(err);
        res.send("Error loading chats");
    }
});


app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});

app.get("/", (req, res) => {
     res.send("kichu ekta hoche");
});