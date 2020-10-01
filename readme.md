# Basic Read Config

To load config file json from recived path and default config.

* get ./config.json by default
* if does not exists no problem
* you can use default config object
* if config json file exists they overrite values

## Use

here if user pass args -c path_of_file then basic-read-config module get config json file of path

Example: node app.js -c C:/folder/myjson.json

```

var config = require("basic-read-config") ;

var myConfig = config({ a:1, b:2 });//pass default config if file not founded or not passed
console.log ( myConfig ) ;

```