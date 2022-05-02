type Size = '' | 's' | 'm' | 'l' | 'xl'

class Product {
  constructor(public name: string = '', public price: number = 0, public size: Size = '') {}
  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0) throw Error(`${key} is empty`)
          break
        case 'number':
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`)
          break
        default:
          throw Error(`${typeof this[key]} is not valid`)
      }
    }

    return true
  }

  toString() {
    //No DRY
    // if (this.name.length <= 0) throw new Error('name is empty')
    // if (this.price <= 0) throw new Error('price is empty')
    // if (this.size.length <= 0) throw new Error('size is empty')

    // for (const key in this) {
    //   console.log(key, typeof this[key])
    // }
    if (!this.isProductReady()) return

    return `${this.name} cuesta ${this.price} en la talla ${this.size}`
  }
}
;(() => {
  const bluePants = new Product('blue pants', 3, 's')
  console.log(bluePants.toString())
})()
