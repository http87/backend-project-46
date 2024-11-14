import stringify from './formatters/stylish.js';
import createTree from './tree.js';

const indent = (depth, replacer) => replacer.repeat(depth);

const buildTreeFormat = (tree, depth = 0, replacer = '    ') => {
  const result = tree.map((node) => {
    switch (node.type) {
      case 'added':
        return `  ${indent(depth, replacer)}+ ${node.key}: ${stringify(node.value, depth)}`;
      case 'removed':
        return `  ${indent(depth, replacer)}- ${node.key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return [
          `  ${indent(depth, replacer)}- ${node.key}: ${stringify(node.value1, depth)}`,
          `  ${indent(depth, replacer)}+ ${node.key}: ${stringify(node.value2, depth)}`,
        ].join('\n');
      case 'unchanged':
        return `  ${indent(depth, replacer)}  ${node.key}: ${stringify(node.value, depth)}`;
      case 'nested':
        return `  ${indent(depth, replacer)}  ${node.key}: {\n${buildTreeFormat(node.children, depth + 1)}\n${indent(depth, replacer)}    }`;
      default:
        throw new Error('Error');
    }
  });
  return result.join('\n');
};

export default (file1, file2) => `{\n${buildTreeFormat(createTree(file1, file2))}\n}`;
