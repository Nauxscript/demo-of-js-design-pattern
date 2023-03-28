interface Instance {
  name: string
  container: HTMLDivElement
}
let onlyInstance: Instance

export const createDialog = () => {
  if (!onlyInstance) {
    const dialogContainer = document.createElement('div')
    dialogContainer.setAttribute('id', 'the-only-dialog-container')
    onlyInstance = {
      name: 'this is a dialog',
      container: dialogContainer,
    }
  }

  return onlyInstance
}
