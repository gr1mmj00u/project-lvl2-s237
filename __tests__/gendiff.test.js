import fs from 'fs';
import gendiff from '../src';

const beforeFilePath = './__tests__/__fixtures__/before.json';
const afterFilePath = './__tests__/__fixtures__/after.json';
const correctFilePath = './__tests__/__fixtures__/correct.txt';

const correctData = fs.readFileSync(correctFilePath);

test('gendiff', () => {
  expect(gendiff(beforeFilePath, afterFilePath)).toBe(correctData.toString());
});
