import _ from 'lodash';

const getComplexType = (value) => (_.isObject(value) ? '[complex value]' : value);
const getTypeValue = (value) => {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value !== 'object' && typeof value !== 'boolean') {
    return `'${value}'`;
  }
  return value;
};

const render = (act, property, value1, value2 = '') => {
  const actions = {
    added: `Property '${property.slice(1)}' was added with value: ${getComplexType(getTypeValue(value1))}`,
    removed: `Property '${property.slice(1)}' was removed`,
    changed: `Property '${property.slice(1)}' was updated. From ${getComplexType(getTypeValue(value1))} to ${getComplexType(getTypeValue(value2))}`,
  };
  return actions[act];
};

export default (tree) => {
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
