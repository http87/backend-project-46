import { readFileSync } from 'node:fs';
import path from 'node:path';
import parse from './parsers.js';
import formatter from './formatters/index.js';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtention = (filepath) => path.extname(filepath);
const getFileFormat = (filepath) => getExtention(filepath).slice(1);
const readFile = (filepath) => readFileSync(getFilePath(filepath));

export default (filepath1, filepath2, formatterName) => {
  const data1 = parse(getFileFormat(filepath1), readFile(filepath1));
  const data2 = parse(getFileFormat(filepath2), readFile(filepath2));

  return formatter(data1, data2, formatterName);
};
