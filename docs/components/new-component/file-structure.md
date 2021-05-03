---
sidebar_position: 2
---

# File Structure

All new components will be created inside the `src/components` folder inside it's own folder which is named with the component name using ***PascalCase***, for example `Component`.

```git title="Folder Structure"
.
+-- src
|   +-- components
|   |   +-- Button 
|   |   +-- Component 
|   |   +-- AnotherComponent 

```

All new components will have 4 files in their directory.

```git title="src/components/"
.
+-- Component
|   +-- index.js // this contains the component code
|   +-- Component.test.js // this contains the unit tests for the component
|   +-- Component.stories.js // this contains the storybook config & docs for the component
|   +-- components.module.scss // this contains the component styles

```
