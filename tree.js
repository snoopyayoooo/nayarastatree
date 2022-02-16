{
  "name": "noteblock",
  "version": "1.3.0",
  "description": "naya rasta bot XD",
  "main": "src/main",
  "repository": "https://github.com/KagChi/noteblock.git",
  "author": "KagChi",
  "license": "GPL-3.0",
  "private": true,
  "dependencies": {
    "@discordjs/builders": "0.12.0",
    "axios": "0.26.0",
    "better-erela.js-apple": "1.0.1",
    "better-erela.js-spotify": "1.3.6",
    "common-tags": "1.8.2",
    "discord-akairo": "github:discord-akairo/discord-akairo",
    "discord.js": "13.6.0",
    "dotenv": "16.0.0",
    "erela.js": "2.3.3",
    "log4js": "6.4.1",
    "ms": "2.1.3"
  },
  "engines": {
    "node": ">=v16.x"
  },
  "scripts": {
    "start": "bash start.sh",
    "start:normal": "node src",
    "lint": "eslint src",
    "lint:fix": "eslint src --fix"
  },
  "devDependencies": {
    "eslint": "8.9.0",
    "eslint-config-airbnb-base": "15.0.0",
    "eslint-plugin-import": "2.25.4"
  }
}
