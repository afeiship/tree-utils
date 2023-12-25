interface Options {
  value: string;
  children: string;
};

const defaults: Options = {
  value: 'value',
  children: 'children',
};

export const findParents(inTree: any[], inId: any, inOptions?: Options): any[] => {
  const parents: any[] = [];
  const opts = { ...defaults, ...inOptions };
  const find = (tree: any, id: any) => {
    if (tree[opts.value] === id) {
      parents.push(tree);
      return true;
    }

    if (tree[opts.children]) {
      for (const child of tree[opts.children]) {
        if (find(child, id)) {
          parents.push(tree);
          return true;
        }
      }
    }
    return false;
  }

  if (find(inTree, inId)) {
    return parents;
  }
  return [];
}
