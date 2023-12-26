import { findParent } from './find-parent';

interface Options {
  value?: string;
  children?: string;
}
const defaults: Options = {
  value: 'value',
  children: 'children',
};

export const findParents = (inTree: any, inId: any, inOptions?: Options): any[] => {
  const result: any[] = [];
  const options = { ...defaults, ...inOptions };
  const { value, children } = options;

  const find = (tree: any, id: any) => {
    const parent = findParent(tree, id, options);
    if (!parent) return;
    result.unshift(parent);
    find(tree, parent[value]);
  };

  find(inTree, inId);

  return result;
};
