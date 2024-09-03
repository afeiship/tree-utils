interface Options {
  value?: string;
  children?: string;
}

type FindCallback = (item: any, index: number, array: any[]) => boolean;

const defaults: Options = {
  value: 'value',
  children: 'children',
};

const findBy = (inTree: any, inCallback: FindCallback, inOptions?: Options) => {
  const result: any[] = [];
  const options = { ...defaults, ...inOptions };
  if (!inTree) return null;

  const tree = Array.isArray(inTree) ? inTree : [inTree];

  for (const item of tree) {
    if (inCallback(item, tree.indexOf(item), tree)) {
      result.push(item);
    }

    if (item[options.children!]) {
      const children = findBy(item[options.children!], inCallback, options) as any[];
      if (children.length) {
        result.push(...children);
      }
    }
  }

  return result;
};

export default findBy;
