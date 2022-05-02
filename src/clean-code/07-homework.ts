;(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio'

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {
      return 'setFocus'
    }
    getValue() {
      return 'getValue'
    }
    isActive() {
      return 'isActive'
    }
    removeValue() {
      return 'removeValue'
    }
  }

  //? Idea para la nueva clase InputElement

  class InputElement {
    public HTMLInputElement: HtmlElement
    public inputAttributes: InputAttributes
    public inputEvents: InputEvents
    constructor(value: string, placeholder: string, id: string) {
      this.HTMLInputElement = new HtmlElement(id, 'input')
      this.inputAttributes = new InputAttributes(value, placeholder)
      this.inputEvents = new InputEvents()
    }
  }

  const nameField = new InputElement('1', 'text', '123')

  console.log({ nameField })
  console.log(nameField.inputEvents.isActive())
})()
