const mongoose = require('mongoose');
const { User, Thought} = require('../../models');

mongoose.connect('mongodb://127.0.0.1:27017/SocialNetworkDB') 
.then( () => {
    console.log('Mongo Connection Open');
}).catch((err) => {
    console.log(err)
});

const seedThoughts = [
    {
        "thoughtText": "I am having a wonderful day!",
        "username": "royceefus"
    },
    {
        "thoughtText": "Where is my mind?? Where?? Is my mind?",
        "username": "theguy"
    },
    {
        "thoughtText": "Is Santa real??? My classmates are telling me he is actually my parents but I do not believe them.",
        "username": "curly"
    },
    {
        "thoughtText": "I can not wait for Memorial Day!",
        "username": "peteyboy"
    }
    ]
const seedUsers = [
    {
        "username": "royceefus",
        "email": "Royce@atkins.com"
    },
    {
        "username": "theguy",
        "email": "Theguy@gmail.com"
    },
    {
        "username": "curly",
        "email": "gamblethorp@gmail.com"
    },
    {
        "username": "peteyboy",
        "email": "thepetes@gmail.com"
    }
    ]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    console.log('Users Seeded');
    await Thought.deleteMany({});
    await Thought.insertMany(seedThoughts);
    console.log('Thoughts Seeded');
};

seedDB().then(() => {
    mongoose.connection.close()
})