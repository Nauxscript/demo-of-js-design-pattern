import { describe, expect, test } from 'vitest'
import { createDialog } from '.'

describe('Singleton Pattern: simple global dialog', () => {
  test('alway return the same one object', () => {
    const firstDialog = createDialog()
    const secondDialog = createDialog()
    expect(firstDialog).toBe(secondDialog)
  })
})
