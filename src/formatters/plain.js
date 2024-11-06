import _ from 'lodash';
import createTree from './tree.js';

const getValueType = (value) => (_.isObject(value) ? '[complex value]' : value);

const render = (act, property, value1, value2 = '') => {
  let val1 = value1;
  let val2 = value2;
  if (typeof value1 !== 'object' && typeof value1 !== 'boolean') {
    val1 = `'${value1}'`;
  }
  if (typeof value2 !== 'object' && typeof value2 !== 'boolean') {
    val2 = `'${value2}'`;
  }
  const actions = {
    added: `Property '${property.slice(1)}' was added with value: ${getValueType(val1)}`,
    removed: `Property '${property.slice(1)}' was removed`,
    changed: `Property '${property.slice(1)}' was updated. From ${getValueType(val1)} to ${getValueType(val2)}`,
  };
  return actions[act];
};

const plain = (after, before) => {
  const tree = createTree(after, before);

  const iter = (node, acc) => {
    const result = node.map((segment) => {
      switch (segment.type) {
        case 'added':
          return render(segment.type, `${acc}.${segment.key}`, segment.value);
        case 'removed':
          return render(segment.type, `${acc}.${segment.key}`, segment.value);
        case 'changed':
          return render(segment.type, `${acc}.${segment.key}`, segment.value1, segment.value2);
        case 'nested':
          return iter(segment.children, `${acc}.${segment.key}`);
        default:
          return '';
      }
    });
    return result.filter((item) => {
      if (item !== '') {
        return item;
      }
      return item;
    }).join('\n');
  };

  return iter(tree, '');
};

export default plain;
