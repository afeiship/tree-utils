type IdValue = string | number | null;
type DbItem = Record<string, IdValue>;

interface TreeItem {
  value: IdValue;
  label: string;
  children: TreeItem[];
  leaf: boolean;
  depth: number;
  [key: string]: any;
}

interface Options {
  value: string;
  label: string;
  parent_key: string;
}

const defaults = {
  value: 'id',
  label: 'name',
  parent_key: 'parent_id',
};

export const buildTree = (inItems: DbItem[], inOptions?: Options) => {
  const { value, label, parent_key } = { ...defaults, ...inOptions };
  const result: Partial<TreeItem>[] = [];
  let targetMap = {};

  inItems.forEach((item) => {
    const parent_id = item[parent_key];
    const id = item[value]!;
    const target = {
      value: item[value],
      label: item[label] as string,
      children: [],
    };

    targetMap[id] = target;

    if (!parent_id) {
      result.push(target);
    } else {
      targetMap[parent_id]!.children.push(target);
    }
  });

  // add leaf + depth
  const addExstension = (inItems: Partial<TreeItem>[], inDepth = 0) => {
    inItems.forEach((item) => {
      item.leaf = item.children!.length === 0;
      item.depth = inDepth;
      addExstension(item.children!, inDepth + 1);
    });
  };

  addExstension(result);

  // destroy targetMap
  targetMap = {};

  return result;
};
