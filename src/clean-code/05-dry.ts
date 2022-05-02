type Size = '' | 's' | 'm' | 'l' | 'xl'
class Product {
  constructor(public name: string = '', public price: number = 0, public size: Size = '') {}
  toString() {
    if (this.name.length <= 0) throw new Error('name is empty')
    if (this.price <= 0) throw new Error('price is empty')
    if (this.size.length <= 0) throw new Error('size is empty')
    return `${this.name} cuesta ${this.price} en la talla ${this.size}`
  }
}
;(() => {
  const bluePants = new Product('blue pants')
  console.log(bluePants.toString())
})()
