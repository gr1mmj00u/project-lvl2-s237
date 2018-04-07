#!/usr/bin/env node
import path from 'path';
import commander from 'commander';
import gendiff from '..';

commander
  .version('1.0.1')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((firstConfig, secondConfig, options) => {
    if (typeof firstConfig === 'undefined') {
      console.error('no firstConfig given!');
      process.exit(1);
    }
    if (typeof secondConfig === 'undefined') {
      console.error('no secondConfig given!');
      process.exit(1);
    }

    const fullPathFirstConfig = path.resolve(process.cwd(), firstConfig);
    const fullPathSecondConfig = path.resolve(process.cwd(), secondConfig);

    const diff = gendiff(fullPathFirstConfig, fullPathSecondConfig, options.format);
    console.log(diff);
  });

commander.parse(process.argv);
