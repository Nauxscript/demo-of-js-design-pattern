export enum States {
  INPUT = 'INPUT', // 待提交
  SUBMIT = 'SUBMIT', // 待审签
  CHECK_REJECT = 'CHECK_REJECT', // 审签退回
  CHECK = 'CHECK', // 已审签
  PRINTED = 'PRINTED', // 已打印
}

export interface User {
  role: number
}

interface State {
  prev: () => void
  next: (role?: User['role']) => void
  getState: () => States
}

type TFSW = Record<States, State>

const finiteState: TFSW = {
  INPUT: {
    prev() {
      this.state = finiteState[States.INPUT]
    },
    next(role = 1) {
      this.state = role > 1 ? finiteState[States.CHECK] : finiteState[States.SUBMIT]
    },
    getState() {
      return States.INPUT
    },
  },
  SUBMIT: {
    prev() {
      this.state = finiteState[States.INPUT]
    },
    next() {
      this.state = finiteState[States.CHECK]
    },
    getState() {
      return States.SUBMIT
    },
  },
  CHECK_REJECT: {
    prev() {
      this.state = finiteState[States.INPUT]
    },
    next() {
      this.state = finiteState[States.CHECK]
    },
    getState() {
      return States.CHECK_REJECT
    },
  },
  CHECK: {
    prev() {
      this.state = finiteState[States.CHECK_REJECT]
    },
    next() {
      this.state = finiteState[States.PRINTED]
    },
    getState() {
      return States.CHECK
    },
  },
  PRINTED: {
    prev() {
      this.state = finiteState[States.PRINTED]
    },
    next() {
      this.state = finiteState[States.PRINTED]
    },
    getState() {
      return States.PRINTED
    },
  },
}

class ClinicalRecord {
  state: State

  constructor(public doctor: User) {
    this.state = finiteState[States.INPUT]
  }

  get currState() {
    return this.state.getState()
  }

  prev() {
    this.state.prev.call(this)
  }

  next() {
    this.state.next.call(this, this.doctor.role)
  }
}

export default ClinicalRecord
