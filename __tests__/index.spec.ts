import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    expect(fn({ rel: true })).toBe(undefined);
  });
});
