import { Dog } from '../index'

describe('3-42 Dog', () => {
  it('狗餓了會汪汪叫', () => {
    // Arrange
    const dog = new Dog('哈士奇')
    const spyWoof = vi.spyOn(dog, 'woof')

    // Act
    dog.hungry()

    // Assertion
    expect(spyWoof).toHaveBeenCalledTimes(1)
  })
})
