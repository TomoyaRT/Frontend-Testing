import { Dog } from '../index'

describe('3-42 Matcher 被呼叫的哈士奇', () => {
  it('狗餓了會汪汪叫', () => {
    // Arrange
    const dog = new Dog('哈士奇')
    const spyWoof = vi.spyOn(dog, 'woof')

    // Act
    dog.hungry()

    // Assertion
    expect(spyWoof).toHaveBeenCalled() // 斷言目標是否有被呼叫
    expect(spyWoof).toHaveBeenCalledWith('汪汪汪') // 斷言目標被傳入什麼參數
    expect(spyWoof).toHaveBeenCalledTimes(1) // 斷言目標被呼叫的次數

    // Act
    dog.hungry()
    dog.hungry()

    // Assertion
    expect(spyWoof).toHaveBeenCalledTimes(3)
  })
})
