import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'node:fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const stylish = readFixtureFile('stylish.txt');

test('JSON compare - stylish', () => {
  const file1 = getFixturePath('file1.json').trim();
  const file2 = getFixturePath('file2.json').trim();
  expect(genDiff(file1, file2, 'stylish')).toEqual(stylish);
});

test('YML compare - stylish', () => {
  const file1 = getFixturePath('file1.yaml').trim();
  const file2 = getFixturePath('file2.yaml').trim();
  expect(genDiff(file1, file2, 'stylish')).toEqual(stylish);
});

const plain = readFixtureFile('plain.txt');

test('JSON compare - plain', () => {
  const file1 = getFixturePath('file1.json').trim();
  const file2 = getFixturePath('file2.json').trim();
  expect(genDiff(file1, file2, 'plain')).toEqual(plain);
});

test('YML compare - plain', () => {
  const file1 = getFixturePath('file1.yaml').trim();
  const file2 = getFixturePath('file2.yaml').trim();
  expect(genDiff(file1, file2, 'plain')).toEqual(plain);
});

const resultJSON = JSON.stringify(JSON.parse(readFixtureFile('json.json')));

test('JSON', () => {
  const file1 = getFixturePath('file1.json').trim();
  const file2 = getFixturePath('file2.json').trim();
  expect(genDiff(file1, file2, 'json')).toEqual(resultJSON);
});
