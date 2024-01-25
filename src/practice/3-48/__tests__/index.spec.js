describe('3-48 Snapshot Testing', () => {
  test('解析有效的 JSON 格式時，應該回傳正確的物件。', () => {
    const validJSON = '{ "name": "哈士奇", "age": 20 }'
    const actual = JSON.parse(validJSON)

    expect(actual).toMatchInlineSnapshot(`
    {
      "age": 20,
      "name": "哈士奇",
    }
    `)
  })
})
