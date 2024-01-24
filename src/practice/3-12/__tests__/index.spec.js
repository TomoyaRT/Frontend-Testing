import { FoodBank } from '../index'

describe('3-12 FoodBank 開戶', () => {
  it('開戶完成，safe 物件中應有用戶資訊', () => {
    // Arrange
    const bank = new FoodBank()
    const expected = { Orange: { food: 0 } }
    const userInfo = bank.safe

    // Act
    bank.openAccount('Orange')

    // Assertion
    expect(userInfo).toEqual(expected)
  })

  it('開戶完成，應該回應 "開戶完成!!" ', () => {
    // Arrange
    const bank = new FoodBank()
    const expected = '開戶完成!!'

    // Act
    const userMessage = bank.openAccount('Orange')

    // Assertion
    expect(userMessage).toEqual(expected)
  })

  it('已開過戶頭，應該回應 "您已經開過戶頭囉。" ', () => {
    // Arrange
    const bank = new FoodBank()
    const expected = '您已經開過戶頭囉。'
    bank.openAccount('Orange')

    // Act
    const userMessage = bank.openAccount('Orange')

    // Assertion
    expect(userMessage).toEqual(expected)
  })
})
