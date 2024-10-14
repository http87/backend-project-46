import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

const getContent = (pathFilename) => {
  const splitPath = pathFilename.split('/');
  const filename = splitPath[splitPath.length - 1];
  const getFixturePath = (file) => path.resolve('__fixtures__', file);
  const readFile = (file) => readFileSync(getFixturePath(file), 'utf-8');
  return JSON.parse(readFile(filename));
};

export default (fileName1, fileName2) => {
  const data1 = getContent(fileName1);
  const data2 = getContent(fileName2);

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data2[key]}`;
  });
  return ['{', ...result, '}'].join('\n');
};

export { getContent };
