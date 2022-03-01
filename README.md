# WALL UI

Wall UI is a frontend app built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) & [Tailwindcss](https://tailwindcss.com/).

Referring backend app can be found [here](https://github.com/deboracosilveira/wall-api).

## CONCEPT
### _Elas Codam Wall_
A place to gather people interested in Elas Codam, so they can share thoughts, experience, events and more!

[Elas Codam](https://www.linkedin.com/company/elas-codam/) is a women's tech community founded by me, [Débora Silveira](https://www.linkedin.com/in/deborasilveira/).

We work together toward a better and more inclusive world!

## DESIGN
The design prototype can be found on [Figma](https://www.figma.com/file/LhOjCrlrwH7KB38funOGMj/Wall-UI). You can use the main menu to navigate through the pages: `Wall guest`, `Wall authed` and `Sign up/in`. 

## DEVELOP

Notice, you should have [nvm](https://github.com/nvm-sh/nvm) or [NodeJS](https://nodejs.org/en/) installed to run this app.

The app relies on an environment variable in order to operate correctly.
For running it locally, create a `.env` file with same content as [.env.example](.env.example).

Install dependencies:
```sh
%> npm install
```

Run app on `http://localhost:3000`:
```sh
%> npm run start
```

## DEPLOY
The app is hosted on [Heroku](https://www.heroku.com/) at https://wall-ui.herokuapp.com/
> If you are testing the sign up confirmation email in production, please also check your spam box.
