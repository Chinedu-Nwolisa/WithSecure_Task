# Triangle Calculator API Test Harness

This repository contains a test harness for the Triangle Calculator REST API. The tests are written using typescript.

## Setup
## Install dependencies:

Check if you have Node.js installed on your system by running the following command in the terminal:
    node -v

If Node.js is not installed, download and install Node.js v20.14.0 on your system by following the instructions on the official website:
https://nodejs.org/en/download/

Check if you have npm installed on your system by running the following command in the terminal:
    npm -v

if not installed, download and install npm v10.7.0 on your system by following the instructions on the official website:
https://www.npmjs.com/get-npm


After installing Node.js and npm, run the following commands in the terminal to install the required packages:
    npm install supertest
    npm install --save-dev jest


To run the test individually, use the following command: 
    npx jest version.test.ts
    npx jest triangle.test.ts

To run the whole test suite, use
    npm test
