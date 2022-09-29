# **Backend Development 101: Day 3**

## **Nodemon**

-   a tool used for automatically reloading the server whenever the contents of a file within the project is changed
    -   ```
        npm i -g nodemon
        ```

## **express Request Object**

-   contains all the information about a request

## **express Response Object**

-   contains all the information and methods for returning a response to the client

## **Routing with Express**

-   routing is matching requests and sending an appropriate response
-   `.use()`
-   `.get()`
-   `.post()`
-   **Direct Match Routes**
    -   `/abcd` - matches `abcd`
    -   `/ab?cd` - matches `acd` or `abcd`
    -   `/ab+cd` - matches `abcd` or `abbbcd`
    -   `/ab*cd` - matches `abcd` or `abfdjkfcd`
    -   `/ab(cd)?e` - matches `abe` or `abcde`
    -   `/a/` - matches all routes with `a`
    -   makes use of RegEx to match routes
-   **Paremeterized Routes**

    -   uses `:` before the pathname
    -   this turns into parameters that can be access in the request object using `request.params`
    -   Example:
    -   ```
        app.get("/r/:subreddit", (req, res) => {
            const {subreddit} = req.params;
            res.send(`<h1>Browsing the ${subreddit} subreddit.</h1>`);
        })
        ```

-   You can use the `*` route to match all routes. Useful for handling unspecified paths.

## **Query Strings**

-   the portion of the URL which begins from the `?`
    -   eg. localhost:3000/test`?q=testquery`
-   can be accessed using `req.query`. Express automatically parses individual queries as key:value pairs

## **Dynamic HTML using Templating**

-   allows us to define preset "pattern" for a webpage, that we can dynamically modify.
-   `EJS` - a JavaScript template engine
