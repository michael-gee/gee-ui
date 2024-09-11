# @gee-ui/react

React (TypeScript) component library which serves as a wrapper library around [shadcn/ui](https://ui.shadcn.com/). Unlock the same ease of use and customization for all components but with a single source of truth library.

shadcn has been the go-to choice for a ton of React applications, after using it within multiple projects I came across 3 problems which this library aims to solve:

### 1. Dependency management

There are a lot of times where you have to install dependencies like [Radix](https://www.radix-ui.com/) to get the components working end-to-end. These dependencies can quickly add up leaving you with the responsibility to maintain these dependencies over time. Instead of maintaining 10+ dependencies wouldn't it be nice to just maintain one?

**Before**

```
"@radix-ui/react-accordion": "...",
"@radix-ui/react-alert-dialog": "...",
"@radix-ui/react-aspect-ratio": "...",
"@radix-ui/react-avatar": "...",
"@radix-ui/react-checkbox": "...",
"@radix-ui/react-collapsible": "...",
"@radix-ui/react-context-menu": "...",
"@radix-ui/react-dialog": "...",
"@radix-ui/react-dropdown-menu": "...",
"@radix-ui/react-hover-card": "...",
"@radix-ui/react-label": "...",
"@radix-ui/react-menubar": "...",
"@radix-ui/react-navigation-menu": "...",
"@radix-ui/react-popover": "...",
"@radix-ui/react-progress": "...",
"@radix-ui/react-radio-group": "...",
"@radix-ui/react-scroll-area": "...",
"@radix-ui/react-select": "...",
"@radix-ui/react-slider": "...",
"@radix-ui/react-slot": "...",
"@radix-ui/react-switch": "...",
"@radix-ui/react-tabs": "...",
"@radix-ui/react-toggle": "...",
"@radix-ui/react-toggle-group": "...",
"@radix-ui/react-tooltip": "...",
"clsx": "...",
"cmdk": "...",
"cva": "...",
"embla-carousel-react": "...",
"input-otp": "...",
"lucide-react": "...",
"react-day-picker": "...",
"react-resizable-panels": "...",
"sonner": "...",
"tailwind-merge": "...",
"tailwindcss-animate": "..."
... that's 36 dependencies and counting! hopefully you get my point

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
