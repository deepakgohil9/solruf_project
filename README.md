### Task: Build a Node.js API using TypeScript and Express.js

### About Project

This project aims to build a backend REST API for a blog web application using Node.js, TypeScript, and Express.js. The API will provide all CRUD (Create, Read, Update, Delete) operations on the blog and also a full-text search feature.

The REST API will be built using Express.js, which is a popular Node.js web application framework. TypeScript will be used to add static typing to the project, making the code more maintainable and easier to understand.

The API will provide endpoints to create new blog posts, read existing blog posts, update existing blog posts, and delete blog posts. Additionally, the API will implement a full-text search feature to allow users to search for blog posts based on keywords.

Overall, this project will provide a robust and scalable backend API for a blog web application, allowing users to create, read, update, delete blog posts, and search for blog posts based on keywords.

### Requirements fulfilled

*   [x] Build a Node.js API that allows users to create, read, update, and delete items from a database.
*   [x] Use TypeScript to write the API code.
*   [x] Use Express.js to handle incoming requests and responses.
*   [x] Use JWT (JSON Web Tokens) for user authentication.
*   [x] Use middleware to handle common tasks such as error handling, request logging, and authentication checks.
*   [x] Use MySQL to store and retrieve data (can use an orm like Sequelize or Prisma).

### Additional features added

*    [x]  The fulltext search was implemented for searching for blogs.
*    [x]  Email verification.
*    [x]  Dockerized this application.

### Task accomplished

*   [x] Set up a new Node.js project and install the required dependencies (TypeScript, Express.js, JWT library, database driver, etc.).
*   [x] Create a database schema for the items table, and write the necessary queries to perform CRUD (Create, Read, Update, Delete) operations on the database.
*   [x] Implement the authentication system using JWT. Users should be able to register, log in, and log out.
*   [x] Create middleware functions to handle common tasks such as error handling, request logging, and authentication checks.
*   [x] Create RESTful endpoints for the API that allows users to create, read, update, and delete items from the database. Use the middleware functions from Step 4 to handle these requests.
*   [x] Write tests to ensure that the API functions as expected, covering all possible use cases.

### API Documentation : [https://documenter.getpostman.com/view/19278775/2s93eYTrCs](https://documenter.getpostman.com/view/19278775/2s93eYTrCs)

### .env configuration

| Variable | Description |
| --- | --- |
| DATABASE | name of database |
| DB\_USER | database user name |
| DB\_PASSWORD | password for database |
| DB\_HOST | host address of database |
| DB\_PORT | port to connect with database |
| MAIL | mail address which is used to send mail for verification |
| GMAIL\_KEY | app password for that mail address |
| BASE\_URL | base URL where project is deployed |
| JWT | JWT secret |
