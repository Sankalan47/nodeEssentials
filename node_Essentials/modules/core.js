const path = require("path");

const util = require("util");

const v8 = require("v8");

util.log(path.basename(__filename));
util.log("this is the file name");

util.log(v8.getHeapStatistics()); //this gives us the memory usage