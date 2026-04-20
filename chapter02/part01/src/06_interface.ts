(function () {
  type myType = {
    name: string,
    age: number
  }

  interface myInterface {
    name: string
    age: number
  }

  interface myInterface {
    gender: string
  }

  // const obj: myInterface = {
  //   name: 'sss',
  //   age: 111,
  //   gender: '男'
  // }

  interface myInter {
    name: string

    sayHello(): void
  }

  class MyClass implements myInter {
    name: string
    constructor(name: string) {
      this.name = name
    }

    sayHello(): void {
      console.log('大家好~~')
    }
  }
})();