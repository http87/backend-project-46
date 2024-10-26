import _ from 'lodash';
import parse from './parsers.js';

export default (fileName1, fileName2) => {
  const data1 = parse(fileName1);
  const data2 = parse(fileName2);

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
