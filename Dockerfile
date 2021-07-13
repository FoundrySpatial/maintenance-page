# frontend build stage
FROM node:14-alpine

# File Author / Maintainer
LABEL authors="Foundry Spatial <technical@foundryspatial.com>"

# set work directory
WORKDIR /app

# install packages needed for building
COPY package.json yarn.lock ./
RUN yarn install --production && yarn cache clean

# copy source
COPY . .

# Express uses port 3000/tcp by default
EXPOSE 3000

# run server
CMD ["yarn", "run", "start"]
