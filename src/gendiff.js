import parse from './parsers.js';
import formatter from './formatters/index.js';

export default (fileName1, fileName2, formatName) => {
  const data1 = parse(fileName1);
  const data2 = parse(fileName2);

  return formatter(formatName, data1, data2);
};
