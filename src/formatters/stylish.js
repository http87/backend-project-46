import _ from 'lodash';

const stringify = (value, spacesCount, replacer = '    ') => {
  if (!_.isObject(value)) {
    return `${value}`;
  }

  const indentSize = spacesCount + 2;
  const indentReplacer = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(spacesCount + 1);

  const lines = Object
    .entries(value)
    .map(([key, val]) => `${indentReplacer}${key}: ${stringify(val, spacesCount + 1)}`);

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n');
};

export default stringify;
