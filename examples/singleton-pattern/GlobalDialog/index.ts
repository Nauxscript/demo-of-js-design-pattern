const initDialog = (title = 'this is a dialog') => {
  const dialogContainer = document.createElement('div')
  dialogContainer.setAttribute('id', 'the-only-dialog-container')
  dialogContainer.innerText = title
  const instance = {
    title,
    container: dialogContainer,
  }
  return instance
}

const createSingleton = <P extends Array<unknown>, T>(fn: () => T) => {
  let onlyInstance: T
  return function (...arg: P) {
    onlyInstance = onlyInstance || fn.apply(this, arg)
    return onlyInstance
  }
}

export const createDialog = createSingleton(initDialog)
