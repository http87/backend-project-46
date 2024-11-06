import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (formatName, data1, data2) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data1, data2);
    case 'plain':
      return plain(data1, data2);
    case 'json':
      return json(data1, data2);
    default:
      return stylish(data1, data2);
  }
};
