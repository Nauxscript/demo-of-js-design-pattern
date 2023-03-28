interface Instance {
  name: string
  container: HTMLDivElement
}

export const initDialog = () => {
  const dialogContainer = document.createElement('div')
  dialogContainer.setAttribute('id', 'the-only-dialog-container')
  const instance = {
    name: 'this is a dialog',
    container: dialogContainer,
  }
  return instance
}

const createSingleton = (fn) => {
  let onlyInstance: Instance
  return function (...arg) {
    onlyInstance = onlyInstance || fn.apply(this, arg)
    return onlyInstance
  }
}

export const createDialog = createSingleton(initDialog)
