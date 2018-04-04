import _ from 'lodash';
import fs from 'fs';

const buildNode = (key, obj1, obj2) => {
  const beforeValue = _.get(obj1, key);
  const afterValue = _.get(obj2, key);

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
  const beforeData = fs.readFileSync(beforeFilePath);
  const afterData = fs.readFileSync(afterFilePath);

  const beforeObj = JSON.parse(beforeData.toString());
  const afterObj = JSON.parse(afterData.toString());

  const uniqKeys = _.union(_.keys(beforeObj), _.keys(afterObj));

  const diffNodes = uniqKeys.map(key => buildNode(key, beforeObj, afterObj));

  const result = diffNodes.reduce((acc, e) => {
    acc.push(renderNode(e));
    return acc;
  }, []);

  return `{\n${result.join('\n')}\n}`;
};
