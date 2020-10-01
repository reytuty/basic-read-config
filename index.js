const fs        = require("fs") ;
const minimist  = require("minimist") ;
const merge     = require("merge-objects") ;

var args = minimist( process.argv.slice(2), {
    alias:{
        c : "config"
    }
} )

var configPath = ( args.config ) ? args.config : "./config.json" ;

module.exports = defaultConfig=>{
    var configJson = {
    } ;
    try{
        configJson = JSON.parse( fs.readFileSync(configPath, 'utf8') ) ;
    }catch(e){
        console.log(e) ;
        configJson.__error = e ;
    }
    return merge( defaultConfig, configJson );
}