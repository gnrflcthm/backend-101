# **Backend Development 101: Day 2**

## **Basic Node Functions**

## _process.argv_

-   First item is executable path
-   Second item is the file to be run.
-   The remaining are other arguments passed.

```
process.argv
```

## _require_

-   Used for importing JS files or modules to the code.

```
const name = require(module);
```

## **Modules**

---

## _exporting modules_

-   to export variables or functions from a file, you use `module.exports` or simply `exports`
-   You can import individual files using the path of a file (eg. `*.js`) or a whole directory if an `index.js` file exists in that directory.
-   eg. `module.exports.variable = variable`

## _fs_

-   Module for handling the file system.
-   `mkdir` - creates a directory in an asynchronous manner.
-   `mkdirSync` - creates a directory in a synchronous manner.
-   `writeFileSync` - creates a file and its initial contents in a synchronous manner..
