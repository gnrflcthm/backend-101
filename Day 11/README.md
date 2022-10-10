# **Backend Development 101: Day 11**

## **Mongoose Instance Methods**

-   allows us to add methods that can be called by every instace of a model
-   you can add instance methods by using `schema.methods.methodName`
-   you have to use `function() {}` instead of `() => {}` to avoid having problems with binding the `this` keyword

## **Mongoose Static Methods**

-   allows us to add methods that can be called directly from the model itself
-   you can add static methods using `schema.statics.methodName`

## **Mongoose Virtuals**

-   this are properties that can be get/set but are not persisted in the database
-   useful for creating properties that are derived from other properites without having to store them in the database
-   you can defined virtuals using `schema.virtuals.get()` or `schema.virtuals.set()`

## **Mongoose Middleware**

-   also called `pre` and `post` hooks
-   usually executed before or after an execution
-   allows us to perform an action before or after another action has been executed
-   you can define them using `schema.pre(action, callback)` or `schema.post(action, callback)`
