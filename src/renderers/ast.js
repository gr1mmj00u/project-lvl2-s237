import _ from 'lodash';

const renderValue = (value, key, depth = 0, sign = ' ') => {
  if (_.isObject(value)) {
    const keys = _.keys(value);
    return [
      `${'    '.repeat(depth)}  ${sign} ${key}: {`,
      keys.map(k => renderValue(value[k], k, depth + 1)),
      `${'    '.repeat(depth)}    }`,
    ];
  }
  return `${'    '.repeat(depth)}  ${sign} ${key}: ${value}`;
};

const renderNode = (node, depth = 0) => {
  switch (node.type) {
    case 'added':
      return renderValue(node.value, node.key, depth, '+');
    case 'delete':
      return renderValue(node.value, node.key, depth, '-');
    case 'unchanged':
      return renderValue(node.value, node.key, depth);
    case 'changed':
      return [
        renderValue(node.afterValue, node.key, depth, '+'),
        renderValue(node.beforeValue, node.key, depth, '-'),
      ];
    case 'object':
      return [
        `${'    '.repeat(depth)}    ${node.key}: {`,
        node.children.map(n => renderNode(n, depth + 1)),
        `${'    '.repeat(depth)}    }`,
      ];
    default:
      return [];
  }
};

export default (nodes) => {
  const result = _.flattenDeep(nodes.reduce((acc, e) => [...acc, renderNode(e)], []));

  return `{\n${result.join('\n')}\n}`;
};
