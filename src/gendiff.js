import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import parseData from './parse';
import renderNode from './render';


const buildNode = (key, obj1, obj2) => {
  const beforeValue = obj1[key];
  const afterValue = obj2[key];

  if (_.isObject(beforeValue) && _.isObject(afterValue)) {
    const uniqKeys = _.union(_.keys(beforeValue), _.keys(afterValue));
    const children = uniqKeys.map(keyC => buildNode(keyC, beforeValue, afterValue));
    return { key, children };
  }

  if (!beforeValue) {
    return { type: 'add', key, value: afterValue };
  } else if (!afterValue) {
    return { type: 'delete', key, value: beforeValue };
  } else if (beforeValue === afterValue) {
    return { type: 'unchanged', key, value: beforeValue };
  }

  return {
    type: 'changed',
    key,
    beforeValue,
    afterValue,
  };
};

export default (beforeFilePath, afterFilePath) => {
  const beforeTypeFile = path.extname(beforeFilePath);
  const afterTypeFile = path.extname(afterFilePath);

  const beforeData = fs.readFileSync(beforeFilePath);
  const afterData = fs.readFileSync(afterFilePath);

  const beforeObj = parseData(beforeTypeFile)(beforeData.toString());
  const afterObj = parseData(afterTypeFile)(afterData.toString());

  const uniqKeys = _.union(_.keys(beforeObj), _.keys(afterObj));

  const nodesAst = uniqKeys.map(key => buildNode(key, beforeObj, afterObj));

  const result = _.flattenDeep(nodesAst.reduce((acc, e) => [...acc, renderNode(e)], []));

  return `{\n${result.join('\n')}\n}`;
};
