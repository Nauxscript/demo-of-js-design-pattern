import { describe, expect, test } from 'vitest'
import type { User } from '.'
import ClinicalRecord, { States } from '.'

const baiscUser: User = {
  role: 1,
}

const advanceUser: User = {
  role: 2,
}

describe('Finite State Machine Pattern: clinical record states transfer flow', () => {
  test('basic flow', () => {
    const record = new ClinicalRecord(baiscUser)
    expect(record.currState).toBe(States.INPUT)
    record.next()
    expect(record.currState).toBe(States.SUBMIT)
    record.next()
    expect(record.currState).toBe(States.CHECK)
    record.next()
    expect(record.currState).toBe(States.PRINTED)
  })

  test('INPUT back flow', () => {
    const record = new ClinicalRecord(baiscUser)
    record.next()
    expect(record.currState).toBe(States.SUBMIT)
    record.prev()
    expect(record.currState).toBe(States.INPUT)
  })

  test('CHECK back flow', () => {
    const record = new ClinicalRecord(baiscUser)
    record.next()
    record.next()
    expect(record.currState).toBe(States.CHECK)
    record.prev()
    expect(record.currState).toBe(States.CHECK_REJECT)
  })

  test('CHECK_REJECT back flow', () => {
    const record = new ClinicalRecord(baiscUser)
    record.next()
    record.next()
    record.prev()
    expect(record.currState).toBe(States.CHECK_REJECT)
    record.prev()
    expect(record.currState).toBe(States.INPUT)
  })

  test('PRINTED can\'t go back or go next', () => {
    const record = new ClinicalRecord(baiscUser)
    record.next()
    record.next()
    record.next()
    expect(record.currState).toBe(States.PRINTED)
    record.prev()
    expect(record.currState).toBe(States.PRINTED)
    record.next()
    expect(record.currState).toBe(States.PRINTED)
  })

  test('if user has advanced permisson (role = 2), record state can jump from INPUT to CHECK', () => {
    const record = new ClinicalRecord(advanceUser)
    record.next()
    expect(record.currState).not.toBe(States.SUBMIT)
    expect(record.currState).toBe(States.CHECK)
  })
})
