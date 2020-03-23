FROM node:10

# Create app directory
RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /usr/src/app/server

EXPOSE 5000

CMD [ "npm", "run", "dev" ]