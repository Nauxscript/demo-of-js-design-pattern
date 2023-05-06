import { describe, expect, test } from 'vitest'

export enum States {
  INPUT = 'INPUT', // 待提交
  SUBMIT = 'SUBMIT', // 待审签
  CHECK_REJECT = 'CHECK_REJECT', // 审签退回
  CHECK = 'CHECK', // 已审签
  PRINTED = 'PRINTED', // 已打印
}

describe('Finite State Machine Pattern: clinical record states transfer flow', (params) => {
  test('basic flow', () => {
    const record = new Record()
    expect(record.state.getState()).toBe(States.INPUT)
    record.next()
    expect(record.state.getState()).toBe(States.SUBMIT)
    record.next()
    expect(record.state.getState()).toBe(States.CHECK)
    record.next()
    expect(record.state.getState()).toBe(States.PRINTED)
  })

  test('INPUT back flow', () => {
    const record = new Record()
    record.next()
    expect(record.state.getState()).toBe(States.SUBMIT)
    record.prev()
    expect(record.state.getState()).toBe(States.INPUT)
  })

  test('CHECK back flow', () => {
    const record = new Record()
    record.next()
    record.next()
    expect(record.state.getState()).toBe(States.CHECK)
    record.prev()
    expect(record.state.getState()).toBe(States.CHECK_REJECT)
  })

  test('CHECK_REJECT back flow', () => {
    const record = new Record()
    record.next()
    record.next()
    record.prev()
    expect(record.state.getState()).toBe(States.CHECK_REJECT)
    record.prev()
    expect(record.state.getState()).toBe(States.INPUT)
  })

  test('PRINTED can\'t go back or go next', () => {
    const record = new Record()
    record.next()
    record.next()
    record.next()
    expect(record.state.getState()).toBe(States.PRINTED)
    record.prev()
    expect(record.state.getState()).toBe(States.PRINTED)
    record.next()
    expect(record.state.getState()).toBe(States.PRINTED)
  })

  test('if user has advanced permisson, record state can jump from INPUT to CHECK', () => {
    // TODO...
  })
})
