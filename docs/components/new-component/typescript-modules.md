---
sidebar_position: 2
---

# Typescript and CSS modules

When building the component keep in mind that using `Typescript` and `CSS modules` is required to have it approved.

## Typescript

All the component code should be written in typescript with the correct types implemented for everything the component needs like the props and such.

### Component props

The component props must be created as an interface which is named `ComponentName` followed by `Props` and it also should be exported with the component, so for example a `Button` component file should look something like this.

```tsx
export interface ButtonProps {
// Your code here
}

const Button: React.FC<ButtonProps> = (props) => {
  // Your code here
};

export default Button;
```

### Global props

We have global types which you can find in the `src/types` folder which are accessible globally in the project. so make sure the type you need is not available there beforeyou create it.

## CSS modules

All the component styles should be scoped to the component and to achieve that we use CSS modules.

It works exactly like writing any other style sheet with the difference of having the `*.module.*` in the name of the file and the way we use import and use the styles.

Here is an example of how we use it.

```tsx
import styles from './Button.module.scss'; // this is how we import the styles

const Button = () => {
 return <div className={styles.button}/> // this is how we use the class
}
```

:::caution
Any class declared here will not be available to any other component which is what we want, but keep this in mind. and please don't import other components styles in your component.
:::

### Global styles

We have global styles which you can find in the `*.scss` files at the root of the project. these files contain classes that are commonly used and are not scoped to anythingso you can just use them if needed.

:::danger
Most of these classes styles can be achieved by using the layout component we already have like `Row` and `Space` so only use the classes if 100% necessary.
:::

