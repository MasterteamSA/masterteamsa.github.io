---
sidebar_position: 2
---

# File Structure

All new components will be created inside the `src/components` folder inside it's own folder which is named with the
component name using ***PascalCase***, for example `Component`.

:::caution
Please make sure to use proper english when naming the component, for example `Checkbox` is correct but `CheckBox` is
not.
:::

```git title="Folder Structure"
.
+-- src
| +-- components
| | +-- Button
| | +-- Component
| | +-- AnotherComponent

```

All new components will have 4 files in their directory.

```git title="src/components/"
.
+-- Component
| +-- index.tsx // this contains the component code
| +-- Component.test.tsx // this contains the unit tests for the component
| +-- Component.stories.tsx // this contains the storybook config & docs for the component
| +-- components.module.scss // this contains the component styles

```
