# NodeJs API with ExpressJs + Typescript and MongoDB using Clean Architecture.

Api in NodeJs developed with Typescript using ExpressJs framework, mongoose and MongoDB.

Frameworks and Library used:
* [ExpressJS](https://expressjs.com/) - Web framework for NodeJs.
* [Mongoose](https://mongoosejs.com/) - ORM Library for MongoDB.
* [Express validator](https://express-validator.github.io/docs/) - Library for validate and sanitize input data.
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Library for password hashing.
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - Library for implementation of JSON Web Tokens.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Library to load environment variables.
* [Jest](https://jestjs.io/) - Library for Unit testing and Integration testing.
* [Supertest](https://www.npmjs.com/package/supertest) - Library for test API endpoints.
* [Nodemon](https://nodemon.io/) - Used for hot reload.


## Requeriments
Install Nodejs environment in your O.S. - https://nodejs.org/en/

This project connects to a database hosted in Mongo Atlas, but you can install MongoDB on your PC and use your own database locally or create an free account at Mongo Atlas.  

Use [Mongo Atlas](https://www.mongodb.com/atlas/database)  
Download [MongoDB](https://www.mongodb.com/try/download/community)

## Project setup installation

Install project dependencies, from the root path of the project run in terminal:

```bash
  npm i
```

## Environment variables

To run this project, you will need to add the following environment variables to the `.env` file.

```bash
PORT=port
DB_NAME=databaseName
DB_USER=databaseUser
DB_PASS=databasePass

SECRET=secret_key_for_generate_jwt
```

The `.env` file must be in the root path of the project.


## Deployment

**Development**

To run project in development mode execute in terminal:

```bash
  npm run dev
```

**Production**

To generate the project files for production, run the command:

```bash
  npm run build
```
The production folder will be generated in the root path of the project. The name of the folder will be **dist**.
