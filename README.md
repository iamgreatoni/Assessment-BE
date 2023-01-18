# This is an Assessment test Repo.

# Assessment:

Create 2 separate services (Customer service and Order service) that should communicate seamlessly via a Microservices architecture. 

# Procedure:

The Customer MS should receive customer details upon sign up. Authentication would be based on details in the Customer MS.
Only a valid Customer should be able to Create an Order on the Order MS by passing a JWT token via the header for validation.

Expected Columns/Fields for Order MS:

orderId,
customerId,
itemId (Could be a dummy Id)
price 
dateCreated 
timeCreated
orderStatus (orderStatus = 'placed' by default)

Status of the Order should be adjustable via endpoint.

Note:
The below endpoints would be expected:

Create Customer Endpoint 
Customer Login Endpoint 
Create Order endpoint 
Update Order status endpoint 

	. Use Node.js/Express.js as the backend technology.

	. All endpoints must be probably secured with JWT
	. Use docker and docker-compose to build the application locally
	. Prepared statement must be used 
	. Stored Procedure would be an added advantage 
	. Push your update to your Git repo and share the Repo as response to your assessment

Instructions:

	. Ignore the test box on this assessment portal. You can use any of your desired IDE (E.g VSCode) for the custom question.
	. Before the allotted time elapses, make sure to copy the technical question and paste on your code editor. Assessment is to be completed and sent in within 48hours of receipt of test invite. 
	. Reply to the email you were sent earlier inviting you to an assessment with links to the solution you built based off of the assessment questions on your repo.


# ACCESSING THE PROJECT.

### Env Variables

Create a .env file in each root directory `./customerService` and `./orderService` and add the following

```
NODE_ENV = development
PORT = 5001 for the ./customerService
PORT = 5002 for the ./orderService
MONGODB_URI = your mongodb uri
JWT_SECRET = 

```
### Running locally

Open two instances of your terminal.
* `cd customerService`
* `npm install`
* `npm run dev`

* `cd orderService`
* `npm install`
* `npm run dev`

This project requires a MongoDB database running locally. Modify the configuration `connectDB` in `/config/connectDB.js`

It will allow connection to the MongoDB database on the start of the application.