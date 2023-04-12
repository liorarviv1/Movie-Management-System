# Movie Management System
 Movie Management System is a web application created for managing a cinema general data such as: movies, users and members, and provides subscriptions management options.
 

## Server side:
The servers were developed using express and node.
All calls between the servers are made using Rest calls based on CRUD.
The servers manage databases realized by mongoDB and the modeling of the objects was done with the help of Mongoose.

## Client side:
Developed in React.js, loading performance and state management have been improved using Redux.<br/>
The distribution of permissions in the application allows only existing users to perform actions according to the limitations defined for them by admin.<br/>

## Main Points:
The Cinima has Users for authentication and autorizetion which connected to members that could activate in the site
Each member can see, add, edit, and delete moveis and subscriptions (subscriptions canot be deleted) as their user's permissions.<br/>

## Pages
<h3> movise </h3>
display all the movies in the cinima site.<br/>
Members and Admin can edit and add movies - depend on their permissions.<br/><br/>
subscriptions<br/>
display all the subscriptions in the cinima site.<br/>
Members and Admin can add subscriptions - depend on their permissions.<br/><br/>
user management<br/>
display all the users-members data in the cinima site just for Admin.<br/>
This page allowd Admin to add, edit, delete users.<br/>
