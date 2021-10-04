# Moralis

## What we used it for:

- Authentication using WalletConnect
- Bridge for MetaMask
- Create user profiles, for notifications, email communications, and allow users to customize their profile.

## Steps to integrate:

#1: Installed web3-provider package with npm: `npm install @walletconnect/web3-provider`

- see: [docs page on npmjs.com](https://www.npmjs.com/package/@walletconnect/web3-provider)
- see: [docs on Moralis pages](https://docs.moralis.io/moralis-server/users/crypto-login)

<br></br>
#2: Create an account and server instance on Moralis.io: https://admin.moralis.io/register

![image 1](./screenshots/Moralis-dashboard-1.png)

- Clicked the green button to create an instance: there are 3 options: Mainnet Server, Testnet Server, and Local Devchain Server

![image 2](./screenshots/Moralis-dashboard-2.png)

- we chose Testnet because it's easier to work with others in a shared Testnet than locally with a devchain (Ganache).

![image 3](./screenshots/Moralis-dashboard-3.png)

- it will take a couple minutes to load, but it will look like this once it's built
- click on the "more" button on the right of "Testnet" and then there will be a dropdown. Click on "Dashboard" to go to the next screen where we'll manage the database and users.

![image 4](./screenshots/Moralis-dashboard-4.png)
In the dashboard, you will see no data yet, because we haven't added anything yet :)

Now we want to add auth and log-in capabilities for our users in our app with these docs: https://docs.moralis.io/moralis-server/users/email-login

We'll use the `react-moralis` package for customized React functionality for Moralis: https://www.npmjs.com/package/react-moralis - we will run: `npm install react react-dom moralis react-moralis`

First, we will go to the `index.js` file and add in the Moralis components, as per the [docs](https://www.npmjs.com/package/react-moralis). We get the `appId` and `serverUrl` from the moralis dashboard when you click on details about the server instance.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <MoralisProvider appId="XXXXXXX" serverUrl="XXXXXXX">
    <App />
  </MoralisProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
```

Next, we'll call the hooks inside of the component of our SignIn page:

<br></br>
Create and use cloud functions - a secure way to process data
https://docs.moralis.io/moralis-server/cloud-code/cloud-functions#defining-cloud-functions
and also:
https://docs.moralis.io/moralis-server/cloud-code/cloud-functions
