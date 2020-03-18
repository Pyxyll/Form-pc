## Form PC

Form PC is a website that allows people to create and customise their own lists of ITX PC parts.
It will be used to compare all aspects of all components with one another, and allow them to request a build...

## Spec

The Form PC site is built with Next.JS, and Express. The Bootstrap 4 library is used for styling.

## Scripts

For Dylan:

Note: Eventually we wont need to run these as Docker will do that for us.

In the project directory, you can run:

### `docker-compose up`

This runs: `npm run dev` for a dev build. This is what you want to use for a localhost.
Production build has not been created yet, so when deploying we will need to look at this again.

### Other scripts that can be run:

### `npm run build`

For a Next.JS build (minifies, generates the .next folder which contains all the rendered content, etc).
Don't need to bother with this very often.

### `npm run start`

Starts Next.JS on a port.

More [information](https://nextjs.org/learn/basics/deploying-a-nextjs-app/build-and-start) on Next scripts

TEMP: Create Dockerfile in server folder
