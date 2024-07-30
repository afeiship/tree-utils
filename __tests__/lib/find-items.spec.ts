import { findItems } from '../../src/lib/find-item';

// bun test ./__tests__/lib/find-items.spec.ts
describe('api.basic', () => {
  test('find items value is array', () => {
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

    const res1 = findItems(tree, ['child1', 'child2']);
    expect(res1).toEqual([tree.children[0], tree.children[1]]);
  });

  test('find items but only value is string', () => {
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

    const res2 = findItems(tree, 'child1');
    expect(res2).toEqual([tree.children[0]]);
  });
});
