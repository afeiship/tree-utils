import { findBy } from '../../src';

describe('api.basic', () => {
  test('01/basic feature', () => {
    const tree = [
      {
        label: 'Environmental Engineering',
        display_value: 'Environmental Engineering',
        value: '11-2',
      },
      {
        label: 'Computer Engineering',
        display_value: 'Computer Engineering',
        value: '12-16',
      },
      {
        label: 'Electrical Engineering',
        display_value: 'Electrical Engineering',
        value: '20-9',
      },
      {
        label: 'Computer Engineering',
        display_value: 'Computer Engineering',
        value: '20-10',
      },
      {
        label: 'Biological Science',
        display_value: 'Biological Science',
        value: '23-1',
      },
      {
        label: 'Mechanical Engineering',
        display_value: 'Mechanical Engineering',
        value: '25-2',
      },
      {
        label: 'Environmental Engineering',
        display_value: 'Environmental Engineering',
        value: '25-4',
      },
      {
        // has children
        label: 'Chemical Engineering-all',
        display_value: 'Chemical Engineering',
        value: '25-5',
        children: [
          {
            label: 'Chemical Engineering-sub1',
            display_value: 'Chemical Engineering',
            value: '25-5-1',
          },
          {
            label: 'Computer Engineering',
            display_value: 'Computer Engineering',
            value: '25-5-2',
          },
        ],
      },
    ];

    // Computer Engineering
    const result = findBy(tree, (node) => node.label === 'Computer Engineering')?.map(
      (node) => node.value
    );
    expect(result).toEqual(['12-16', '20-10', '25-5-2']);
  });
});
