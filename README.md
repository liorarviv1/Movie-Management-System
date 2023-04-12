# Movies Management System
<div style="text-align:center">
  <img src="https://user-images.githubusercontent.com/129841851/231477540-05505a00-2101-400b-97ae-032ce0251638.png" alt="image" width="400">
</div>
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
<h3>Login</h3>
     <img src="https://user-images.githubusercontent.com/129841851/231476044-43934630-003c-4434-86f8-0e9f7411c5f9.png" width="800">

<h3>movise</h3>
<ul>
    <li>display all the movies in the cinima site.</li>
    <li>Members and Admin can edit and add movies - depend on their permissions.</li>
     <img src="https://user-images.githubusercontent.com/129841851/231470948-52d27d87-6c3f-4aba-a4e4-9ea25e7812a2.png" alt="image1" width="400">
     <img src="https://user-images.githubusercontent.com/129841851/231470963-b09eb63b-d414-424b-a16c-48fdaf27cdb2.png" alt="image2" width="400"> 
      <img src="https://user-images.githubusercontent.com/129841851/231475100-6dfbc587-8643-4994-8cfd-f2cafe9bb593.png" alt="image3" width="400"> 

</ul>
<h3>subscriptions</h3>
<ul>
    <li>display all the subscriptions in the cinima site.</li>
    <li>Members and Admin can add subscriptions - depend on their permissions.</li>
      <img src="https://user-images.githubusercontent.com/129841851/231472677-9b303b76-66fc-4aff-b252-270db399f8ea.png" alt="image1" width="400">
     <img src="https://user-images.githubusercontent.com/129841851/231472728-8ca3e0df-5c46-44f0-ada9-fbdc9282aed0.png" alt="image2" width="400"> 

</ul>
<h3>Running the React Frontend</h3>
<ul>
    <li>Navigate to the root directory of your React project in your terminal/command prompt.</li>
    <li>Install all the necessary dependencies by running the command npm install.</li>
    <li>Start the development server by running the command npm start.</li>
    <li>Your React project should now be running on http://localhost:3000/.</li>
</ul>

<h3>Running the Node.js Backend</h3>
<ul>
    <li>Navigate to the root directory of your Node.js project in your terminal/command prompt.</li>
    <li>Install all the necessary dependencies by running the command npm install.</li>
    <li>Start the Node.js server by running the command node app.js. (Note: the app.js file should contain your server-side code).</li>
    <li>Your Node.js server should now be running and listening for incoming requests on the specified port (which you can configure in your app.js file).</li>
</ul>


