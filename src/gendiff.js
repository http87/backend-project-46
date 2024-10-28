import parse from './parsers.js';
import stylish from './stylish.js';

export default (fileName1, fileName2, formatter = 'stylish') => {
  const data1 = parse(fileName1);
  const data2 = parse(fileName2);
  switch (formatter) {
    case 'stylish':
      return stylish(data1, data2);
    default:
      return stylish(data1, data2);
  }
};
