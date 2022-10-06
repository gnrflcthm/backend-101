# **Backend Development 101: Day 7**

## **Bootstrap**

-   [Bootstrap](https://getbootstrap.com/)

## **EJS Partials**

-   Way to add templates to another template.
-   To add another template to a template, you can use
    ```
    <%- include("relative_path_to_template") // eg. components/navbar %>
    ```

## **Defining Restful Routes**

-   **GET**
    -   used for retrieving information
    -   data is sent view query string
    -   information is visible in the url.
-   **POST**
    -   used to write or create
    -   data is not visible in the url

## **Express Middlewares**

-   allows us to intercept requests
-   allows us to add extra data to the request or response before being receiveed by the handler

## **POST Requests in Express**

-   you can access the data passed in a post request using `req.body`
-   `req.body` is undefined by default and needs to be parsed using middleware according to how they are formatted.

    ```
    // For JSON Data
    express.json()

    // For Form Data
    express.urlencoded()
    ```

## **REST API**

-   Representational State Transfer (REST)
-   REST API is an API that follows the architectural style, rules, and guidelines of REST
