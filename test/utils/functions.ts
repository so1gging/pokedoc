import { isNotNil } from '@/libs/utils/functions'

describe('functions Utils', () => {
  it('isNotNil', function () {
    expect(isNotNil(null)).equal(false)
    expect(isNotNil(null)).equal(false)
    expect(isNotNil('test')).equal(true)
    expect(isNotNil(123)).equal(true)
  })
})
