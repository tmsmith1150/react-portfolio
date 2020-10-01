
import budgetTrackerGif from '../Gifs/budget-tracker-example.gif';
import fitnessTrackerGif from '../Gifs/fitness-tracker-example.gif';

const projects = [
    {
        "id": 1,
        "projectName": "Social",
        "exampleGif" : budgetTrackerGif,
        "summary": "Social is an application that allows user to search local events.",
        "githubLink": "https://github.com/CallieCrownover/social",
        "deployedLink": "https://socialhangout.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "Budget Tracker",
        "exampleGif" : budgetTrackerGif,
        "summary": "Budget Tracker is a web application that allows the user to track expenses savings and income. Users can create expense or savings categories and add individual expenses or savings. The app was built using MVC paradigm and server-side API.",
        "techUsed": "Tech Used: MySql, Express, Node.js, Handlebars, Bootstrap, ESLint, TravisCI, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/budget_tracker",
        "deployedLink": "https://frozen-plains-26882.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Fitness Tracker",
        "exampleGif" : fitnessTrackerGif,
        "summary": "Fitness Tracker is a web application that allows a user to view create and track daily workouts. It offers the ability to log multiple exercises in a workout on a given day. Users can track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the distance traveled can also be tracked.",
        "techUsed": "Tech Used: Express, HTML, CSS, Javascript, Mongoose, Node,js and this project is deployed to Heroku.",
        "githubLink": "https://github.com/tmsmith1150/workout-tracker",
        "deployedLink": "https://shielded-peak-04503.herokuapp.com/"
    }
];

export default projects;