interface Options {
  value?: string;
  children?: string;
}

const defaults: Options = {
  value: 'value',
  children: 'children',
};

export const findItem = (inTree: any, inKey: string, inOptions?: Options) => {
  const options = { ...defaults, ...inOptions };
  if (!inTree) return null;

  const tree = Array.isArray(inTree) ? inTree : [inTree];

  for (const item of tree) {
    if (item[options.value!] === inKey) return item;
    if (item[options.children!]) {
      const res = findItem(item[options.children!], inKey, options);
      if (res) return res;
    }
  }

  return null;
};
