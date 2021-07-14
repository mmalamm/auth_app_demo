# todos for auth app

- create DB adapters DONE
- create seed script with users table and a few init users DONE
- finish writing the authRouter request handlers DONE
- smoke test using curl or postman DONE

- create basic frontend
    - create a greeting component DONE
    - create a login form DONE
    - create register form

- deployment

## Heroku deployment steps

1) ensure you have heroku CLI installed (and logged in) and run `heroku create` from your project directory. This will provision a dyno on heroku for you and add a new heroku remote to your git repository
2) Set your environment variables into your dyno- your .env is gitignored, and since our app is reading `JWT_SECRET` from our environment, we must set this variable inside our heroku dyno environment by running `heroku config:set JWT_SECRET="whatever_your_secret_is"`
3) ensure that our server is listening from a port that is set by heroku; we can access that port number from an environment variable that is automatically set by heroku (`const PORT = process.env.PORT || 4000`)
4) create a postgres instance on heroku- go to your heroku dashboard and navigate to the resources tab under your newly created application for this project, and search for `heroku postgres` and attach it to the application
5) configure your postgres client's connection string in your application code to read from `process.env.DATABASE_URL`, which should have been set after you attached the postgres instance in step 4
6) we need to configure SSL so our dyno and our postgres instance can communicate; the easiest way to do this would be to set an environment variable in our dyno by running `heroku config:set PGSSLMODE=no-verify`
7) run your seed script to configure your new postgres instance with `heroku run npm run seed` (assuming you have a seed script in your package.json). Also make sure that the seed script is using the postgres client that has the connection string set to read from `process.env.DATABASE_URL`
8) build your frontend application- run your react-scripts build command from your package json from your frontend app so that the assets are generated and are able to be served from your express.static directory