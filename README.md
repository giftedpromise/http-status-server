﻿# http-status-server

Project Overview:

This project by group-10 demonstrates an HTTP server using Express.js that returns JSON data with various HTTP status codes. It includes routes that return success, error, and "not found" responses with appropriate status codes. The server is built using Express.js.

# Features

Routes with HTTP Status Codes:

200 OK: Success responses

404 Not Found: Return a "Page not found" message when the route does not exist

500 Bad Request: Error responses for invalid data

JSON Responses:

Each route returns a JSON response with a status message indicating the outcome of the request.

# Project Structure

index.js: Main entry point for the server using Express.js.

.gitignore: contains node_modules.

package.json: Contains project metadata and dependencies.

# API Endpoints
GET /success

Response:

json
{ "status": "success", "message": "Welcome to the home page!" }

GET /error

Response (500 Bad Request):

json
{ "status": "error", "message": "Bad request. Something went wrong." }

GET /

Response (404 Not Found):

json
{ "status": "error", "message": "Page not found" }

.gitignore
The http module implementation is excluded from version control to prevent unnecessary files from being tracked. You can add additional files to .gitignore as needed.

# .gitignore
node_modules/

http/

Comments on Status Codes:

200 OK: Indicates that the request has succeeded. 
The response body will contain the data requested, or a message indicating that the operation was successful.

404 Not Found: This code is used when the requested route or resource could not be found on the server.
It is important to provide a meaningful response, such as a "Page not found" message.

500 Error Request: This status code indicated that there was an error in the process.


# Code Snippet: Using Express.js

# Contribution
This project was contibuted by Promise Nwankwo, Abraham Samuel Oluebubechukwu, Hammed Ahishat Oluwatoyin.
