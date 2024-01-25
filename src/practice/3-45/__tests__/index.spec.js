import { Dog } from '../index'

describe('3-42 Matcher 會回傳的哈士奇', () => {
  it('狗餓了會汪汪叫', () => {
    // Arrange
    const dog = new Dog('哈士奇')
    const spyWoof = vi.spyOn(dog, 'woof')

    // Act
    dog.hungry()
    dog.hungry()

    // Assertion
    expect(spyWoof).toHaveReturned() // 目標被執行後有回傳值
    expect(spyWoof).toHaveReturnedWith('汪汪汪') // 檢查目標回傳值是否正確
    expect(spyWoof).toHaveReturnedTimes(2) // 目標被執行後有幾次回傳值
    expect(spyWoof).toHaveLastReturnedWith('汪汪汪') // 目標被執行後最後一次的回傳值
    expect(spyWoof).toHaveNthReturnedWith(1, '汪汪汪') // 目標被執行的第 N 次的回傳值
  })
})
