# GitHub Seacher
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Solution Details:
 
 Application search:
 - Handled the search keypress actions using the debouce method(lodash library).
 - In each text change application validates the keyword existance in local search index(Redux Container).
 
Search Result:
 - Based on the search type, sub component will render the information about the user or repo.


Search cases handled

-   INIT 
-   LOADING
-   SEARCH COMPLETED
-   ERROR

 Reducers(States):
 - Two reducers maintained in the application, one to maintain the application search status and another one for the local search-index container(redux-persist).