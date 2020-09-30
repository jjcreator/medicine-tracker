# Medicine tracker

A small app to easily keep track of your medicines. It automatically labels expired / soon to expire items, lets the user sort data by name, expiration date and type and allows for a keyword search in the database. Data is first fetched from a JSON file, but then stored locally and fully editable.

[![medicine tracker](/medicinebox.png)](https://jjcreator.github.io/Medicine-Box/)


## Technologies

* HTML
* CSS
* Javascript

## About

This project was created to practice Javascript. It allows the user to display, sort and filter through a database - in this case a collection of data on kept medicines. The data is fetched from a sample JSON file (hosted on GitHub) at first, but if you edit it, the database is kept in local storage. Therefore you can add and remove items and the app will remember your changes as long as you don't clear your cache. Basic design, with some responsiveness, the goal was just to create a functional desktop app, without spending too much time on design.


#### Main features
* request data from an endpoint or local storage & display it in the app
* sort medicines alphabetically (A-Z, Z-A), by expiration date and by description (also alphabetically)
* search bar feature, allowing for filtering by keyword search
* dynamic color labelling based on the current date:  expired medicines - gray, expiring in 1 month - red, expiring in the next 3 months - yellow
* add / remove item feature - works with local storage
* limited responsiveness - might not look great on smaller screen sizes


## Launch

Hosted on Github Pages - https://jjcreator.github.io/Medicine-Box/

## Sources

Just random data in a JSON file.
