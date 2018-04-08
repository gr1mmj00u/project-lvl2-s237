import _ from 'lodash';

const fullPropertyName = (key, path = []) => `${[...path, key].join('.')}`;

const renderValue = value => ((_.isObject(value)) ? 'complex value' : `'${value}'`);

const renderNode = (node, path = []) => {
  switch (node.type) {
    case 'added':
      return `Property '${fullPropertyName(node.key, path)}' was added with value: ${renderValue(node.value)}`;
    case 'delete':
      return `Property '${fullPropertyName(node.key, path)}' was removed`;
    case 'changed':
      return `Property '${fullPropertyName(node.key, path)}' was updated. From ${renderValue(node.beforeValue)} to ${renderValue(node.afterValue)}`;
    case 'object':
      return node.children.map(n => renderNode(n, [...path, node.key]));
    default:
      return [];
  }
};

export default (nodes) => {
  const result = _.flattenDeep(nodes.reduce((acc, e) => [...acc, renderNode(e)], []));

  return `${result.join('\n')}`;
};
