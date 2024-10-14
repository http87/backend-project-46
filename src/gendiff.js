import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';
// import { cwd } from'node:process';

const getContent = (pathFilename) => {
  const splitPath = pathFilename.split('/');
  const filename = splitPath[splitPath.length - 1];
  const getFixturePath = (file) => path.resolve('__fixtures__', file);
  const readFile = (file) => readFileSync(getFixturePath(file), 'utf-8');
  return readFile(filename);
};

export default (fileName1, fileName2) => {
  const data1 = JSON.parse(getContent(fileName1));
  const data2 = JSON.parse(getContent(fileName2));

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const diff = [];
  diff.push(`{`);
  const result = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      diff.push(`  + ${key}: ${data2[key]}`);
    } else if (!Object.hasOwn(data2, key)) {
      diff.push(`  - ${key}: ${data1[key]}`);
    } else if (data1[key] !== data2[key]) {
      diff.push(`  - ${key}: ${data1[key]}`);
      diff.push(`  + ${key}: ${data2[key]}`);
    } else {
      diff.push(`    ${key}: ${data2[key]}`);
    }
  });
  diff.push(`}`);
  return diff.join('\n');
};
