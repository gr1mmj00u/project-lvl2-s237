import _ from 'lodash';
import fs from 'fs';

export default (beforeFilePath, afterFilePath) => {
  const beforeData = fs.readFileSync(beforeFilePath);
  const afterData = fs.readFileSync(afterFilePath);

  const beforeJson = JSON.parse(beforeData.toString());
  const afterJson = JSON.parse(afterData.toString());

  const uniqKeys = new Set([...(_.keys(beforeJson)), ...(_.keys(afterJson))]);

  const result = Array.from(uniqKeys).reduce((acc, key) => {
    if (_.has(beforeJson, key)) {
      if (_.has(afterJson, key)) {
        if (_.get(beforeJson, key) === _.get(afterJson, key)) {
          acc.push(`    ${key}: ${_.get(beforeJson, key)}`);
        } else {
          acc.push(`  + ${key}: ${_.get(afterJson, key)}`);
          acc.push(`  - ${key}: ${_.get(beforeJson, key)}`);
        }
      } else {
        acc.push(`  - ${key}: ${_.get(beforeJson, key)}`);
      }
    } else {
      acc.push(`  + ${key}: ${_.get(afterJson, key)}`);
    }
    return acc;
  }, []);

  return `{\n${result.join('\n')}\n}\n`;
};
