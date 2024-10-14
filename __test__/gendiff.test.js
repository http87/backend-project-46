import genDiff, { getContent } from '../src/gendiff.js';

const data1 = getContent('file1.json');
const data2 = getContent('file2.json');
const file1 = 'file1.json';
const file2 = 'file2.json';

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON compare', () => {
  expect(genDiff(file1, file2)).toEqual(result);
});