## Form PC

Form PC is a website that allows people to create and customise their own lists of ITX PC parts.
It will be used to compare all aspects of all components with one another, and allow them to request a build...

## Spec

The Form PC site is built with Next.JS, and Express. The Bootstrap 4 library is used for styling.

## Scripts
In the project directory, you should first run:
### `docker-compose build`

Then to serve:
### `docker-compose up`

The front end port is 3000, back end is 5000.
So, if you wanted to view the front end visit: localhost:3000

For the backend API visit localhost:5000

All files in client and server sides are watched for changes by docker.
This runs: `npm run dev` for a dev build. This is what you want to use for a localhost.
Production build has not been created yet, so when deploying we will need to look at this again.

### Other scripts that can be run:

If you do not have docker installed, you can use these when in each client/server directory individually:

For a dev build:
### `npm run dev`

For a Next.JS build (minifies, generates the .next folder which contains all the rendered content, etc).
Don't need to bother with this very often.
### `npm run build`

Then to run:
### `npm run start`

Starts Next.JS on a port.

To start the backend, simply run:
### `npm run dev`
in the server directory.

More [information](https://nextjs.org/learn/basics/deploying-a-nextjs-app/build-and-start) on Next scripts
