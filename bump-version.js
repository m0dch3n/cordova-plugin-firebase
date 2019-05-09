#!/usr/bin/env node

const fs = require('fs');
const version = require('./package.json').version;

let data = fs.readFileSync('./plugin.xml', "utf8");
data = data.replace(/plugin id="@m0dch3n\/cordova-plugin-firebase" version="[^"]+"/, `plugin id="@m0dch3n/cordova-plugin-firebase" version="${version}"`);
fs.writeFileSync('./plugin.xml', data);
