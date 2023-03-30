import { describe, expect, test } from 'vitest'
import type { Form, User } from '.'
import { Methods, methodStrategies } from '.'

const getUserInfo = (): User => ({
  userId: 'root',
  userPhone: '13838383838',
})

describe('Strategy Pattern: Third-Party Login Methods', () => {
  describe('when the type of manufacturer is MF1', () => {
    test('when the type of manufacturer is MF1 and method type is qrCode', () => {
      const userInfo = getUserInfo()
      const requestData = methodStrategies[Methods.qrCode](userInfo)
      expect(requestData.model).toEqual(Methods.qrCode)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
    })

    test('when the type of manufacturer is MF1 and method type is SMS', () => {
      const userInfo = getUserInfo()
      const requestData = methodStrategies[Methods.SMS](userInfo)
      expect(requestData.model).toEqual(Methods.SMS)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
      expect(requestData.cellphoneNumber).toEqual(userInfo.userPhone)
    })

    test('when the type of manufacturer is MF1 and method type is PIN', () => {
      const userInfo = getUserInfo()
      const form: Form = {
        pinValue: '9527',
      }
      const requestData = methodStrategies[Methods.PIN](userInfo, form)
      expect(requestData.model).toEqual(Methods.PIN)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
      expect(requestData.pinValue).toEqual(form.pinValue)
    })
  })

  describe('when the type of manufacturer is MF2', () => {
    test('when the type of manufacturer is MF2 and method type is XXX_CODE', () => {
      const userInfo = getUserInfo()
      const requestData = methodStrategies[Methods.XXX_CODE](userInfo)
      expect(requestData.method).toEqual(Methods.XXX_CODE)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
    })

    test('when the type of manufacturer is MF2 and method type is XXX_SMS', () => {
      const userInfo = getUserInfo()
      const requestData = methodStrategies[Methods.XXX_SMS](userInfo)
      expect(requestData.method).toEqual(Methods.XXX_SMS)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
      expect(requestData.phone).toEqual(userInfo.userPhone)
    })

    test('when the type of manufacturer is MF2 and method type is XXX_PIN', () => {
      const userInfo = getUserInfo()
      const form: Form = {
        pinValue: '9527',
      }
      const requestData = methodStrategies[Methods.XXX_PIN](userInfo, form)
      expect(requestData.method).toEqual(Methods.XXX_PIN)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
      expect(requestData.pin).toEqual(form.pinValue)
    })
  })
})
