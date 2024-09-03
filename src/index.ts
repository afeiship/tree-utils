import { buildTree } from './lib/build-tree';
import { findItem, findItems } from './lib/find-item';
import { findParent } from './lib/find-parent';
import { findParents } from './lib/find-parents';
import findBy from './lib/find-by';

declare var wx: any;

const TreeUtils = {
  buildTree,
  findItem,
  findItems,
  findParent,
  findParents,
  findBy,
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TreeUtils;
}

export { buildTree, findItem, findItems, findParent, findParents, findBy };
