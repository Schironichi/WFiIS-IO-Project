# How to turn on the server?
    npm run dev
Note: After turning it on, it resets automatically with each saved change in files.

# Available server pages
They are mainly for testing:

- http://localhost:5000/ - profile page. Allows to log out.
- http://localhost:5000/register - register page.
- http://localhost:5000/login - login page.

Temporary solution just for testing purposes.

# Notes
1. There are automatic redirections on server side:
- You cannot access profile page without being logged in,
- You cannot log in / register when already logged in - automatic main page redirection.
2. All of the user data is stored as:
    - id - temporarily a current date
    - name
    - surname
    - email
    - status - status of account - either Pending (waiting for mail auth) or Active
    - login
    - password
    - authentication_string - token necessary for account activation. It is sent to user as part of email confirmation link

There also are cookies used to maintain sessions properly.

3. (temporarily) user data is a local array "users" in server.js file.