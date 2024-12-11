import { getHealthStatus } from './index';

test('should return healthy', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('should return wounded', () => {
  expect(getHealthStatus({ name: 'Лучник', health: 40 })).toBe('wounded');
});

test('should return critical', () => {
  expect(getHealthStatus({ name: 'Мечник', health: 10 })).toBe('critical');
});
