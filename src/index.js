import _ from 'lodash';

const stringify = (data, spacesCount = 4, replacer = ' ') => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    let indentDuetoSpetialCharts = 0;
    if (depth > 1) {
      indentDuetoSpetialCharts = 4 * (depth - 1);
    }
    const indentSize = depth * spacesCount - indentDuetoSpetialCharts;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - 4);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(data, 1);
};

export default stringify;
