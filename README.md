# auth-demo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Structure
This repo has has essentially two apps that talk to each other via API calls
- Front end: React App that runs on port 3000
- Backend end: A Node/Express API app that runs on port 9000

The apps are separated because I have found that having a clean separation makes the API design much cleaner from the start.

## Viewing the app on Heroku:

https://vast-ravine-24080.herokuapp.com/


## Running the app locally

1. Starting the server: this runs on port 9000

```node server.js```

2. Starting the React Client: this runs on port 3000

a) ```cd into /client```

b) ```npm start```

## Status Updates

1. [x] Node/Express app listening to a port on local machine

2. [x] Integrate postgres into app

3. [x] Node/Express/Postgres with user creation via API request (Postman)
a) name, email, password

4. [x] Node/Express/Postgres with user authentication via API request (Postman)

5. [x] Create different types of users (admin, user, consultant) via API

6. [x] view all users created of users via API request (Postman)

7. [x] Manually add a new user via API request (Postman)

8. [x] Manually deactivate a user via API request (Postman)

9. [x] Glue together a React app that hits the Node API

10. [x] React app: add routing system

11. [x] React app: registration page

11. [x] React app: login page /login

12. [x] React app: view all users page /users

13. [x] React app: When user logs in the data is returned to the dashboard component

14. [ ] React app: add a user manually via /users page

15. [ ] React app: remove a user manually via /users page

16. [ ] React app: batch create users via CSV in /users page

17. [x] deploy to node.js backend to Heroku

18. [x] Have postgres on Heroku

19. [x] Point React app to heroku server (instead of local)
