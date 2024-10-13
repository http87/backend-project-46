#!/usr/bin/env node

//import str from '../src/gendiff.js';
import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output usage information')
  .helpOption('-h, --help', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>');

program.parse(process.argv);