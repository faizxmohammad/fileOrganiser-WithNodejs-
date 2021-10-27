#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { log } = require("console");


// const { S_IFIFO } = require("constants");
// let fs = require("fs");
// let path = require("path");
let treeObj = require("./commands/tree");
let organiseobj = require("./commands/organise");
let helpObj = require("./commands/help");

// console.log(inputArr);

//Commands: 
// node main.js tree " directory path"
// node main.js orgainse " directory path"
// node main.js help


let command = inputArr[0];
let utility ={}

switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;

    case "organise":
        organiseobj.orgainseKey(inputArr[1]);
        break;

    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log(" please 🙏 input right command ");



}




