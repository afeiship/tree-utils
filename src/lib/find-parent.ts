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
  const tree = Array.isArray(inTree) ? { [options.children]: inTree } : inTree;
  if (inTree[options.value] === inId) return null;
  for (const child of inTree[options.children]) {
    if (child[options.value] === inId) return inTree;
    const parent = findParent(child, inId, options);
    if (parent) return parent;
  }
  return null;
};
