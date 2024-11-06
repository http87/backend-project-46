import { readFileSync } from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const getContent = (filename) => {
  const getFixturePath = (file) => path.resolve('__fixtures__', file);
  const readFile = (file) => readFileSync(getFixturePath(file), 'utf-8');
  return readFile(filename);
};

const getExtention = (pathFilename) => {
  const splitPath = pathFilename.split('/');
  let filename = splitPath[splitPath.length - 1];
  const extention = path.extname(filename);
  if (extention === '.yml') {
    const fileNameWithoutExt = filename.split('.');
    filename = `${fileNameWithoutExt[0]}.yaml`;
  }
  const data = getContent(filename);
  const extWithoutDot = extention.slice(1);
  return [data, extWithoutDot];
};

export default (pathFilename) => {
  const [data, extention] = getExtention(pathFilename);

  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return parsers[extention](data);
};
