#specify base image 
FROM node:alpine

#adding dependency

WORKDIR /usr/app

COPY package.json ./

RUN npm install 

COPY ./ ./

# RUN npm install -g nodemon

#default command
CMD ["npm","start"]