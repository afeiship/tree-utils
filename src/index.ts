import { buildTree } from './lib/build-tree';
import { findItem } from './lib/find-item';
import { findParent } from './lib/find-parent';
import { findParents } from './lib/find-parents';

declare var wx: any;

const TreeUtils = {
  buildTree,
  findItem,
  findParent,
  findParents,
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TreeUtils;
}

export { buildTree, findItem, findParent, findParents };
