import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const readCorrectFile = correctFilePath => fs.readFileSync(correctFilePath).toString();

test('gendiff-json', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-json/before.json');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-json/after.json');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-yaml', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-yaml/before.yml');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-yaml/after.yaml');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-ini', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-ini/before.ini');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-ini/after.ini');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-json-ast', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/before.json');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/after.json');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-yaml-ast', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-yaml-ast/before.yaml');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-yaml-ast/after.yml');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-ini-ast', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-ini-ast/before.ini');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-ini-ast/after.ini');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');

  expect(gendiff(before, after)).toBe(readCorrectFile(correct));
});

test('gendiff-plain-flag', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/before.json');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/after.json');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/correct.txt');

  expect(gendiff(before, after, 'plain')).toBe(readCorrectFile(correct));
});

test('gendiff-json-flag', () => {
  const before = path.resolve(__dirname, '__fixtures__/gendiff-json-flag/before.json');
  const after = path.resolve(__dirname, '__fixtures__/gendiff-json-flag/after.json');
  const correct = path.resolve(__dirname, '__fixtures__/gendiff-json-flag/correct.txt');

  expect(gendiff(before, after, 'json')).toBe(readCorrectFile(correct));
});
