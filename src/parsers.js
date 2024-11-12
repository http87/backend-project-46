import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

const getExtention = (filepath) => path.extname(filepath);
const getFileFormat = (filepath) => getExtention(filepath).slice(1);

export default (filepath) => {
  const data = readFile(filepath);
  const fileFormat = getFileFormat(filepath);

  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return parsers[fileFormat](data);
};
