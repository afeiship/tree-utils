interface Options {
  value: string;
  children: string;
}

const defaults: Options = {
  value: 'value',
  children: 'children',
};

export const findParent = (inTree: any, inId: string, inOptions?: Options) => {
  const options = { ...defaults, ...inOptions };
  const { value, children } = options;
  if (inTree[value] === inId) return null;
  const find = (tree: any, id: string) => {
    if (tree[children]) {
      for (const child of tree[children]) {
        if (child[value] === id) return tree;
        const res = find(child, id);
        if (res) return res;
      }
    }
    return null;
  };
  return find(inTree, inId);
};
