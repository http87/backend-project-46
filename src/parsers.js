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
  const filename = splitPath[splitPath.length - 1];
  const extention = path.extname(filename);
  if (extention === '.yaml' || extention === '.yml') {
    const json = yaml.load(getContent(filename));
    return json;
  }
  return JSON.parse(getContent(filename));
};

export default (pathFilename) => getExtention(pathFilename);
