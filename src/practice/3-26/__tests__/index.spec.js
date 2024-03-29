describe('Matcher - 純值型別比對', () => {
  test('1 toBe 1', () => expect(1).toBe(1))
  test('"1" toBe 1', () => expect.soft('1').toBe(1))
  test('{} toBe {}', () => expect.soft({}).toBe({}))
})

describe('Matcher - 浮點數比對', () => {
  test('0.1 + 0.2 toBe 0.3', () => expect(0.1 + 0.2).toBe(0.3))
  test('0.1 + 0.2 toBeCloseTo 0.3', () => expect(0.1 + 0.2).toBeCloseTo(0.3))
})

describe('Matcher - 檢查資料長度', () => {
  test('5 > 1', () => expect(5).toBeGreaterThan(1))
  test('5 >= 5', () => expect(5).toBeGreaterThanOrEqual(5))
  test('6 < 7', () => expect(6).toBeLessThan(7))
  test('6 <= 7', () => expect(6).toBeLessThanOrEqual(6))
})

describe('Matcher - 確認主程式是否正確載入', () => {
  const A = ''
  let B

  test('variable A ia defined', () => expect(A).toBeDefined())
  test('variable A ia undefined', () => expect(B).toBeUndefined())
})

describe('Matcher - Truthy & Falsy', () => {
  test('1 to be truthy', () => expect(1).toBeTruthy())
  test('{} to be truthy', () => expect({}).toBeTruthy())
  test('[] to be truthy', () => expect([]).toBeTruthy())
  test('0 to be truthy', () => expect(0).toBeFalsy())
  test('"" to be truthy', () => expect('').toBeFalsy())
  test('null to be truthy', () => expect(null).toBeFalsy())
  test('undefined to be truthy', () => expect(undefined).toBeFalsy())
  test('NaN to be truthy', () => expect(NaN).toBeFalsy())
})

describe('Matcher - Null', () => {
  test('null to be null', () => expect(null).toBeNull())
})

describe('Matcher - Regex', () => {
  test('Simple phone number regex matcher', () => expect('0912345678').toMatch(/^09[0-9]{8}$/))
})

describe('Matcher - 非純值型別比對', () => {
  test('use toEqual match array', () => expect(['橘貓', '白貓']).toEqual(['橘貓', '白貓']))
  test('use toEqual match object', () => expect({ cat: '肥貓' }).toEqual({ cat: '肥貓' }))

  test('use toEqual match object (has undefined property)', () =>
    expect({ cat: '肥貓', dog: undefined }).toEqual({ cat: '肥貓' }))
  test('use toEqual match object (has null property)', () =>
    expect({ cat: '肥貓', dog: null }).toEqual({ cat: '肥貓' }))

  test('use toStrictEqual match object (has null property)', () =>
    expect({ cat: '肥貓' }).toStrictEqual({ cat: '肥貓' }))
  test('use toStrictEqual match object (has null property)', () =>
    expect({ cat: '肥貓', dog: undefined }).toStrictEqual({ cat: '肥貓' }))
})

describe('Matcher - 非純值型別比對 - Object', () => {
  test('use toEqual match object', () => expect({ cat: '肥貓' }).toEqual({ cat: '肥貓' }))

  test('use toEqual match object (has undefined property)', () =>
    expect({ cat: '肥貓', dog: undefined }).toEqual({ cat: '肥貓' }))
  test('use toEqual match object (has null property)', () =>
    expect({ cat: '肥貓', dog: null }).toEqual({ cat: '肥貓' }))

  test('use toStrictEqual match object (has null property)', () =>
    expect({ cat: '肥貓' }).toStrictEqual({ cat: '肥貓' }))
  test('use toStrictEqual match object (has null property)', () =>
    expect({ cat: '肥貓', dog: undefined }).toStrictEqual({ cat: '肥貓' }))
})

describe('Matcher - 檢查陣列中是否含有某個值', () => {
  test('use toEqual match array', () => expect(['橘貓', '白貓']).toEqual(['橘貓', '白貓']))

  test('use toContain match array', () => expect(['橘貓', '黑貓']).toContain('橘貓'))

  test('use toContainEqual match array 1', () =>
    expect(['橘貓', '黑貓']).toContainEqual(['橘貓', '黑貓']))
  test('use toContainEqual match array 2', () => expect(['橘貓', '黑貓']).toContainEqual(['橘貓']))
})

describe('Matcher - 檢查資料長度', () => {
  test('match string length', () => expect('有隻大狗叫做二哈').toHaveLength(8))

  test('match array length', () => expect(['哈士奇', '柴犬']).toHaveLength(2))

  test('match object length', () => expect({ length: 6 }).toHaveLength(6))
})

describe('Matcher - 檢驗物件是否含有特定屬性', () => {
  const dog = { name: '哈士奇' }

  test('match object has name property', () => expect(dog).toHaveProperty('name'))
  test('match object has name property', () => expect(dog).toHaveProperty('name', '哈士奇'))
  test('match object has name property', () => expect(dog).toHaveProperty('name', '二哈'))
})

describe('Matcher - 比對部份物件內容', () => {
  const dog = { lover: { name: '柴犬' }, name: '哈士奇' }

  test('match object has name property and value is 哈士奇', () =>
    expect(dog).toMatchObject({ name: '哈士奇' }))
  test('match object has lover property and value is { name: "柴犬" }', () =>
    expect(dog).toMatchObject({ lover: { name: '柴犬' } }))
})
