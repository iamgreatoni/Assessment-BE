FROM node:16.14-alpine

# Create app directory
WORKDIR /customerService

# Install app dependencies
# Used a wildcard to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 5002
CMD [ "npm", "run", "dev" ]
