import { beforeEach, describe, expect, test, vi } from 'vitest'

let sum: () => void

describe.skip('Given sum() exists', () => {
  beforeEach(() => {
    sum = vi.fn()
  })

  describe('When sum() is called', () => {
    beforeEach(() => {
      sum()
    })

    test('Then sum() should be called', () => {
      expect(sum).toBeCalled()
    })

    test('Then sum() should not be called', () => {
      expect(sum).not.toBeCalled()
    })
  })
})
