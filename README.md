This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to deployed site: http://xdg-site.herokuapp.com/



### Before you run any scripts, you must make the following changes to the local machine repository before you enter development mode:

Navigate to the [XDG Technologies Google Drive](https://drive.google.com/drive/folders/1OG_wAkYLTha0v-mMZ2aMpkWTdCMmiQ6J) and download the file titled 'env'. Add this file to the root directory ('/Site') and rename the file to '.env'. Essentially, you are putting a period in front of the filename. This file is important as it serves as the environment variables, which is information that we do not want public on the git. This includes the private information that revolves around the site such as admin properties, server passwords, etc. This file is included in the .gitignore, so you do not need to worry about removing it before committing changes and merging to master. 

## Available Scripts

In the root project directory ('/Site'), you can run:

### `npm run install-all`

This installs all of the necessary packages and dependencies for the site that we implemented. This should be done first as the app will not work without these dependencies.

### `npm start && npm run build`

This will do everything you need to get the site and server up in one command. Below is an explanation of what each of these commands does and when to use them.

### `npm start`

If you make any changes to anything client side or within the client folder (i.e. visual changes to the site etc.)

Runs the app in the development mode.<br />
Open [http://localhost](http://localhost) to view it in the browser. (it defaults to port 80 to allow for heroku deployment )

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

If you make any changes to anything server side or within the server folder, you would want to stop the server (ctrl + C in terminal) and re-run this command to allow your changes.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


All in all, if you make any changes, close the server by doing ctrl+c in the terminal you ran `npm start && npm run build`, save your changes, and re-run `npm start && npm run build` to see your changes.

## Deployment Information (Heroku)

As far as implementing your changes from local machine to the deployed app, there is no extra steps to do so. The deployed app is synced with master, so once you merge any local changes to the master branch, the site will be automatically updated with the changes. 


/////////////Kevin fill in any info you deem as necessary for them to know about the app deployment here//////////////

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
