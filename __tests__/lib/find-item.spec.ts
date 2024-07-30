import { findItem } from '../../src/lib/find-item';

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

    const res1 = findItem(tree, 'root');
    expect(res1).toBe(tree);
  });

  test('target is grandchild', () => {
    const tree: any = {
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

    const res1 = findItem(tree, 'grandchild1');
    expect(res1).toBe(tree.children[0]?.children[0]);
  });
});
