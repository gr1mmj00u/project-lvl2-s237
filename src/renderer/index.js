import renderAst from './ast';
import renderPlain from './plain';

const renders = {
  ast: renderAst,
  plain: renderPlain,
};

export default format => (data) => {
  const render = renders[format];
  if (!render) {
    throw new Error(`unkown render format: ${format}`);
  }
  return render(data);
};
