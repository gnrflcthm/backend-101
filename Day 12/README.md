# **Backend Development 101: Day 12**

## **Middlewares**

-   are functions that have access to the request object, response object and the next middleware function
-   used to intercept requests.
-   can be chained with other middlewares
-   use the `next()` method to call the next middleware
-   you can pass data in middleware by assigning variables thru the `req` or `res` object (eg. `req.username = test`)
    -you can optionally specify paths to match which will execute the middleware only when the requested route matches.
