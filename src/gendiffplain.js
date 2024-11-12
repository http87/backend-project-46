import plain from './formatters/plain.js';
import createTree from './tree.js';

export default (after, before) => {
  const tree = createTree(after, before);

  const iter = (node, acc) => {
    const result = node.map((segment) => {
      switch (segment.type) {
        case 'added':
          return plain(segment.type, `${acc}.${segment.key}`, segment.value);
        case 'removed':
          return plain(segment.type, `${acc}.${segment.key}`, segment.value);
        case 'changed':
          return plain(segment.type, `${acc}.${segment.key}`, segment.value1, segment.value2);
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
