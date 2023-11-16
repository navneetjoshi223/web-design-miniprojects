**Assignment 9**

*Description*

This assignment demonstrates the integration of a React frontend with a Node.js backend. The project includes a login page, multiple pages using React Router, dynamic components, and styling using CSS.

In this assignment, I have connected my previous node assignment and used it's created APIs to use the existing users for login functionality.

*Folder structure*

The repository includes:

Source code for frontend React application in the frontend folder.
Backend server code in the backend folder.
README.md file providing instructions and information about the project.

- src/
  - api/
    - config/
        - db.js
    - controllers/
        - userController.js
    - models/
        - userModel.js
    - routes/
        - router.js
    - services/
        - userService.js
    - server.js
  - App/
    - AboutUs/
    - Card/
    - Contact/
    - Home/
    - Jobs/
    - Login/
    - Navbar/
    - App.js
    - App.css
  - index.css
  - index.js

*Pages*

Login Page: Allows users to log in using pre-existing usernames and passwords stored in the backend.

React Routes ->

Home: Displays a list of dynamically generated cards using map().
AboutUs: Brief information about the company or project.
Jobs: Information about available job opportunities.
Contact: Contact details or form.

Common components ->

Card Components: Used on each page to showcase information relevant to the page.
Navbar: Used to display navigation links in the header on all pages.
