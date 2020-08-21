<div align="center">👨🏼‍💻👨🏼‍💻👨🏼‍💻 AVAILABLE FOR HIRE 👨🏼‍💻👨🏼‍💻👨🏼‍💻</div> |
------------ |
I am looking for work! If you like what you see here or if you just like the cut of my jib, and you'd like to maybe hire me, please feel free to contact me :octocat: |

# info-board

A custom information board.

This is a project I have long been wanting to get started; so here I am. Eventually, I hope to use this project to replace the DAKboard (https://dakboard.com/) application I currently have running on a Raspberry Pi Zero W in the Mud Room in my home. This project is currently being built in React, but I'm also planning to build it in Svelte once I'm done (for fun and education). I also plan to write a backend component (probably using Python) to handle the calls to the various APIs, do some caching, etc..

---

## Planned Features (so far)

### Date & Time

- [x] Date
- [x] Time

### Weather

- [ ] Wind
- [x] Sunset & Sunrise
- [x] Current Temp
- [x] Feels Like Temp
- [x] Current Conditions
- [ ] Three-hour Forecast
- [ ] 5-day Forecast
  - [ ] Day
  - [ ] Condition
  - [ ] Percipitation
  - [ ] High & Low Temps
- [ ] Weather Alerts

### Calendar Integration

- [ ] Google Calendar
- [ ] Microsoft Calendar
- [ ] Configurable UI

### Google Nest Integration

- [ ] Thermostat
  - [ ] HVAC Status
  - [ ] Temperature
- [ ] Camera Feeds

### Web Speech API Integration

- [ ] Use your voice to navigate screens / change the display

### Admin Section

- [ ] Login/Auth Functionality
- [ ] Get location by Geolocation API or manually entering it
- [ ] Other customizations

### Making It Look Pretty

- [ ] An actual layout
- [ ] Modular layout options
- [ ] Animated weather icons (?)
- [ ] Animated weather effects (?)

---

## Basic Setup (so far)

1. Get a OpenWeather One Call API Key (free)
   1. https://openweathermap.org/price
   2. https://openweathermap.org/api/one-call-api
2. Create a `.env.development.local` file in the root directory of the project and add the following:

```
   REACT_APP_WEATHER_DEFAULT_API_KEY=[YOUR_KEY_HERE]
```

3.

```bash
npm install && npm start
```

---

## Typical `create-react-app` Boilerplate Readme Content

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
