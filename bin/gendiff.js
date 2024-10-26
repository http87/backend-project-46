#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output usage information')
  .helpOption('-h, --help', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to first file')
  .action((filepath1, filepath2) => {
    const file = genDiff(filepath1, filepath2);
    console.log(file);
  });

program.parse(process.argv);
