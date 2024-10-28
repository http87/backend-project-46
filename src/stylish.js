import _ from 'lodash';
import stringify from './index.js';

export default (node1, node2) => {
  const iter = (data1, data2, depth, replacer = ' ', spacesCount = 4) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2);
    const sortedKeys = _.sortBy(keys);

    let indentDuetoSpetialCharts = 0;
    let indentDuetoSpetialChartsDeep = '';
    if (depth > 1) {
      indentDuetoSpetialCharts = 2;
      indentDuetoSpetialChartsDeep = '  ';
    }
    const indentClear = depth * spacesCount + 4;
    const indentSize = depth * spacesCount - indentDuetoSpetialCharts;
    const currentIndent = replacer.repeat(indentSize);
    let bracketIndent = replacer.repeat(indentSize - spacesCount + 2);

    const result = sortedKeys.map((key) => {
      // ключ только во втором объекте, знак +
      if (!_.has(data1, key)) {
        if (depth === 1) {
          const currentIndentFirstDepth = replacer.repeat(depth * spacesCount - 2);
          return `${currentIndentFirstDepth}+ ${key}: ${stringify(data2[key], indentClear)}`;
        }
        return `${currentIndent}+ ${key}: ${stringify(data2[key], indentClear)}`;
      }
      // ключ только в первом объекте, знак -
      if (!_.has(data2, key)) {
        if (depth === 1) {
          const currentIndentFirstDepth = replacer.repeat(depth * spacesCount - 2);
          return `${currentIndentFirstDepth}- ${key}: ${stringify(data1[key], indentClear)}`;
        }
        return `${currentIndent}- ${key}: ${stringify(data1[key], indentClear)}`;
      }
      // ключи есть и там и там, но значения не совпадает
      if (data1[key] !== data2[key]) {
        if (!_.isObject(data1[key]) && !_.isObject(data2[key])) {
          return `${currentIndent}- ${key}: ${data1[key]}\n${currentIndent}+ ${key}: ${data2[key]}`;
        }
        if (!_.isObject(data1[key]) && _.isObject(data2[key])) {
          return `${currentIndent}- ${key}: ${data1[key]}\n${currentIndent}+ ${key}: ${stringify(data2[key], indentClear)}`;
        }
        if (_.isObject(data1[key]) && !_.isObject(data2[key])) {
          return `${currentIndent}- ${key}: ${stringify(data1[key], indentClear)}\n${currentIndent}+ ${key}: ${stringify(data2[key], indentClear)}`;
        }
        return `${indentDuetoSpetialChartsDeep}${currentIndent}${key}: ${iter(data1[key], data2[key], depth + 1)}`;
      }
      return `  ${currentIndent}${key}: ${data2[key]}`;
    });
    if (depth === 1) {
      bracketIndent = '';
      return ['{', ...result, `${bracketIndent}}`].join('\n');
    }
    return ['{', ...result, `${bracketIndent}}`].join('\n');
  };

  return iter(node1, node2, 1);
};
