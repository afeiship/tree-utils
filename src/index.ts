import { buildTree } from './lib/build-tree';
import { findParent } from './lib/find-parent';
imort { findParents } from './lib/find-parents';



declare var wx: any;

const TreeUtils = {
  buildTree,
  findParent,
  findParents,
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TreeUtils;
}

export { findParent, buildTree };
