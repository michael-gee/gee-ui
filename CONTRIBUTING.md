# Contributing

Before getting started, it is important to have a basic understanding of how to contribute to open-source. The main question to answer here is: "If I don't have write permissions to this repository, how do I contribute?"

### 1a Create Your Fork

With the assumption that you are new to the project and do not have write permissions to this repository, you will need to make a copy of it which is your own by forking it. This can be done by clicking the "Fork" button in the top right of the repository [homepage](https://github.com/michael-gee/gee-ui).

Github's official documentation: [Fork a repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)

### 1b Clone Your Fork

Next simply `git clone` into your local machine using

Github's official documentation: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### 1c Install Dependencies

- Confirm you have Node version `22.12.0` and NPM version `10.2.3` installed and active
- `npm ci` from the root directory of the project
- `npm run build` to run project build
- `npm run dev` to run local Storybook

## Testing the production build

1. `npm run build`
2. `npm pack`
3. Set up an external next, vite, etc react app else where and install the package into the project
   3a. `npm install /path/to/gee-ui-react-[current-version-number].tgz`
4. Follow steps in [installation](https://www.gee-ui.com/?path=/docs/installation--docs) guide
5. Import and test your changes
