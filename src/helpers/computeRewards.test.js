import computeRewards from './computeRewards';

test('should compute reward for 1 transaction greater than 100', () => {
  expect(computeRewards([{ amount: 120 }])).toEqual(90);
});
test('should compute reward for 2 transactions greater than 100', () => {
  expect(computeRewards([{ amount: 120 }, { amount: 1212 }])).toEqual(2364);
});
test('should compute for one transaction between 50 and 100', () => {
  expect(computeRewards([{ amount: 80 }])).toEqual(30);
});
test('should compute for one transaction less than 50', () => {
  expect(computeRewards([{ amount: 49.99999999 }])).toEqual(0);
});
test('should compute for one transaction equal to 50', () => {
  expect(computeRewards([{ amount: 50 }])).toEqual(0);
});
test('should compute for one transaction equal to 100', () => {
  expect(computeRewards([{ amount: 100 }])).toEqual(50);
});
