---
sidebar_position: 3
---

# Linking the Library to your Project

To test the library in your project before your changes are published, we can use the `npm link` feature as follows.

First of all we have to build the library so while in the components library base directory run the build command.

```bash title="/library-base-directory"
npm run build
```

Then we need to link the library in our system using the following.

```bash title="/library-base-directory"
npm link
```

To use the linked library in your project, just run the following command in your project directory.

```bash title="/your-project-base-directory"
npm link @masterteam/mt-design-react
```

Now we're all done and ready to use the library in our project by just importing the components we need.

```js title="src/containers/SomePage.js"
  import { Component } from '@masterteam/mt-design-react';
```

