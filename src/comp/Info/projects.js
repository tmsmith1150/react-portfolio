
import budgetTrackerGif from '../Gifs/budget-tracker-example.gif';
import fitnessTrackerGif from '../Gifs/fitness-tracker-example.gif';
import socialExGif from '../Gifs/social-example.gif';
import burgerBarnGif from '../Gifs/burger-barn-example.gif';
import cyclepathsGif from '../Gifs/cyclepaths-example.gif'

const projects = [
    {
        "id": 1,
        "projectName": "Social",
        "exampleGif" : socialExGif,
        "summary": " Social is a web application allowing users to search, host, or sign up to attend local events to create exciting new life experiences. As the site grows, it will also help you grow your group and attract more people who share your interests.",
        "techUsed": "React, Express, Node.js, MongoDB, Mongoose, Bootstrap, Reactstrap, Animate.css, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/social",
        "deployedLink": "https://socialhangout.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "Budget Tracker",
        "exampleGif" : budgetTrackerGif,
        "summary": "Budget Tracker is a web application that allows the user to track expenses, savings, and income. Users can create expense or savings categories and add individual expenses and savings. The app was built using MVC paradigm and server-side API.",
        "techUsed": "MySql, Express, Node.js, Handlebars, Bootstrap, ESLint, TravisCI, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/budget_tracker",
        "deployedLink": "https://frozen-plains-26882.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "Burger Barn",
        "exampleGif" : burgerBarnGif,
        "summary": "Burger Barn is a fun web application allowing users to create their own unique burger and then devour the burger. The application follows the MVC design pattern; using Node and MySQL to query and route data, and Handlebars to generate the HTML",
        "techUsed": "MySql, Express, Node.js, Handlebars, Bootstrap and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/burger-barn",
        "deployedLink": "https://hidden-tundra-27553.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Fitness Tracker",
        "exampleGif" : fitnessTrackerGif,
        "summary": "Fitness Tracker is a web application that allows a user to view, create and track daily workouts. It offers the ability to log multiple exercises in a workout on a given day. Users can track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the distance traveled can also be tracked.",
        "techUsed": "Express, HTML, CSS, Javascript, Mongoose, Node,js and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/workout-tracker",
        "deployedLink": "https://shielded-peak-04503.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Cyclpaths",
        "exampleGif" : cyclepathsGif,
        "summary": "Cyclepaths is a web application that allows users to locate local cycling events and incidents such as theft and road conditions. Integrating data received from multiple server-side API requests. Including a weather API so users can check local weather before hitting the trail.",
        "techUsed": "HTML, CSS, Javascript, Tailwinds, Moment.js",
        "githubLink": "https://github.com/tmsmith1150/cyclepaths",
        "deployedLink": "https://tmsmith1150.github.io/cyclepaths/"
    }
];

export default projects;