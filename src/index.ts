import { findParent } from './lib/find-parent';
import { buildTree } from './lib/build-tree';

declare var wx: any;

const TreeUtils = {
  findParent,
  buildTree,
};
// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TreeUtils;
}

export { findParent, buildTree };
