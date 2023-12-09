import { buildTree } from '../../src/lib/build-tree';

describe('api.basic', () => {
  test('01/ category nested parser', () => {
    const categories = [
      {
        id: 1,
        name: 'Apparel Store',
        parent_id: null,
        created_at: '2023-12-05T14:17:38.485Z',
        updated_at: '2023-12-05T14:17:38.485Z',
      },
      {
        id: 2,
        name: 'Shores',
        parent_id: 1,
        created_at: '2023-12-05T14:17:38.530Z',
        updated_at: '2023-12-05T14:17:38.530Z',
      },
      {
        id: 3,
        name: 'Clothing',
        parent_id: 1,
        created_at: '2023-12-05T14:17:38.556Z',
        updated_at: '2023-12-05T14:17:38.556Z',
      },
      {
        id: 4,
        name: "Men's Shores",
        parent_id: 2,
        created_at: '2023-12-05T14:27:55.884Z',
        updated_at: '2023-12-05T14:27:55.884Z',
      },
      {
        id: 5,
        name: "Women's Shores",
        parent_id: 2,
        created_at: '2023-12-05T14:28:00.197Z',
        updated_at: '2023-12-05T14:28:00.197Z',
      },
    ];

    const result = buildTree(categories);
    expect(result).toEqual([
      {
        value: 1,
        label: 'Apparel Store',
        children: [
          {
            value: 2,
            label: 'Shores',
            children: [
              {
                value: 4,
                label: "Men's Shores",
                children: [],
                leaf: true,
                depth: 2,
              },
              {
                value: 5,
                label: "Women's Shores",
                children: [],
                leaf: true,
                depth: 2,
              },
            ],
            leaf: false,
            depth: 1,
          },
          {
            value: 3,
            label: 'Clothing',
            children: [],
            leaf: true,
            depth: 1,
          },
        ],
        leaf: false,
        depth: 0,
      },
    ]);
  });
});
