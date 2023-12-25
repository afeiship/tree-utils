import { findParents } from '../../src/lib/find-parents';

describe('api.basic', () => {
  test('target is root', () => {
    const tree = {
      value: 'root',
      label: 'root',
      children: [
        {
          value: 'child1',
          label: 'child=label',
        },
        {
          value: 'child2',
          label: 'child2=label',
        },
      ],
    };
    expect(findParents(tree, 'root')).toEqual([]);
    expect(findParents(tree, 'child2')).toEqual([tree]);
  });

  // nested
  test('target is grandchild', () => {
    const tree = {
      value: 'root',
      label: 'root',
      children: [
        {
          value: 'child1',
          label: 'child=label',
          children: [
            {
              value: 'grandchild1',
              label: 'grandchild1=label',
              children: [
                {
                  value: 'grandgrandchild1',
                  label: 'grandgrandchild1=label',
                },
              ],
            },
            {
              value: 'grandchild2',
              label: 'grandchild2=label',
            },
          ],
        },
        {
          value: 'child2',
          label: 'child2=label',
        },
      ],
    };

    const res1 = findParents(tree, 'grandchild1');
    const res2 = findParents(tree, 'grandchild2');
    expect(res1).toEqual([tree, tree.children[0]]);
    expect(res2).toEqual([tree, tree.children[0]]);
    // expect(findParents(tree, 'grandchild2')).toEqual([tree.children[0]]);
    expect(findParents(tree, 'grandgrandchild1')).toEqual([
      tree,
      tree.children[0],
      tree.children[0].children[0],
    ]);
  });
});
