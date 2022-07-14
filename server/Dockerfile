#specify base image 
FROM node:alpine

#adding dependency

WORKDIR /app/server

COPY package.json ./

RUN npm install 

COPY ./ ./

# RUN npm install -g nodemon

#default command
CMD ["npm","start"]