# Foundry Spatial - General Under Construction Page

This app serves the Foundry Spatial - General Under Construction Page. To be used when a site is undergoing maintenance.

## How to use

npm install
npm run dev

## Run in Docker

docker build -t maintenance:local .
docker run --env-file .env -p 5173:80  maintenance:local
