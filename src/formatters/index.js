import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';
import createTree from '../tree.js';

export default (formatName, data1, data2) => {
  switch (formatName) {
    case 'plain':
      return plain(createTree(data1, data2));
    case 'json':
      return json(createTree(data1, data2));
    default:
      return stylish(createTree(data1, data2));
  }
};
