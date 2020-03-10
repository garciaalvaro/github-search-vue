![Banner Image](docs/banner.png)

# GitHub Search (Vue)

This project is a simple app that provides a UI to search GitHub repositories using the [GitHub Search API](https://developer.github.com/v3/search/).

It is a reimplementation of [GitHub Search](https://github.com/garciaalvaro/github-search) or  [GitHub Search (React)](https://github.com/garciaalvaro/github-search-react), built in Vue using the Composition API.

- Built in **TypeScript** using **Vue**
- It provides a server using **Node.js** and **Express** on port 5000
- The CSS is built using **Stylus**
- The **Webpack** bundler transforms the files and transpiles them using Babel, and other loaders and plugins
- It provides configuration files for **eslint** linter

---

## Getting Started

### Prerequisites

To run this project make sure you have installed Node.js and npm in your machine.

### Installing and running

Install the project dependencies and start the server. From the root directory inside your terminal follow this steps:

- Install the dependencies: `$ npm install`
- Once finished, bundle the files and start the server: `$ npm start`
- Visit http://localhost:5000 in your browser

### Notes

- To stop the server run: `$ npm stop`
- You may also run the server and Webpack in development mode: `$ npm run dev`

---

## Testing

To run the provided tests, simply run: `$ npm test`

---

## Docker

The project also comes with Docker configuration files, so it can be run using Docker. It uses the production version of the app. First it builds the scripts with Webpack, then it starts the pm2 server.
 - First make sure you have Docker installed
 - Run the command: `$ docker-compose up -d` which will download and install the dependencies and set up the container
 - Once finished, it will be available in http://localhost:5000

---

## Screenshots

![Screenshot Image](docs/screenshot.png)
