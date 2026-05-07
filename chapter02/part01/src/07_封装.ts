(function () {
  class Person {
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    // getName() {
    //   return this.name
    // }

    // getAge() {
    //   return this.age
    // }

    // setName(value: string) {
    //   this.name = value
    // }

    // setAge(value: number) {
    //   if (value >= 0) {
    //     this.age = value
    //   }
    // }


    get name() {
      return this._name
    }

    set name(value: string) {
      this._name = value
    }
  }

  const per = new Person('孙悟空', 18)

  // per.name = '猪八戒'
  // per.age = -38

  // per.setName('猪八戒')
  // per.setAge(33)
  console.log(per)


})()