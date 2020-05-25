#!/usr/bin/env node

const { program } = require('commander');
const { execAsync } = require('./utils/util');
const { resolve } = require('path');

const scripts = resolve(__dirname, 'scripts');

const devScpt = resolve(scripts, 'iterm-open.scpt');

program
    .version('0.0.1')
    .command('dev <project name>')
    .action(function (cmd) {
        console.log(cmd);
        execAsync(`osascript ${devScpt} ${cmd}`);
    });

program.parse(process.argv);