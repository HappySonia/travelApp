Introduction

This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. Given that this is the Capstone project, it's highly encouraged for you to go above and beyond, adding additional functionality and customization to truly stand out with a project you are proud to have at the top of your portfolio!

Here is the workflow of the application-

1.User enters name of the destination, date of departure, [date of return]
2.The client makes a POST request to the server sending the above details.
3. Now you'll make request to external APIs (geonames, weatherbit and pixabay APIs) from the express server itself.

You fetch the details in the following order.

a. Fetch coordinates from the geonames API using the destination name.

b. Fetch weather data from weatherBit API from the coordinates you get from the previous API. Here is the documentation.

c. Fetch the image URL from the Pixabay API.

4. After you get all the above data, you'll save this in a global object on the express server (Just as you did in your previous project)

5. Send success response to the client.

6. After receiving the success response, you'll make another GET request to fetch the trip data saved in the global object on express server.

7. After you get the weather data on the client, you update the UI.
