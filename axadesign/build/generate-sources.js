
var fs = require('fs');
var path = require('path');
const cpfiles = require("./cp-tools.js");

// folder & files to copy. if string contains a ':' , right side will be the excluded file(s)
var itemsToCopy = [
    "axa-icon-font",
    "bootstrap",
    "build",
    "downloadfiles/empty.txt",
    "fonts:publico*",
    "images",
    "js",
    "scss",
    "www/index.*",
    "www/prism.*",
    "package*",
    "README.md",
    ".*"
];

var targetFolder = "dist/designsystem_sources"

// remove/recreate folder dist/designsystem_sources
fs.rmdirSync(targetFolder, {recursive: true});
fs.mkdirSync( targetFolder );

// copy files & folders declared in itemsToCopy array (copy without .shared extension)
itemsToCopy.forEach( function(elt) {
    const withExcludeFiles = elt.split(':');
    target = path.join(targetFolder,withExcludeFiles[0]);
    if(target.endsWith(".shared")) {
        target = target.substring(0,target.lastIndexOf(".shared"));
    }
    // if multiple files to copy (with *) , set target folder correctly.
    if(path.basename(target).indexOf('*')>-1)
            target = path.dirname(target);

    if(withExcludeFiles.length>1) {
        cpfiles.copyRecursiveSync(withExcludeFiles[0], target, withExcludeFiles[1]);
    }
    else {
        cpfiles.copyRecursiveSync(elt, target);
    }
});
