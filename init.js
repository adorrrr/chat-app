//Mongoose require
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

//mongoose setup
main().then( () => {
    console.log("connection successful");
}) 
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Data created
const chats = [
    {
        from: "saima",
        to: "ador",
        msg: "Hi Ador, how are you?",
        created_at: new Date(),
    },
    {
        from: "rahim",
        to: "karim",
        msg: "Did you finish the assignment?",
        created_at: new Date(),
    },
    {
        from: "nabila",
        to: "saima",
        msg: "Are you free this evening?",
        created_at: new Date(),
    },
    {
        from: "ador",
        to: "rahim",
        msg: "Yes, I sent you the files.",
        created_at: new Date(),
    },
    {
        from: "tanvir",
        to: "nabila",
        msg: "Meeting is postponed to tomorrow.",
        created_at: new Date(),
    },
    {
        from: "karim",
        to: "tanvir",
        msg: "Thanks for the update!",
        created_at: new Date(),
    },
    {
        from: "saima",
        to: "nabila",
        msg: "Lets go shopping this weekend.",
        created_at: new Date(),
    },
    {
        from: "ador",
        to: "tanvir",
        msg: "Can you review my code?",
        created_at: new Date(),
    },
    {
        from: "rahim",
        to: "saima",
        msg: "Please call me when youre free",
        created_at: new Date(),
    },
    {
        from: "nabila",
        to: "ador",
        msg: "Great job on the project!",
        created_at: new Date(),
    }
];

Chat.insertMany(chats);
