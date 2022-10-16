# **Backend Development 101: Day 10**

## **MongoDB Shell Commands**

-   `show dbs` - shows all available databases
-   `use <Database Name>` - uses the specified databser
-   `show collections` - shows all available collections under the specified database
-   `db.[collectionName].find()` - retrieves documents from a collection
-   `db.[collectionName].insertOne()` - creates a document in the collection. You can insert multiple documents using the `.insertMany()` command
-   `db.[collectionName].updateOne()` - updates a document in the collection. You can update multiple documents using the `.updateMany()` command
-   `db.[collectionName].replaceOne()` - replaces a document completely
-   `db.[collectionName].deleteOne()` - deletes a document from the collection. You can delete multiple documents using the `.deleteMany()` command

## **MongoDB Query Operators**

-   ### **MongoDB Comparison Operators**

    -   `$eq` - equal
    -   `$gt` - greater than
    -   `$gte` - greater than or equal
    -   `$in` - matches if value is in an array of values
    -   `$lt` - less than
    -   `$lte` - less than or equal
    -   `$nin` - matches if value is NOT in an array of values

-   ### **MongoDB Logical Operators**

    -   `$and` - matches condition of both clauses
    -   `$not` - inverts the clauses
    -   `$nor` - matches conditions that do not match both clauses
    -   `$or` - matches conditions that match either of the 2 clauses

-   ### **MongoDB Element Operators**

    -   `$exists` - matches document that have a specified field
    -   `$type` - matches a document if the field is of a specified type

-   ### For a list of all available operators and documentations please visit the [Official MongoDB Shell Documentation](https://www.mongodb.com/docs/v6.0/)

## **Mongoose**

-   is an Object Data Modelling (ODM) Library for MongoDB and NodeJS
-   manages relationships between data, provied schema validation, and translates between objects in code and the representation of those objects in MongoDB
-   ```
    npm i mongoose
    ```

## **Mongoose Syntax**

-   To connect to a MongoDB Database:
-   ```
    const mongoose = require("mongoose")
    mongoose.connect("DATABASE_URL")
    ```
- You can read more on how to use Mongoose at its [Official Documentation](https://mongoosejs.com/docs/index.html)

## **Mongoose Models**

-   `mongoose.model`
-   are classes defined using Mongoose which represent the structure of a document in a collection
-   before you can interace with a model, you first need to define its schema
-   allows us to perform CRUD operations

## **Mongoose Schema**

-   `mongoose.Schema`
-   is used to define the structure of a model
-   ### **Schema Types**
    -   **String**
    -   **Number**
    -   **Date**
    -   **Buffer**
    -   **Boolean**
    -   **Mixed**
    -   **ObjectId**
    -   **Array**
    -   **Decimal128**
    -   **Map**