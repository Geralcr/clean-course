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
    constructor(
      public HTMLInputElement: HtmlElement,
      public inputAttributes: InputAttributes,
      public inputEvents: InputEvents
    ) {}
  }

  const nameField = new InputElement(
    new HtmlElement('123', 'input'),
    new InputAttributes('1', 'text'),
    new InputEvents()
  )

  console.log({ nameField })
  console.log(nameField.inputEvents.isActive)
})()
