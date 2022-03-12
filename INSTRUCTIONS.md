## Getting started

1. `npm install`
2. Create a `.env` file based on the example with proper settings for your
   development environment
3. `npm start`

## Deploy to Heroku

1. Create a new project
2. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
3. `heroku login`
4. Add heroku as a remote to this git repo (`heroku git:remote -a APP_NAME`)
5. `git push heroku master`
6. Add a `REACT_APP_BASE_URL` config var.  This should be the full URL of your react app: i.e. "https://solo-react.herokuapp.com"
