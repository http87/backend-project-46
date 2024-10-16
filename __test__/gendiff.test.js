import genDiff from '../src/gendiff.js';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('JSON compare', () => {
  const file1 = getFixturePath('file1.json').trim();
  const file2 = getFixturePath('file2.json').trim();
  expect(genDiff(file1, file2)).toEqual(result);
});
