import gendiff from '../src';

const beforeFileJsonPath = './__tests__/__fixtures__/gendiff-json/before.json';
const afterFileJsonPath = './__tests__/__fixtures__/gendiff-json/after.json';

const correctDiff = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

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
