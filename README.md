# Full-Stack Developer Bootcamp Module 24 - Project 03: Library Manager

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Generator](#generator)
- [Badge](#badge)
- [Credit and Source Code](#credits-and-code-source)
- [Related Efforts](#related-efforts)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [Render App Deployment](#render-app-deployment)
- [Application Screenshots](#application-screenshots) 


## Description

The Library Manager is a browser-based application that permits Users to enter and store individual Content Records of materials held by the User, accessible to all Users of the site. Content may include Books, Periodicals, Essays, and User-generated Posts. As developed, the Library Manager is accessible through a public web deployment (e.g., Render) and may also be run as a local instance, specific to each accessing computer.

Content Records are held as structured data within a MongoDB document database and, consequently, may be accessible through the Web, if publicly deployed, and through a local instance (using a local MongoDB database).

The Library Manager source code is published on GitHub, and may be cloned to individual User computers to instantiate local versions.

Content Records are entered through a dedicated  New Content Form, while the app Dashboard (Homepage) aggregates and presents saved Content Records.

The Library Manager features a sequential, timeline-based view of Content Records.

Individual Content Records may be viewed from a Record page, and edited or deleted from database storage.

The app utlizes a React frontend, including Forms to ingest, and manage User Input; Nodejs Modules (Express) to save (Post), edit (Put), remove (Delete) Content Records to a remote or local MongoDB database; React to dynamically update app pages (Components) with Content Records; GraphQL to query and report Content Records; and CSS to style to site. 

The Node Module, JSON Web Tokens (JWT) is used to manage User accounts and access, hashing and securely storing User login credentials.

Because Content Records are stored within a MongoDB database, either remote or local, Content Records will persist across User sessions on individual, hosting computers, or remote hosting sessions, and will be visible to all Users of the remote and local App instances.


## Installation

The Library Manager source code may be downloaded from its GitHub repository, and run directly by a hosting computer, or through a Web hosting service (e.g., Render, Heroku).

No Installation of the Library Manager itself is required; the app is fully browser-based, accessed through any modern browser that supports modern web technologies (e.g., React, JavaScript (Nodejs), Express, JWT).

However, local computers must hold an installation of Node.js, Express, React and MongoDB in order the run local instances of the Library Manager application.


## Usage

The Library Manager is intended for use by one or more Users to record Content Records that will be held remotely and locally, and persist across multiple sessions. 

All Users of the Library Manager on a remote or local instance will have full visibility to all Users' Content Records.


## Credits and Code Source

React components, Database and Route-management Code was substantively outlined and contributed to by Program Tutors, who provided recommentations on the effectively mapping data returned from the App database to use at the presentation layer (Handlebars), and to manage CRUD operations.

Additional Code, where referenced from a third-party Source, is noted in Comments accompanying the relevant Code lines.


## License

Copyright <YEAR> <COPYRIGHT Chris Milazzo>


MIT License

Copyright (c) 2024 MeanderingBrook

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Badges

N / A


## Features

N / A


## How to Contribute

N / A


## Tests

Return value and generated content testing and data evaluation, see archive.js ('archive' Folder)

`console.log` output of specification data specific to User requirements; see server.js, index.js, MainRoute, etc.


## GitHub Repository Location (HTTPS)

https://github.com/MeanderingBrook/24_Project-03_Library-Manager.git


## Render App Deployment

https://two4-project-03-library-manager.onrender.com


## Application Screenshots

![Library Manager: React App Homepage - Screenshot 01](./client/public/assets/images/Library-Manager_React-App_Screenshot-01_Homepage.png?raw=true "Library Manager: React App Homepage")

![Library Manager: React App Content Record Creation - Screenshot 02](./client/public/assets/images/Library-Manager_React-App_Screenshot-02_Content-Record-Creation.png?raw=true "Library Manager: React App Content Record Creation")

![Library Manager: React App Content Record Edit - Screenshot 03](./client/public/assets/images/Library-Manager_React-App_Screenshot-03_Content-Record-Edit.png?raw=true "Library Manager: React App Content Record Edit")

![Library Manager: React App Content Record Search - Screenshot 04](./client/public/assets/images/Library-Manager_React-App_Screenshot-04_Content-Record-Search.png?raw=true "Library Manager: React App Content Record Search")

![Library Manager: React App User Registration - Screenshot 05](./client/public/assets/images/Library-Manager_React-App_Screenshot-05_User-Registration.png?raw=true "Library Manager: React App User Registration")

![Library Manager: React App User Login - Screenshot 06](./client/public/assets/images/Library-Manager_React-App_Screenshot-06_User-Login.png?raw-true "Library Manager: React App User Login")