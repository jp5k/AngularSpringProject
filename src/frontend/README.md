# Frontend

There are a few prerequisites:-
You'll need npm (Node Package Manager) which will be installed with node. 
To install node pickup a version from [node](https://nodejs.org/en/download/).
I used the long term release, but you can probably use whichever version you like as its npm we're really after, so go ahead and install this now.

Then use npm to install  [Angular CLI](https://github.com/angular/angular-cli). 
From a command line type `npm install -g angular-cli`.
This will globally install angular-cli which is used to do the admin, start the server etc for the frontend.

When you first download the project you will need to run `npm install` to install the required node modules to run the project. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Writing an Angular2 App ##

The structure of the app seems follows the sections of the page. Each section will be responsible for a part of the functionality, eg login, address, etc.
Initially I started writing very generic basic components that passed in a lot of data, but I realised that's not the angular way. There's no point writing a generic input component, there's already a generic input component, its the input tag. Write the NewUser component which is comprised of various input controls, validation and a submit that pulls together the functionality of getting a new user on to the system. 
