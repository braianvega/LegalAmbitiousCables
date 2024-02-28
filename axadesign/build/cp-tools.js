'use strict'

var fs = require('fs');
var path = require('path');

// search string can have : exact match [text] / starts with [text*] / ends with [*text] / starts and ens with [text1*text2] -> not case sensitif
// return true if search string found
function checkInName( input, search) {
    input = input.toLowerCase();
    search = search.toLowerCase();
    if(search.lastIndexOf('*')<0 && input == search) {
        return true;
    } else {
        const checkList = search.split('*');
        if(checkList.length==1) {
            if(input == search)
                return true;
            else
                return false;
        }

        if(checkList.length==2) {
            if(search.startsWith('*'))
                return Boolean(input.endsWith(checkList[1]));
            else if(search.endsWith('*'))
                return Boolean(input.startsWith(checkList[0]));
            else
                return Boolean(input.startsWith(checkList[0]) && input.endsWith(checkList[1]))            
        } else
        {
            console.log("Error checkInName - search string not possible : " + search);
        }
    }

    return false;
    
}

// copy a file
function copyFileSync( source, target ) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.copyFileSync(source, targetFile);
}

//copy folders & files recursively
function copyRecursiveSync( source, target, excludeStr = undefined ) {

    //if contains * in the file (copy files with filter)
    if(source.lastIndexOf("*")>-1) {
        const items = source.split("*");
        if (items.length>3) {
            console.log("Error can't process source : " + source);
        } else {
            // copy all searched files from root
            fs.readdir(path.dirname(source), function (err, files) {
                if (err) {
                    console.log(err);
                    return;
                }
                
                //create target folder if doesn't exist
                if(!fs.existsSync(target)) {
                    fs.mkdirSync( target);
                }

                files.forEach(function ( file ) {
                    if (fs.lstatSync( path.join(path.dirname(source),file) ).isFile() ) {
                        if(checkInName(file,path.basename(source)) && (excludeStr==undefined || !checkInName(file, excludeStr))) {
                            fs.copyFileSync(path.join(path.dirname(source),file),path.join(target,file));
                        }
                    }
                });
            });
        }
    } else
    //if source is a file, check/create parent folder. Then copy file
    if (fs.lstatSync( source ).isFile() ) {
        var fileName = path.basename(source);
        if(excludeStr==undefined || !checkInName(fileName, excludeStr)) {
            var targetFolderFile = path.dirname(target);
            // if target is a folder (doesn't contain dot in name)
            if(path.basename(target).lastIndexOf('.')<0)
                targetFolderFile = target;
            
            if(!fs.existsSync(targetFolderFile)) {
                fs.mkdirSync( targetFolderFile);
            }
            
            copyFileSync( source, target);
        }

    } else {
        //Do process recursively
        var files = [];

        //check if folder needs to be created or integrated
        if ( !fs.existsSync( target ) ) {
            fs.mkdirSync( target );
        }

        //copy
        if ( fs.lstatSync( source ).isDirectory() ) {
            // console.log("isDirectory : " + source);
            files = fs.readdirSync( source );
            files.forEach( function ( file ) {
                var curSource = path.join( source, file );
                // console.log('curSource=' + curSource);
                if ( fs.lstatSync( curSource ).isDirectory() ) {
                    copyRecursiveSync( curSource, path.join(target, path.basename(curSource)) );
                } else {
                    if(excludeStr==undefined || !checkInName(file, excludeStr))
                        copyFileSync( curSource, target );
                }
            } );
        }
    }
};

exports.copyRecursiveSync = copyRecursiveSync
