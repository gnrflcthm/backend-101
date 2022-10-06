# **Backend Development 101: Day 6**

## **Serving Static Files**

-   Static files are additional files that is accessible to the client side.
-   You can use the `express.static` built-in middleware.
-   ```
    app.use(express.static("path_to_static_assets"))
    ```