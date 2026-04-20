(function () {

  class animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('动物在叫~')
    }
  }

  // 定义一个表示狗的类
  class Dog extends animal {
    run() {
      console.log(`${this.name}在跑`)
    }

    sayHello() {
      console.log('汪汪汪汪！')

    }
  }

  class Cat extends animal {
    sayHello() {
      console.log('喵喵喵喵！')

    }
  }


  const dog = new Dog('旺财', 5)
  const cat = new Cat('咪咪', 3)
  console.log(dog)
  dog.sayHello()
  dog.run()
  console.log(cat)
  cat.sayHello()


})()