



                                                    CSS GRID WORKSHOP

### 1. Intro
The most powerful layout system in CSS! 

2 - dimensional system (both columns and rows)

In comparison to flex - which is mainly 1 - dimensional system (either col or row)

The order of the items doesn't matter (same as flexbox) => making re-arranging items easy (especially for responsive)

Firefox has a better debugging tool for now. it's worth checking it out!

Support from all major browsers (complete support for our project 🔥)


## Motto: The future is now, old man! 

-----

### FR unit (fraction)
1fr = is taking the empty space as one fraction
Similar to %, but it doesn't add up the grid gap space.

### Repeat fn
Takes two args: how many times you would like to, and what would you like to repeat

### Spanning
Acts on grid children (grid-items). Spans on cols / rows. If the spanning doesn't fit horizontally it will jump on next row.

### MinMax(min, max)
Takes two arguments, pretty explanatory, will not go lower than min or higher than max.

### Template Areas
Create explicit names for pieces of the grid. Really useful in responsive terms for moving content around.

### Alignment
justify-* are for ROW axis

align-* are for COLUMN axis

The properties themselves are similar to what Flexbox offers

----- 

## More resources
https://css-tricks.com/snippets/css/complete-guide-grid/


---------------------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
