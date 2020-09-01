# Medicine tracker

Medicine tracker lets you keep track of your medicines. It automatically labels expired / soon to expire items, lets the user sort data by name, expiration date and type and allows for a keyword search in the database. Data is stored externally in a JSON file and is not editable.

[![medicine tracker](/medicinebox.png)](https://jjcreator.github.io/Medicine-Box/)


## Technologies

* HTML
* CSS
* Javascript

## About

A small app created to practice Javascript. It allows the user to display, sort and filter through a database - in this case a collection of data on kept medicines. As this is front-end only (no local storage or anything), adding and removing items does not have a permanent effect on the database. The database itself is just a JSON file hosted on Github filled with sample data. Very basic design, limited responsiveness, the goal was just to create a functional desktop app, without spending too much time on design.


#### Main features
* request data from an endpoint & display it in the app
* sort medicines alphabetically (A-Z, Z-A), by expiration date and by description (also alphabetically)
* search bar feature, allowing for filtering by keyword search
* dynamic color labelling based on the current date:  expired medicines - gray, expiring in 1 month - red, expiring in the next 3 months - yellow
* add / remove item feature - works only for the current session
* limited responsiveness - might not look great on smaller screen sizes


## Launch

Hosted on Github Pages - https://jjcreator.github.io/Medicine-Box/

## Sources

Just random data in a JSON file.

