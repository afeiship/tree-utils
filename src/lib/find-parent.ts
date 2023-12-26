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
  const stdTree = Array.isArray(inTree) ? inTree : [inTree];
  if (inTree[value] === inId) return null;
  const find = (tree: any, id: string) => {
    if (!tree[children]) return null;
    for (const child of tree[children]) {
      if (child[value] === id) return tree;
      const res = find(child, id);
      if (res) return res;
    }
    return null;
  };

  for (const tree of stdTree) {
    const res = find(tree, inId);
    if (res) return res;
  }

  return null;
};
