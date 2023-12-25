import { findParent } from './find-parent';

interface Options {
  value: string;
  children: string;
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
    const parent = findParent(inTree, inId, options);
    console.log('parent: ', parent);
    if (!parent) return;
    result.push(parent);

    console.log('nested: ', parent, parent[value]);
    find(parent, parent[value]);
  };

  find(inTree, inId);

  return result;
};
