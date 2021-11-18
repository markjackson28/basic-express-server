# AWS: Cloud Servers

## Current LAB - 16

## Deploy a Node.js server to AWS EC2

Deploy a simple Node.js server to EC2, using Elastic Beanstalk

- Choose a server you’ve built previously
- Option 1: A simple API or Web Server
- Option 2: A socket.io event Hub
- The server should not require a database
- Check in your server to GitHub

Task 1:

- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

Task 2:

- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using `eb deploy`

### Author: Mark Thanadabouth

### Collaborators:

#### Links and Resources
* [GUI Deploy](http://guideploybasicexpressserver-env-1.eba-nmnrikf6.us-west-2.elasticbeanstalk.com/)
* [CLI Deploy](http://basic-express-server-dev.us-west-2.elasticbeanstalk.com/)

### Setup

#### Running App
- `npm start` or `npx nodemon`

Endpoints:
- `/`
> Hello Main Server

#### Tests
- `npm test`


### UML
> <img src="src/UML/401lab02_UML.jpg" width="300"/>

### Reflections and Comments
* Start date (11/16)

### LAB - 02

Name of feature: Deploy a simple Node.js server to EC2, using Elastic Beanstalk

Estimate of time needed to complete: 2 Hours

Start time: 8pm

Finish time: 10pm

Actual time needed to complete: 2 hours
