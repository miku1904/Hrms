# Getting Started with HRMS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Always Take a new pull and rebase you branch with origin.

- We Are using a TypeScript for this Project.
  You need to Crate a Types/Interfaces for every exportable components.

- For Styles we are use modules and scss Structure.
  All Components or pages lavel styles need to Create as module file.
  with the following name `componentName*.styles.module.scss`

- `index.tsx` or `index.ts` is default export file for the it's current directory.
  you have to write into this file if anything need to be export from the directory.

## Project Structure and Directory

### Components

All Generic component will be created into `src/Components` directory.
Component directory Structure

1. Create a directory with the name as Component
2. Create a new file into Component directory (`index.tsx` or `componentName*.tsx`)
3. Create a new file for the Types/Interfaces for the following Component.
4. Create a style file for Component if need. (Like `componentName*.styles.module.scss`)

### Pages

All Pages which is part of Application/Project will be created into `src/Pages` directory.
this Pages are directly display as user interface.

1. Create a directory with the name as Page
2. Create a new file into Page directory (`index.tsx` or `pageName*.tsx`)
3. Create a new file for the Types/Interfaces for the following Page.
4. Create a style file for Page if need. (Like `pageName*.styles.module.scss`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\n
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\n
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\n
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\n
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\n
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
