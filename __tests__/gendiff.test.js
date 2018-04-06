import fs from 'fs';
import gendiff from '../src';

const beforeFileJsonPath = './__tests__/__fixtures__/gendiff-json/before.json';
const afterFileJsonPath = './__tests__/__fixtures__/gendiff-json/after.json';
const correctFilePath = './__tests__/__fixtures__/gendiff-json/correct.txt';

const correctDiff = fs.readFileSync(correctFilePath).toString();

test('gendiff-json', () => {
  expect(gendiff(beforeFileJsonPath, afterFileJsonPath)).toBe(correctDiff);
});

const beforeFileYamlPath = './__tests__/__fixtures__/gendiff-yaml/before.yml';
const afterFileYamlPath = './__tests__/__fixtures__/gendiff-yaml/after.yaml';

test('gendiff-yaml', () => {
  expect(gendiff(beforeFileYamlPath, afterFileYamlPath)).toBe(correctDiff);
});

const beforeFileIniPath = './__tests__/__fixtures__/gendiff-ini/before.ini';
const afterFileIniPath = './__tests__/__fixtures__/gendiff-ini/after.ini';

test('gendiff-ini', () => {
  expect(gendiff(beforeFileIniPath, afterFileIniPath)).toBe(correctDiff);
});

const beforeAstFileJsonPath = './__tests__/__fixtures__/gendiff-json-ast/before.json';
const afteAstrFileJsonPath = './__tests__/__fixtures__/gendiff-json-ast/after.json';
const correctAstFilePath = './__tests__/__fixtures__/gendiff-json-ast/correct.txt';
const correctDiffAst = fs.readFileSync(correctAstFilePath).toString();

test('gendiff-json-ast', () => {
  expect(gendiff(beforeAstFileJsonPath, afteAstrFileJsonPath)).toBe(correctDiffAst);
});

const beforeAstFileYamlPath = './__tests__/__fixtures__/gendiff-yaml-ast/before.yaml';
const afteAstrFileYamlPath = './__tests__/__fixtures__/gendiff-yaml-ast/after.yml';

test('gendiff-yaml-ast', () => {
  expect(gendiff(beforeAstFileYamlPath, afteAstrFileYamlPath)).toBe(correctDiffAst);
});

const beforeAstFileIniPath = './__tests__/__fixtures__/gendiff-ini-ast/before.ini';
const afteAstrFileIniPath = './__tests__/__fixtures__/gendiff-ini-ast/after.ini';

test('gendiff-ini-ast', () => {
  expect(gendiff(beforeAstFileIniPath, afteAstrFileIniPath)).toBe(correctDiffAst);
});
