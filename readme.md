# Clean Code Architecture

![Clean Code Architecture](images/clean.jpg)

## Tech Stacks

- Node.js
- Express
- MongoDB
- Mongoose

## Usage

For the database part, you can use a local/memory database or mongoDB.
To change the database, please change the require path in `./dao/books-db/index.js` and adjust it to the database you want to use.

For the presentation part, you can use the CLI or Web server.

## Installation

You need to install Node.js first

```bash
# Install all depedencies
npm i

# CLI
npm run cli
# or
node drivers/cli/index.js --index
# or
node drivers/cli/index.js --show 1
# or
node drivers/cli/index.js --delete 1


# Web Server
npm start
# or
npm run dev
```
