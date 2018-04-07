import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('gendiff-json', () => {
  const beforeFileJsonPath = path.resolve(__dirname, '__fixtures__/gendiff-json/before.json');
  const afterFileJsonPath = path.resolve(__dirname, '__fixtures__/gendiff-json/after.json');
  const correctFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');
  const correctDiff = fs.readFileSync(correctFilePath).toString();

  expect(gendiff(beforeFileJsonPath, afterFileJsonPath)).toBe(correctDiff);
});

test('gendiff-yaml', () => {
  const beforeFileYamlPath = path.resolve(__dirname, '__fixtures__/gendiff-yaml/before.yml');
  const afterFileYamlPath = path.resolve(__dirname, '__fixtures__/gendiff-yaml/after.yaml');
  const correctFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');
  const correctDiff = fs.readFileSync(correctFilePath).toString();

  expect(gendiff(beforeFileYamlPath, afterFileYamlPath)).toBe(correctDiff);
});

test('gendiff-ini', () => {
  const correctFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json/correct.txt');
  const correctDiff = fs.readFileSync(correctFilePath).toString();
  const beforeFileIniPath = path.resolve(__dirname, '__fixtures__/gendiff-ini/before.ini');
  const afterFileIniPath = path.resolve(__dirname, '__fixtures__/gendiff-ini/after.ini');

  expect(gendiff(beforeFileIniPath, afterFileIniPath)).toBe(correctDiff);
});

test('gendiff-json-ast', () => {
  const beforeAstFileJsonPath = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/before.json');
  const afteAstrFileJsonPath = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/after.json');
  const correctAstFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');
  const correctDiffAst = fs.readFileSync(correctAstFilePath).toString();

  expect(gendiff(beforeAstFileJsonPath, afteAstrFileJsonPath)).toBe(correctDiffAst);
});

test('gendiff-yaml-ast', () => {
  const beforeAstFileYamlPath = path.resolve(__dirname, '__fixtures__/gendiff-yaml-ast/before.yaml');
  const afterAstFileYamlPath = path.resolve(__dirname, '__fixtures__/gendiff-yaml-ast/after.yml');
  const correctAstFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');
  const correctDiffAst = fs.readFileSync(correctAstFilePath).toString();

  expect(gendiff(beforeAstFileYamlPath, afterAstFileYamlPath)).toBe(correctDiffAst);
});

test('gendiff-ini-ast', () => {
  const beforeAstFileIniPath = path.resolve(__dirname, '__fixtures__/gendiff-ini-ast/before.ini');
  const afteAstrFileIniPath = path.resolve(__dirname, '__fixtures__/gendiff-ini-ast/after.ini');
  const correctAstFilePath = path.resolve(__dirname, '__fixtures__/gendiff-json-ast/correct.txt');
  const correctDiffAst = fs.readFileSync(correctAstFilePath).toString();

  expect(gendiff(beforeAstFileIniPath, afteAstrFileIniPath)).toBe(correctDiffAst);
});

test('gendiff-plain-flag', () => {
  const beforeJsonPlainFlag = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/before.json');
  const afterJsonPlainFlag = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/after.json');
  const correctPlainFlag = path.resolve(__dirname, '__fixtures__/gendiff-plain-flag/correct.txt');
  const correctDiffPlainFlag = fs.readFileSync(correctPlainFlag).toString();

  expect(gendiff(beforeJsonPlainFlag, afterJsonPlainFlag, 'plain')).toBe(correctDiffPlainFlag);
});
