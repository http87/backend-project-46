import _ from 'lodash';

const getComplexType = (value) => (_.isObject(value) ? '[complex value]' : value);
const getTypeValue = (value) => {
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

export default render;
