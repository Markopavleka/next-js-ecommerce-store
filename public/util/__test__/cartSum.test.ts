import { expect, test } from '@jest/globals';
import { calculateItemTotal } from '../cartSum';

test('calculateItemTotal', () => {
  expect(calculateItemTotal(3, 10, 20)).toBe(50);
});
