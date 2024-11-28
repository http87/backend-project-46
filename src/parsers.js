import yaml from 'js-yaml';

export default (fileFormat, data) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return parsers[fileFormat](data);
};
