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
<h3>movise</h3>
<ul>
    <li>display all the movies in the cinima site.</li>
    <li>Members and Admin can edit and add movies - depend on their permissions.</li>
     <img src="https://user-images.githubusercontent.com/129841851/231470948-52d27d87-6c3f-4aba-a4e4-9ea25e7812a2.png" alt="image1" width="400">
     <img src="https://user-images.githubusercontent.com/129841851/231470963-b09eb63b-d414-424b-a16c-48fdaf27cdb2.png" alt="image2" width="400"> 

</ul>
<h3>subscriptions</h3>
<ul>
    <li>display all the subscriptions in the cinima site.</li>
    <li>Members and Admin can add subscriptions - depend on their permissions.</li>

</ul>
<h3>user management</h3>
<ul>
    <li>display all the users-members data in the cinima site just for Admin.</li>
    <li>This page allowd Admin to add, edit, delete users.</li>

</ul>

