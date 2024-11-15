import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtention = (filepath) => path.extname(filepath);
const getFileFormat = (filepath) => getExtention(filepath).slice(1);
const readFile = (filepath) => readFileSync(getFilePath(filepath));

export default (filepath) => {
  const fileFormat = getFileFormat(filepath);
  const data = readFile(filepath);

  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return parsers[fileFormat](data);
};
