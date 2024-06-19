## Social Media API Web App
This is a Social Media API Web App that allows users to interact with a social media platform through various API routes. Users can create accounts, post thoughts, add reactions to thoughts, manage friend lists, and perform various other social media actions through this API.

## Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Insomnia (for testing API routes)

## Installation
Clone the repository to your local machine.
Run npm install to install the necessary dependencies.
Set up your environment variables in a .env file based on the provided .env.EXAMPLE file.
Start the server by running npm start.

## API Routes
GET /api/users: Get all users.

GET /api/users/:userId: Get a single user by ID.

POST /api/users: Create a new user.

PUT /api/users/:userId: Update a user's information.

DELETE /api/users/:userId: Delete a user.

GET /api/thoughts: Get all thoughts.

GET /api/thoughts/:thoughtId: Get a single thought by ID.

POST /api/thoughts: Create a new thought.

PUT /api/thoughts/:thoughtId: Update a thought.

DELETE /api/thoughts/:thoughtId: Delete a thought.

Additional routes for managing friend lists and reactions to thoughts.

## Walkthrough Video
A walkthrough video demonstrating the functionality of the Social Media API Web App can be found here.

## Contributors
Rahul Sharma

## License
None