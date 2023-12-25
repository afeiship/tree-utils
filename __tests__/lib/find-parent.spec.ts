import { findParent } from '../../src/lib/find-parent';

describe('api.basic', () => {
  test('target is root', () => {
    const tree = {
      value: 'root',
      label: 'root',
      children: [
        {
          value: 'child1',
          label: 'child1',
        },
        {
          value: 'child2',
          label: 'child2',
        },
      ],
    };

    expect(findParent(tree, 'root')).toBe(null);
  });

  test('target is child', () => {
    const tree = {
      value: 'root',
      label: 'root',
      children: [
        {
          value: 'child1',
          label: 'child1',
        },
        {
          value: 'child2',
          label: 'child2',
        },
      ],
    };

    expect(findParent(tree, 'child1')).toBe(tree);
  });

  test('target is grandchild', () => {
    const tree = {
      value: 'root',
      label: 'root',
      children: [
        {
          value: 'child1',
          label: 'child1',
          children: [
            {
              value: 'grandchild1',
              label: 'grandchild1',
            },
            {
              value: 'grandchild2',
              label: 'grandchild2',
            },
          ],
        },
        {
          value: 'child2',
          label: 'child2',
        },
      ],
    };

    expect(findParent(tree, 'grandchild1')).toBe(tree.children[0]);
  });
});
