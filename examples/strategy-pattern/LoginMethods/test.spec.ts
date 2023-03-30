import { describe, expect, test } from 'vitest'
import { methodStrategies } from '.'

const getUserInfo = () => ({
  userId: 'root',
  userPhone: '13838383838',
})

describe('Strategy Pattern: Third-Party Login Methods', () => {
  describe('when the type of manufacturer is MF1', () => {
    test('when the type of manufacturer is MF1 and method type is qrCode', () => {
      const userInfo = getUserInfo()
      const method = 'qrCode'
      const requestData = methodStrategies[method](userInfo)
      expect(requestData.model).toEqual(method)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
    })

    test('when the type of manufacturer is MF1 and method type is SMS', () => {
      const userInfo = getUserInfo()
      const method = 'SMS'
      const requestData = methodStrategies[method](userInfo)
      expect(requestData.model).toEqual(method)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
      expect(requestData.cellphoneNumber).toEqual(userInfo.userPhone)
    })

    test('when the type of manufacturer is MF1 and method type is PIN', () => {
      const userInfo = getUserInfo()
      const method = 'PIN'
      const form = {
        pinValue: '9527',
      }
      const requestData = methodStrategies[method](userInfo, form)
      expect(requestData.model).toEqual(method)
      expect(requestData.damnParamA).toBeDefined()
      expect(requestData.userCode).toEqual(userInfo.userId)
      expect(requestData.pinValue).toEqual(form.pinValue)
    })
  })

  describe('when the type of manufacturer is MF2', () => {
    test('when the type of manufacturer is MF2 and method type is XXX_CODE', () => {
      const userInfo = getUserInfo()
      const method = 'XXX_CODE'
      const requestData = methodStrategies[method](userInfo)
      expect(requestData.method).toEqual(method)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
    })

    test('when the type of manufacturer is MF2 and method type is XXX_SMS', () => {
      const userInfo = getUserInfo()
      const method = 'XXX_SMS'
      const requestData = methodStrategies[method](userInfo)
      expect(requestData.method).toEqual(method)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
      expect(requestData.phone).toEqual(userInfo.userPhone)
    })

    test('when the type of manufacturer is MF2 and method type is XXX_PIN', () => {
      const userInfo = getUserInfo()
      const method = 'XXX_PIN'
      const form = {
        pinValue: '9527',
      }
      const requestData = methodStrategies[method](userInfo, form)
      expect(requestData.method).toEqual(method)
      expect(requestData.damnParamB).toBeDefined()
      expect(requestData.account).toEqual(userInfo.userId)
      expect(requestData.pin).toEqual(form.pinValue)
    })
  })
})
