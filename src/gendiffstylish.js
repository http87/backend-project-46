import { stringify, indent } from './formatters/stylish.js';
import createTree from './tree.js';

const buildTreeFormat = (tree, depth = 0) => {
  const result = tree.map((node) => {
    switch (node.type) {
      case 'added':
        return `  ${indent(depth)}+ ${node.key}: ${stringify(node.value)}`;
      case 'removed':
        return `  ${indent(depth)}- ${node.key}: ${stringify(node.value)}`;
      case 'changed':
        return [
          `  ${indent(depth)}- ${node.key}: ${stringify(node.value1)}`,
          `  ${indent(depth)}+ ${node.key}: ${stringify(node.value2)}`,
        ].join('\n');
      case 'unchanged':
        return `  ${indent(depth)}  ${node.key}: ${stringify(node.value)}`;
      case 'nested':
        return `  ${indent(depth)}  ${node.key}: {\n${buildTreeFormat(node.children, depth + 1)}\n${indent(depth)}    }`;
      default:
        throw new Error('Error');
    }
  });
  return result.join('\n');
};

export default (file1, file2) => `{\n${buildTreeFormat(createTree(file1, file2))}\n}`;
