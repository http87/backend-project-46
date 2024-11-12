import json from './json.js';

import genDiffPlain from '../gendiffplain.js';
import genDiffStylish from '../gendiffstylish.js';

export default (formatName, data1, data2) => {
  switch (formatName) {
    case 'plain':
      return genDiffPlain(data1, data2);
    case 'json':
      return json(data1, data2);
    default:
      return genDiffStylish(data1, data2);
  }
};
