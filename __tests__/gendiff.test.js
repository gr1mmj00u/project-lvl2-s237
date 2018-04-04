import gendiff from '../src';

const beforeFilePath = './__tests__/__fixtures__/before.json';
const afterFilePath = './__tests__/__fixtures__/after.json';

const correctDiff = `{
    host: hexlet.io
  + timeout: 20
  - timeout: 50
  - proxy: 123.234.53.22
  + verbose: true
}`;

test('gendiff', () => {
  expect(gendiff(beforeFilePath, afterFilePath)).toBe(correctDiff);
});
