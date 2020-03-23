FROM node:10

# Setting working directory. All paths will be relative to WORKDIR
RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . /usr/src/app/client

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "run", "dev" ]