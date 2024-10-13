import { program } from 'commander';

program
  .description(`Make a copy of the current project.
    This may require additional disk space.
  `)
  .version('0.0.1')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')
  .action((str1, str2) => {
    const limit = options.first ? 1 : undefined;
    console.log(`${str1} + ${str2}`);
  });

program.parse();
