"use strict";

var fs = require('fs');
var path = require('path');
const cptools = require("./cp-tools.js");

const args = require('minimist')(process.argv.slice(2));

const source = args['src'];
var target = args['dest'];
const excl = args['excl'];
const cleardest = args['cleardest'];

// remove/recreate target folder if asked
if(cleardest) {
    fs.rmdirSync(target, {recursive: true});
    fs.mkdirSync( target );
}

// copy folder from src to dest with eventual exclusion items
cptools.copyRecursiveSync(source, target, excl);


