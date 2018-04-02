#!/usr/bin/env node
import commander from 'commander';

commander
  .version('1.0.1')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

commander.parse(process.argv);
