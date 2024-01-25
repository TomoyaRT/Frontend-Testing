describe('3-46 Matcher Error', () => {
  test('解析有效的 JSON 格式時，應該回傳正確的物件。', () => {
    const validJSON = '{ "name": "哈士奇", "age": 20 }'
    const expected = { name: '哈士奇', age: 20 }

    const actual = JSON.parse(validJSON)

    expect(actual).toEqual(expected)
  })

  test('解析無效的 JSON 格式時，應該拋出錯誤。', () => {
    const invalidJSON = "{ 'name': '哈士奇', 'age': 20 }"

    expect(() => JSON.parse(invalidJSON)).toThrow(
      "Expected property name or '}' in JSON at position 2"
    )
  })
})
