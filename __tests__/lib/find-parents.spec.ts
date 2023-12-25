import { findParents } from '../../src/lib/find-parents';

describe('api.basic', () => {
  test.only('target is root', () => {
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
    // const res1 = findParents(tree, 'root');
    // const res2 = findParents(tree, 'child1');
    // console.log(res1);
    // console.log(res2);
    // expect(findParents(tree, 'root')).toEqual([]);
    // expect(findParents(tree, 'child2')).toEqual([tree]);
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

    expect(findParents(tree, 'grandchild1')).toEqual([tree.children[0]]);
    expect(findParents(tree, 'grandchild2')).toEqual([tree.children[0]]);
    expect(findParents(tree, 'grandgrandchild1')).toEqual([tree, tree.children[0]]);
  });
});
