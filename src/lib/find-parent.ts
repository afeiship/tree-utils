interface Tree {
  key: string;
  label: string;
  leaf?: boolean;
  children?: Tree[];
}

export const findParent = (inTree: Tree, inKey: string, inParent?: Tree): Tree | null => {
  if (inTree.key === inKey) return inParent || null;

  if (inTree.children) {
    for (const child of inTree.children) {
      const parent = findParent(child, inKey, inTree);
      if (parent) {
        return parent;
      }
    }
  }

  return null;
};
