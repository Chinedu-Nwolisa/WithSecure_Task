# Triangle Calculator API Test Harness

This repository contains a test harness for the Triangle Calculator REST API. The tests are written using typescript.

## Setup

### 🖐 Requirements

| Dependency     | Recommended | Minimum |
| -------------- | ----------- | ------- |
| Node           | 20.x        | 18.x    |
| npm            | 10.x        | 8.x     |
| git (optional) | 2.44.x      | 1.7.x   |

Please refer to the <a href="https://nodejs.org/en/download/">Node.js</a> and <a href="https://www.npmjs.com/get-npm">npm</a> page for more information. NPM versions installed by default with Node.js are supported.

### Download project:

Download the project to your computer:

- Using git clone

```bash
git clone https://github.com/Chinedu-Nwolisa/WithSecure_Task.git
```

**or**

- Download project zip file using the link: https://github.com/Chinedu-Nwolisa/WithSecure_Task/archive/refs/heads/main.zip. Remember to unzip the file.

### Install dependencies:

To install all dependencies needed to run the test using the command in the root directory of the project.

```bash
npm install
```

## Testing

To execution all tests, run the command in the root directory of the project after installing the dependencies.

To run the whole test suite, use

```bash
npm test
```

To run the test individually, use the following command:

```bash
npm run test:version # version only tests
npm run test:triangle # triangle only tests
```
