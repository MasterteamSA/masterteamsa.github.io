---
sidebar_position: 2
---

# Configure the Project

Once you have the repo cloned to your machine it's time to configure the project to fit the client needs.

## Change the Port Number 

We usually use different port number for each client to make it easier to develop for multiple clients without having to deal with clearing data all the time.

The port number for ***PPlus*** projects starts from ***3000*** and the port number for ***SPlus*** projects starts from ***4000***.

This number will be a simple increment from the last use number for each product we have and it will be configured in the run script in the `package.json` file.

```json title="package.json"
{
  "scripts": {
    "start": "cross-env PORT=3009 react-scripts start", // change port number here
 }
}
```

## Configure the Project for the Client

Most of the client basic configuration will be done in the `/public/local/` directory, there we have both our ***Branding Images*** and ***config.js*** file.

### Branding Images

For every client we have to change the Logo that will be used throughout the system and the favicon to match the client brand.

This is as simple as just replacing the `/public/local/logo.png` and `/public/local/favicon.ico` files with the new ones.

### Config.js

This is our main configuration file located in the `/public/local/` directory.

This file can control many things which you can read more about [here](https://google.com), but the following are the things that we change for almost every client.

***API_URL*** and ***THEME_COLOR*** in the `env` variable and the ***title*** which can be configured at the bottom of the configuration file.

```js title="/public/local/config.js"
window.env = {
  // The url for the api service
  API_URL: 'http://www.sample.com/mobile/',
  // The main color that will be used throughout the system
  THEME_COLOR: '#00B3C6',
}

// Set the tab title
document.title = 'P+ | Client';
```

