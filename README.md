# RANDOM GENERATOR 
A simple Node.js and Express application that exposes API endpoints for generating random numbers and letters.

## Features
- Returns basic application information
- Generates a random number between 0 and 99
- Generates a random uppercase letter from A to Z
- Returns responses in JSON format

## Requirements
- Node.js
- npm

## Installation
Clone the repository: 
````
git clone git@github.com:Adrian-Moldovan/nodejs-random-generator.git
cd <repository-folder>
````

Install the dependencies:
````
npm install
````

## Running the Application
Start the server with: 
````
npm start
````

The application will run at:
````
http://localhost:3000
````

## API Endpoints

### GET /
Returns information about the application and the available endpoints.

Example response:
````
{ 
    "appName": "Random generator", 
    "status": "Up and running!", 
    "availableEndpoints": [ 
        { 
            "url": "/number", 
            "description": "generate a random number" 
        }, 
        { 
            "url": "/letter", 
            "description": "generate a random letter" 
        }, 
        { 
            "url": "/rock-paper-scissors", 
            "description": "generate a random rock - papers - scissors option" 
        } ] 
}
````

### GET /number
Generates a random integer between 0 and 99.

Example response:
````
{ 
    "description": "Generates a random number", 
    "value": 42, 
    "timestamp": "2026-09-06 12:14:42" 
}
````


### GET /letter
Generates a random uppercase letter between A and Z.

Example response:
````
{ 
    "description": "Generates a random letter", 
    "value": "G", 
    "timestamp": "2026-09-06 12:14:42" 
}
````


### GET /rock-paper-scissors
Generates a random option for a rock - paper - scissors game.

Example response:
````
{ 
    "description": "Generates a rock - papers - scissors option", 
    "value": "paper", 
    "timestamp": "2026-09-06 12:14:42" 
}
````

## Technologies
- Node.js
- Express.js
- JavaScript ES Modules