# @gee-ui/react

React (TypeScript) component library which serves as a wrapper library around [shadcn/ui](https://ui.shadcn.com/). Unlock the same ease of use and customization for all components but with a single source of truth library.

shadcn has been the go-to choice for a ton of React applications, after using it within multiple projects I came across 3 problems which this library aims to solve:

### 1. Dependency management

There are a lot of times where you have to install dependencies like [Radix](https://www.radix-ui.com/) to get the components working end-to-end. These dependencies can quickly add up leaving you with the responsibility to maintain these dependencies over time. Instead of maintaining 10+ dependencies wouldn't it be nice to just maintain one?

**Before**

```
"@radix-ui/react-accordion": "^1.2.0",
"@radix-ui/react-alert-dialog": "^1.1.1",
"@radix-ui/react-aspect-ratio": "^1.1.0",
"@radix-ui/react-avatar": "^1.1.0",
"@radix-ui/react-checkbox": "^1.1.1",
"@radix-ui/react-collapsible": "^1.1.0",
"@radix-ui/react-context-menu": "^2.2.1",
"@radix-ui/react-dialog": "^1.1.1",
"@radix-ui/react-dropdown-menu": "^2.1.1",
"@radix-ui/react-hover-card": "^1.1.1",
"@radix-ui/react-label": "^2.1.0",
"@radix-ui/react-menubar": "^1.1.1",
"@radix-ui/react-navigation-menu": "^1.2.0",
"@radix-ui/react-popover": "^1.1.1",
"@radix-ui/react-progress": "^1.1.0",
"@radix-ui/react-radio-group": "^1.2.0",
"@radix-ui/react-scroll-area": "^1.1.0",
"@radix-ui/react-select": "^2.1.1",
"@radix-ui/react-slider": "^1.2.0",
"@radix-ui/react-slot": "^1.1.0",
"@radix-ui/react-switch": "^1.1.0",
"@radix-ui/react-tabs": "^1.1.0",
"@radix-ui/react-toggle": "^1.1.0",
"@radix-ui/react-toggle-group": "^1.1.0",
"@radix-ui/react-tooltip": "^1.1.2",
"clsx": "^2.1.1",
"cmdk": "^1.0.0",
"cva": "npm:class-variance-authority@^0.7.0",
"date-fns": "^3.6.0",
"embla-carousel-react": "^8.1.6",
"input-otp": "^1.2.4",
"lucide-react": "^0.378.0",
"react-day-picker": "^8.10.1",
"react-resizable-panels": "^2.0.20",
"sonner": "^1.5.0",
"tailwind-merge": "^2.4.0",
"tailwindcss-animate": "^1.0.7",
"vaul": "^0.9.1"
... that's 38 dependencies and counting! hopefully you get my point

```

**After**

```
"@gee-ui/react": "^1.0.0"
```

### 2. Duplication of the same work in multiple projects

The problem above multiplies over time especially if you use it in multiple projects.

A big inspiration for this library is the React 19 release [ref as a prop](https://react.dev/blog/2024/04/25/react-19#ref-as-a-prop) change. This is a long awaited change especially for someone who uses [react-hook-form](https://react-hook-form.com/) which relies on refs to coordinate form changes. The only thing I dread about these changes is the amount of components I will have to remove `forwardRef` from.

**Before**

![Large Github pull request](https://res.cloudinary.com/michaelgee/image/upload/v1716049756/Screenshot_2024-05-18_at_12.29.00_PM_q8pf9h.png)

**After**

`"@gee-ui/react": "^1.0.0""` -> `"@gee-ui/react": "^2.0.0"`

### 3. Additional opt-in functionality & features

For good reason shadcn keeps most components minimal giving users the flexibility to build on top of them. This library aims to not only provide those minimal components but also opt-in batteries included components as well.
