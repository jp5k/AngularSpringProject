# README #

### What is this repository for? ###

* This is a seed project for Angular2 with a Spring MVC backend using Maven as the build file.
  
* Version 1.0.0

### How do I get set up? ###

* You'll need an IDE for both frontend and backend, Intellij or Spring Tool Suite(STS) are both suitable, however will involve a cost. Intellij Communit Edition does the java editing but not Typescript, the full edition does everything, but is £11.90 a month, or £120 a year. STS needs a TypesScript plugin, the Genuitec one isn't free either. Errol is testing the free one.
* For frontend development you need to install node and angular-cli.
* For backend development you'll need a backend database and the correct database drivers and connections strings. I've been using MySql and the jdbc.properties file has the settings for that. You'll also need a web container to deploy to, I've been using Tomcat and your IDE should help you deploy to that.

### How can I see its working ###

* To run the backend you need to get the compiled java code into a web container. Your IDE could have a way to do this, or you could use the maven build file to achieve the same thing.
* When developing the frontend, you need to start the angular server running. This runs at `http://localhost:4200` and will watch for your code changes and automatically re-deploy and run your code when you make changes.
* There is a list of scripts in `package.json`, so you could open a terminal and type `npm start` to run the start script, or you could use the code shown in `start` directly to get the angular server running.
* The project root for the webapp is `/example`, so assuming you've deployed to a Tomcat server you should see stuff at `http://localhost:8080/example/`
* There's nothing served at the webapp root, but there's a static page at `http://localhost:8080/example/admin` - this is the `admin.jsp` page under `webapp/WEB-INF/views`. 
* Webservices can be viewed by putting the url straight into the browser, eg `http://localhost:8080/example/getBackendData`

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

#### Out of the box you will get ####
* Angular2 frontend and a Java8 backend that will supply json data as webservices.
* An index.jsp - you can serve static content via jsp pages, this is referenced in the dispatcher-servlet.xml
* An angular2 frontend with an "example" module in src/modules. The module gives you a couple of ideas of how you can get data into the frontend.
* To develop in angular2 you will need an ide to handle typescript. At the command prompt 

* A java backend in src/backend


### Who do I talk to? ###

* stew.dunlop@ecclesiastical.com

### What's Next ###

* Add unit tests for frontend, and E2E tests
* Add gradle build script
* Document how to get running in STS
* Get a global css - responsive
    Angular responsive themes
* Add users and security module for secure login
* Add CRUD for example data
* Create core components
    Table
    Drop down list from a dbase read that can be refreshed
    Input box with label, validation, help tip
    