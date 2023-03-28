import { describe, expect, test } from 'vitest'
import { createDialog } from '.'

describe('Singleton Pattern: simple global dialog', () => {
  test('dialog is working', () => {
    const title = 'singleton dialog'
    const dialog = createDialog(title)
    expect(dialog.title).toBe(title)
    expect(dialog.container.innerText).toEqual(title)
  })
  test('createDialog alway return the same one object', () => {
    const firstDialog = createDialog()
    const secondDialog = createDialog()
    expect(firstDialog).toBe(secondDialog)
  })
})
