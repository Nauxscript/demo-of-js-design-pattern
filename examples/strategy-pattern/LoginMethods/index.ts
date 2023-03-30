export enum Methods {
  qrCode = 'qrCode',
  SMS = 'SMS',
  PIN = 'PIN',
  XXX_CODE = 'XXX_CODE',
  XXX_SMS = 'XXX_SMS',
  XXX_PIN = 'XXX_PIN',
}

export interface User {
  userId: string
  userPhone: string
}

export interface Form {
  pinValue: string
}

export const methodStrategies = {
  qrCode: (user: User) => {
    return {
      model: Methods.qrCode,
      damnParamA: 'damnParamA',
      userCode: user.userId,
    }
  },
  SMS: (user: User) => {
    return {
      model: Methods.SMS,
      damnParamA: 'damnParamA',
      userCode: user.userId,
      cellphoneNumber: user.userPhone,
    }
  },
  // form data is the input by user
  PIN: (user: User, form: Form) => {
    return {
      model: Methods.PIN,
      damnParamA: 'damnParamA',
      userCode: user.userId,
      pinValue: form.pinValue,
    }
  },
  XXX_CODE: (user: User) => {
    return {
      method: Methods.XXX_CODE,
      damnParamB: 'damnParamB',
      account: user.userId,
    }
  },
  XXX_SMS: (user: User) => {
    return {
      method: Methods.XXX_SMS,
      damnParamB: 'damnParamB',
      account: user.userId,
      phone: user.userPhone,
    }
  },
  // form data is the input by user
  XXX_PIN: (user: User, form: Form) => {
    return {
      method: Methods.XXX_PIN,
      damnParamB: 'damnParamB',
      account: user.userId,
      pin: form.pinValue,
    }
  },
}
