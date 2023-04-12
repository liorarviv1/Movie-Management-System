# Movie Management System
 Movie Management System is a web application created for managing a cinema general data such as: movies, users and members, and provides subscriptions management options.
 

## Server side:
The servers were developed using express and node.
All calls between the servers are made using Rest calls based on CRUD.
The servers manage databases realized by mongoDB and the modeling of the objects was done with the help of Mongoose.

## Client side:
Developed in React.js, loading performance and state management have been improved using Redux.<br/>
The distribution of permissions in the application allows only existing users to perform actions according to the limitations defined for them by admin.<br/><br/>

## Main Points:
The Cinima has Users for authentication and autorizetion which connected to members that could activate in the site
Each member can see, add, edit, and delete moveis and subscriptions (subscriptions canot be deleted) as their user's permissions.<br/>
