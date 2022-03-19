# Weather-Journal App Project

## Introduction

This project is to build out a travel app which obtains a desired trip location & date from the user, and displays weather and an image of the destination city using information obtained from external APIs.

## Demo

<p><img src="/demo/demo.png" alt="" width="300px"><img src="/demo/mobile.png" alt="" width="200px"></p>

## Overview

This project is very JavaScript heavy with clean and appealing HTML/CSS. I am targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

## Strategy

a. Fetch coordinates from the geonames API using the destination name.

b. Fetch weather data from weatherBit API through the coordinates from the geo API.

c. Fetch the image URL from the Pixabay API.

## Workflows

1. User enters name of the destination, date of departure,date of return.
2. Makes a POST request to the server sending the above details.
3. Now make request to external APIs (geonames, weatherbit and pixabay APIs) from the express server itself.
4. After getting all the above data, I save this in a global object on the express server.
5. Send success response to the client.
6. After receiving the success response, I make another GET request to fetch the trip data saved in the global object on express server.
7. After I get the weather data on the client, I update the UI.

## Tech used

<ul>
    <li>express</li>
    <li>webpack</li>
    <li>service work</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>GitHub</li>
    <li>Jest</li>
</ul>

## Lessons Learnt

<ul>
    <li>express practice</li>
    <li>service work</li>
</ul>

## Future Features

<ul>
    <li>link user's flight ticket</li>
    <li>link user's car rental info</li>
    <li>link user's hotel info</li>   
</ul>
