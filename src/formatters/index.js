import json from './json.js';
import plain from './plain.js';
import stylish from './stylish.js';
import createTree from '../tree.js';

export default (data1, data2, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return stylish(createTree(data1, data2));
    case 'plain':
      return plain(createTree(data1, data2));
    case 'json':
      return json(createTree(data1, data2));
    default:
      console.log('Вы выбрали неверные формат. Возможные варианты: stylish, plain, json.');
  }
};
