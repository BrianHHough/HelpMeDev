# HelpMeDev

2021 ETHGlobal Hackathon Project

**Short Description (280 characters:** Think of all the side projects you have worked on and maybe put it to the side or never finished because of a technical snag or a frustrating bug. HelpMeDev is a global & decentralized ecosystem where developers can help developers finish their side projects and side hustles.

**Long Description:** Think of all the side projects you have worked on and maybe put it to the side or never finished because of a technical snag or a frustrating bug. What if you could put out contracts to an ecosystem of other developers to help you finish your project or feature for you. HelpMeDev is a gitcoin for personal projects (i.e. creating contracts so you can pay developers to help you finish your side project, startup, dream app, etc.)

**Participants:**

- Brian Hough
- Saudagar Barde

**Tech Stack:**

- Front-End: React
- API layer: GraphQL
- Blockchain: Solidity (ETH)
- Back-End: NodeJS

**Tools:**

- Ganache
- OpenZeppelin
- Infura
- Testing: Jest/Enzyme

**UX:**

- Amazon marketplace / Fiverr ecosystem of contracts of people looking to hire work
- Prospective dev searches the marketplace....sees work...
- 1. Sign up to do it - the contract issuer agrees to accept you or compares you to other bids
- 2. Counter-bid - provide an offer that's higher/lower, more/less hours
- NDA or contract to contribute code or work on project(?) - "I agree to give code to the buyer"
- You agree to a timeline with milestones
- Work commences
- Work is delivered (if there are delays, then it eats up at final milestone; if you complete it sooner, bonus(?))
- Review system for contract owner and dev

**Action Items:**

- UI/UX designs and walkthrough of app (Figma) - B
- Front-End (React) - B
- API/Data Layer (GraphQL) - B/S
- Back-End (NodeJS) - S
- Blockchain (Solidity) - S
- Testing Prototype - B/S
- Final Presentation with slides(?) - B/S

**Timeline:\***

- ✅ Team formed!
- Register project on Hacker Dashboard: https://hack.ethglobal.co/ethonline2021 - B
- ? Project Check-Ins (see: https://ethglobal.notion.site/a919c10f61284d89992bfb8837c60a4d#80f2de6681824accba8ec2be2e4d7746 + Dashboard: https://hack.ethglobal.co/ethonline2021)

- 09.28 - Team kickoff + map out roadmap
- 09.30 - Figma mocks
- 10.3 - Front-End mapped out
- Authenticate (log-in/log-out) - username/password OR wallet(?): Supabase: https://supabase.io/ (PostgreSQL + MetaMask) or AWS: Amplify Framework: https://aws.amazon.com/amplify/ (DynamoDB + Cognito)
- Create contract
- Bid on contract
- Counter-bid on contract
- Start work w/ milestones?
- Accept NDA/contract/terms (check-box)
- Deliver work (success)
- 10.5 - Back-End added to app (server)
- Where is data saved?
- What are we storing on localhost vs. the blockchain
- What APIs are needed to do this?
- Dual structure of database + ethereum
- 10.7 - Blockchain component added to backend
- 10.10 - Submit ✅

- 10.09 - Sign up to be judged: https://ethglobal.notion.site/a919c10f61284d89992bfb8837c60a4d#2ef75a2bcacc4b21b42754006aa18c67 + Dashboard: https://hack.ethglobal.co/ethonline2021)
- 10.10 - Project due: Sunday, October 10th at 3pm EDT / 12pm PDT / 9pm CET

# Create React App Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
