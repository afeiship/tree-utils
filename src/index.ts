import { findParent } from './lib/find-parent';

declare var wx: any;

const TreeUtils = {
  findParent,
};
// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = TreeUtils;
}

export { findParent };
