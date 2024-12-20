#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output usage information')
  .helpOption('-h, --help', 'output the version number')
  .option('-f, --format [type]', 'output format: plain, stylish', 'stylish')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to first file')
  .action((filepath1, filepath2) => {
    const formatName = program.opts().format;
    const file = genDiff(filepath1, filepath2, formatName);
    console.log(file);
  });

program.parse(process.argv);
