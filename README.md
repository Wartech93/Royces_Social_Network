# Royce's Social Media Back End

This project is a social media backend API capable of managing users, their thoughts, reactions to thoughts, and friendships between users. The API supports CRUD operations for users and thoughts, as well as create and delete operations for reactions and friendships. This API can be tested and interacted with using Insomnia.

## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact)
- [Links](#links)
- [Acknowledgements](#acknowledgements)

## Features

Users: Create, read, update, and delete user profiles.
Thoughts: Create, read, update, and delete user thoughts.
Reactions: Add and remove reactions to thoughts.
Friends: Add and remove friends for a user.

## Requirements

Node.js
Express.js
MongoDB
Mongoose
Nodemon(optional)

## Installation
### Clone the repository:

`git clone git@github.com:Wartech93/Royces_Social_Network.git`
`cd Royces_Social_Network`

### Install dependencies:

`npm install`
### Set up environment variables:

Create a .env file in the root directory and add your MongoDB connection string:

`MONGODB_URI=your_mongodb_connection_string`

### Start the server:

`npm run start`
The server will start on http://localhost:3001.

### API Endpoints
Users
Create a new user:

POST /api/users
Request body:
```
    {
    "username": "exampleUser", 
    "email": "user@example.com"
    }
 ```


Get all users:

GET /api/users
Get a single user by ID:

GET /api/users/:userId 
Update a user by ID:

PUT /api/users/:userId
Request body:

```
    {
     "username": "newUsername",
     "email": "newEmail@example.com"
    }
```
Delete a user by ID:

DELETE /api/users/:userId
Thoughts
Create a new thought:

POST /api/thoughts
Request body:
```
    {
     "thoughtText": "This is a thought",
     "username": "exampleUser",
    }
```
Get all thoughts:

GET /api/thoughts
Get a single thought by ID:

GET /api/thoughts/:thoughtId
Update a thought by ID:

PUT /api/thoughts/:thoughtId
Request body:

```
   {
    "thoughtText": "Updated thought text"
   }
```
Delete a thought by ID:

DELETE /api/thoughts/:thoughtId
Reactions
Add a reaction to a thought:

POST /api/thoughts/:thoughtId/reactions
Request body:

```
    {
     "reactionBody": "This is a reaction",
     "username": "exampleUser"
    }
```

Delete a reaction from a thought:

DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Friends
Add a friend to a user:

POST /api/users/:userId/friends/:friendId
Remove a friend from a user:

DELETE /api/users/:userId/friends/:friendId
Using Insomnia
To test the API using Insomnia:

Import the API specification:

Download the Insomnia.json file from the repository (if available) or manually configure the endpoints as described above.
Set the base URL:

Make sure the base URL is set to http://localhost:3001.
Create requests:

Use the endpoints and request bodies provided in the "API Endpoints" section to create and test various requests.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss potential changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
I want to acknowledge Christian Abbate and the TA's for working tirelessly with me to help get this assignement completed. I am incredibly thankful to them for spending the time and effort to make this back-end work.

## Contact
For any questions or concerns, please contact royceatkins93@gmail.com.

My github repository: 
https://github.com/Wartech93

Walkthrough Video:
https://drive.google.com/file/d/175b-c0k0YkpuizLVjlon4ybTGcl2ckrR/view?usp=drive_link