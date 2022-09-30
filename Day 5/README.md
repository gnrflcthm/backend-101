# **Backend Development 101: Day 5**

## **Express**

-   `app.set(key, value)` - used to set a certain property to be used in configuring the server
-   `response.render(file, options)` - renders file to client

## **Configuring Express With EJS**

1.  Initialize a project

    ```
    npm init
    ```

2.  Install express

    ```
    npm i express
    ```

3.  Create entry file

    ```
    touch index.js
    ```

4.  Inside `index.js` import `express` and create express app

    ```
      const express = require("express")
      const app = express()

      app.listen(3000, () => {
          console.log("Listening at PORT 3000)
      })
    ```

5.  Specify Express to use EJS

    ```
    const app = express();
    app.set("view engine", "ejs");
    ```

6.  Install EJS

    ```
    npm i ejs
    ```

7.  Create "views" directory

    ```
     md views
    ```

8.  Set the "views" directory in express

    ```
     // import path
     const path = require("path")
     app.set('views', path.join(__dirname, '/views'))
    ```

## **Path**

-   module built-in with node used for handling file paths

## **EJS**

-   Express Templating Engine
-   Embedded JavaScript
-   To pass data to templates, you can pass a second argument to the `res.render` method which takes in an object where you specify key-value pairs. The key can be used in the template to access the corresponding value.
    ```
    // In express server
    const number = 2;
    res.render("templatename", { sumNumber: number });
    ```
    ```
    // In template
    <%= sumNumber %>
    ```

## **EJS Tags**

-   `<%` &nbsp; for control-flows (looping, conditionals, eg.). doesn't produce any output
-   `<%=` &nbsp; for outputting value to the template
