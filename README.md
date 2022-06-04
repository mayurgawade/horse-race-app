# horse-race-app

commands to run horse-race-app in postman

$ npm install

$ nodemon index.js

Import the postman collection i.e. available inside **docs/** directory

1. sign up with user using following post call

POST  http://localhost:3000/signup

body : {
    "email":"testemail@gmail.com",
    "password":"Test1234"
}


2. use same user to auth call like below

POST http://localhost:3000/auth


body : {
    "email":"testemail@gmail.com",
    "password":"Test1234"
}


3. Use following call to get results:

GET  http://localhost:3000/results 

Headers = Authorization: Bearer <your-token-received-from-auth-api-call>
  
  
