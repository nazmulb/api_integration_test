# Node Microservice & Api Integration Testing Framework

[![CircleCI Build Status](https://badgen.net/circleci/github/nazmulb/api_integration_test)](https://circleci.com/gh/nazmulb/api_integration_test)
[![GitHub Last commit](https://badgen.net/github/last-commit/nazmulb/api_integration_test)](https://github.com/nazmulb/api_integration_test)
[![GitHub commits](https://badgen.net/github/commits/nazmulb/api_integration_test)](https://github.com/nazmulb/api_integration_test/commits/master)
[![GitHub stars](https://badgen.net/github/stars/nazmulb/api_integration_test)](https://github.com/nazmulb/api_integration_test)

This is a node microservice using `express`, `sequelize`, `jwt` & `mysql` and also an api integration framework using `jest` & `supertest`.

### Overview:

We need the following to have a node microservice and api integration framework:

- [Express JS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/master/manual/getting-started.html)
- [Jwt](https://jwt.io/)
- [Jest](https://jestjs.io/en/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [jest-html-reporter](https://www.npmjs.com/package/jest-html-reporter)
- [Circle CI](https://github.com/nazmulb/circleci)
- [Docker](https://github.com/nazmulb/docker)

### Setup:

Please clone this repo and run the following commands:

```sh
git clone https://github.com/nazmulb/api_integration_test.git
cd api_integration_test
npm i
```

Please run your MySql server and run the following command:

```sh
npm run db && npm run migrate && npm run seed
```

### Running App:

```sh
npm run start:dev
```

### Running Tests:

```sh
npm test
```

### Test Coverage Report:

```sh
npm run test:coverage
```

<img alt="Test Coverage Report" src="https://raw.githubusercontent.com/nazmulb/api_integration_test/master/images/coverage1.png" width="900px" />

<img alt="Test Coverage Report" src="https://raw.githubusercontent.com/nazmulb/api_integration_test/master/images/coverage2.png" width="900px" />

### Test Report:

<img alt="Report" src="https://raw.githubusercontent.com/nazmulb/api_integration_test/master/images/report.png" width="900px" />

### CI/CD using Circle CI:

<img alt="CI/CD using Circle CI" src="https://raw.githubusercontent.com/nazmulb/api_integration_test/master/images/circleci.png" width="900px" />