import { fibonacci } from '../index'

describe('3-9 fibonacci', () => {
  it('expected value is 0', () => expect(fibonacci(0)).toBe(0))
  it('expected value is 1', () => expect(fibonacci(1)).toBe(1))
  it('expected value is 1', () => expect(fibonacci(2)).toBe(1))
  it('expected value is 2', () => expect(fibonacci(3)).toBe(2))
  it('expected value is 3', () => expect(fibonacci(4)).toBe(3))
  it('expected value is 5', () => expect(fibonacci(5)).toBe(5))
  it('expected value is 8', () => expect(fibonacci(6)).toBe(8))
})
