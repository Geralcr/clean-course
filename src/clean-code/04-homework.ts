;(() => {
  // Resolver sin la triple condicional dentro del if

  function isRedFruit(fruit: string): boolean {
    const nameFruits = ['manzana', 'cereza', 'ciruela']
    return nameFruits.includes(fruit) ? true : false

    // if (fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela') {
    //   return true
    // } else {
    //   return false
    // }
  }

  // Simplificar esta función

  function getFruitsByColor(color: string): string[] {
    const colorFruits = {
      red: 'red',
      yellow: 'yellow',
      purple: 'purple',
    }

    switch (color) {
      case colorFruits.red:
        return ['manzana', 'fresa']
      case colorFruits.yellow:
        return ['piña', 'banana']
      case colorFruits.purple:
        return ['moras', 'uvas']
      default:
        throw Error('the color must be: red, yellow, purple')
    }

    // if (color === 'red') {
    //   return ['manzana', 'fresa']
    // } else if (color === 'yellow') {
    //   return ['piña', 'banana']
    // } else if (color === 'purple') {
    //   return ['moras', 'uvas']
    // } else {
    //   throw Error('the color must be: red, yellow, purple')
    // }
  }

  // Simplificar esta función
  let isFirstStepWorking = true
  let isSecondStepWorking = true
  let isThirdStepWorking = true
  let isFourthStepWorking = true

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.'
    if (!isSecondStepWorking) return 'Second step broken.'
    if (!isThirdStepWorking) return 'Third step broken.'

    return isFourthStepWorking ? 'Working properly!' : 'Fourth step broken.'

    // if (isFirstStepWorking) {
    //   if (isSecondStepWorking) {
    //     if (isThirdStepWorking) {
    //       if (isFourthStepWorking) {
    //         return 'Working properly!'
    //       } else {
    //         return 'Fourth step broken.'
    //       }
    //     } else {
    //       return 'Third step broken.'
    //     }
    //   } else {
    //     return 'Second step broken.'
    //   }
    // } else {
    //   return 'First step broken.'
    // }
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }) // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }) // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }) // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }) // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }) // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor('pink') }) // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }) // Cambiar los valores de la línea 31 y esperar los resultados
})()
