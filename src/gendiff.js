import parse from './parsers.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, formatterName) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  return formatter(formatterName, data1, data2);
};
