# HelpMeDev
2021 ETHGlobal Hackathon Project

**Description:** Think of all the side projects you have worked on and maybe put it to the side or never finished because of a technical snag or a frustrating bug. What if you could put out contracts to an ecosystem of other developers to help you finish your project or feature for you. HelpMeDev is a gitcoin for personal projects (i.e. creating contracts so you can pay developers to help you finish your side project, startup, dream app, etc.)

**Tech Stack:**
- Front-End: React
- Auth + Backend: Moralis & Metamask
- Elastic Sidechain: SKALE
- Blockchain: Ethereum
- Deployment: Netlify + SkyNet

**Tools:**
- Ethereum Endpoint: Alchemy
- Smart Contract Functionality: OpenZeppelin
- Local Testing: Ganache
- Testing: Hardhat

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
- UI/UX designs and walkthrough of app (Figma)
- Front-End (React)
- API/Data Layer (Moralis)
- Back-End (Serverless)
- Blockchain (Solidity <> Skale IMA-SDK)
- Testing Prototype (Hardhat)
- Final Presentation with slides


**Timeline:***
- Register project on Hacker Dashboard: https://hack.ethglobal.co/ethonline2021 - B
- ? Project Check-Ins (see: https://ethglobal.notion.site/a919c10f61284d89992bfb8837c60a4d#80f2de6681824accba8ec2be2e4d7746 + Dashboard: https://hack.ethglobal.co/ethonline2021)

- 09.28 - Kickoff + map out roadmap
- 09.30 - Figma mocks
- 10.3 - Front-End mapped out
-   Authenticate (log-in/log-out) - username/password OR wallet(?): Supabase: https://supabase.io/ (PostgreSQL + MetaMask) or AWS: Amplify Framework: https://aws.amazon.com/amplify/ (DynamoDB + Cognito)
-   Create contract
-   Bid on contract
-   Counter-bid on contract
-   Start work w/ milestones?
-   Accept NDA/contract/terms (check-box)
-   Deliver work (success)
- 10.5 - Back-End added to app (server)
-   Where is data saved?
-   What are we storing on localhost vs. the blockchain
-   What APIs are needed to do this?
-   Dual structure of database + ethereum
- 10.7 - Blockchain component added to backend
- 10.10 - Submit ✅

- 10.09 - Sign up to be judged: https://ethglobal.notion.site/a919c10f61284d89992bfb8837c60a4d#2ef75a2bcacc4b21b42754006aa18c67 + Dashboard: https://hack.ethglobal.co/ethonline2021)
- 10.10 - Project due: Sunday, October 10th at 6pm EDT / 3pm PDT / 12pm CET


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
