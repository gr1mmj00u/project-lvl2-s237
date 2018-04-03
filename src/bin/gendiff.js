#!/usr/bin/env node
import commander from 'commander';
import gendiff from '..';

commander
  .version('1.0.1')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig) => {
    const firstPath = firstConfig;
    const secondPath = secondConfig;

    if (typeof firstPath === 'undefined') {
      console.error('no firstConfig given!');
      process.exit(1);
    }
    if (typeof secondPath === 'undefined') {
      console.error('no secondConfig given!');
      process.exit(1);
    }

    const diff = gendiff(firstPath, secondPath);
    console.log(diff);
  });

commander.parse(process.argv);
