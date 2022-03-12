Introduction
https://happysonia.github.io/travelApp/

This project is to build out a travel app that,obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. 

Here is the workflow of the application-

1.User enters name of the destination, date of departure, [date of return]
2.The client makes a POST request to the server sending the above details.
3. Now  make request to external APIs (geonames, weatherbit and pixabay APIs) from the express server itself.

Strategy:

a. Fetch coordinates from the geonames API using the destination name.

b. Fetch weather data from weatherBit API through the coordinates from the geo API. 

c. Fetch the image URL from the Pixabay API.

4. After getting all the above data, I save this in a global object on the express server.
5. Send success response to the client.

6. After receiving the success response, I make another GET request to fetch the trip data saved in the global object on express server.

7. After I get the weather data on the client, I update the UI.
