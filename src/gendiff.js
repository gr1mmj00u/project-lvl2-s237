import path from 'path';
import _ from 'lodash';
import fs from 'fs';
import parse from './parse';


const buildNode = (key, obj1, obj2) => {
  const beforeValue = obj1[key];
  const afterValue = obj2[key];

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

const renderNode = (node) => {
  switch (node.type) {
    case 'add':
      return `  + ${node.key}: ${node.value}`;
    case 'delete':
      return `  - ${node.key}: ${node.value}`;
    case 'unchanged':
      return `    ${node.key}: ${node.value}`;
    case 'changed':
      return [
        `  + ${node.key}: ${node.afterValue}`,
        `  - ${node.key}: ${node.beforeValue}`,
      ].join('\n');
    default:
      return '';
  }
};

export default (beforeFilePath, afterFilePath) => {
  const beforeTypeFile = path.extname(beforeFilePath);
  const afterTypeFile = path.extname(afterFilePath);

  const beforeData = fs.readFileSync(beforeFilePath);
  const afterData = fs.readFileSync(afterFilePath);

  const beforeObj = parse(beforeTypeFile)(beforeData.toString());
  const afterObj = parse(afterTypeFile)(afterData.toString());

  const uniqKeys = _.union(_.keys(beforeObj), _.keys(afterObj));

  const diffNodes = uniqKeys.map(key => buildNode(key, beforeObj, afterObj));

  const result = diffNodes.reduce((acc, e) => [...acc, renderNode(e)], []);

  return `{\n${result.join('\n')}\n}`;
};
